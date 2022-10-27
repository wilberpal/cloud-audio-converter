import datetime
import os
import re

import jwt
import requests
from celery import Celery
from flask import redirect, request, send_file, url_for
from flask_jwt_extended import create_access_token, jwt_required
from flask_restful import Resource
from requests.exceptions import ConnectionError
from sqlalchemy.exc import IntegrityError
from werkzeug.utils import secure_filename

from models import (AudioFormat, File, FileSchema, ProcessStatus, Task,
                      TaskSchema, User, UserSchema, db)

celery_app = Celery(__name__, broker='redis://localhost:6379/0')
user_schema = UserSchema()
task_schema = TaskSchema()
file_schema = FileSchema()
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
ALLOWED_EXTENSIONS = {'mp3', 'ogg', 'wav'}


def checkEmail(email):
    if (re.fullmatch(regex, email)):
        return True
    else:
        return False


def passwordCheck(password):
    length_error = len(password) < 4
    digit_error = re.search(r"\d", password) is None
    lowercase_error = re.search(r"[a-z]", password) is None
    return not (length_error or digit_error or lowercase_error)


class ViewLogIn(Resource):
    def post(self):
        u_username = request.json['username']
        u_password = request.json['password']
        user = User.query.filter_by(
            username=u_username, password=u_password).first()
        if user:
            access_token = create_access_token(identity=user.id)
            return {'mensaje': 'Inicio de sesion exitoso', 'access token': access_token}, 200
        else:
            return {'mensaje': 'Nombre de usuario o contraseña incorrecta'}, 200


class ViewSignUp(Resource):
    @jwt_required()
    def get(self):
        return [user_schema.dump(user) for user in User.query.all()]

    def post(self):
        if not (checkEmail(request.json['email'])):
            return {'message': 'Invalid Emial'}, 400
        if not request.json['password1'] == request.json['password2']:
            return {'message': 'Password do not match'}, 400
        if not passwordCheck(request.json['password1']):
            return {'message': 'Password do not meet the requirements'}, 400

        new_user = User(
            username=request.json['username'], password=request.json['password1'], email=request.json['email'])
        db.session.add(new_user)

        try:
            db.session.commit()
        except IntegrityError:
            db.session.rollback()
            return 'username and email already exits.', 400

        return {'mensaje': 'User created successfully'}, 200


class ViewTask(Resource):
    @jwt_required()
    def get(self, id):
        try:
            task = Task.query.get_or_404(id)
            task.status = task.status.value
            task.output_extention = task.output_extention.value
            # task.user=task.usuario.username
            task.input_extention = task.input_extention.value
            t = task_schema.dump(Task.query.get_or_404(id))
            t["usuario"] = task.usuario.username
            return t
        except:
            return error()

    @jwt_required()
    def put(self, id):
        try:                         
         
            if not allowedFile('q.'+request.json['newFormat']):
                return {"mensaje": "El formato de salida no es valido (mp3, ogg, wav)", "error": True}

            task = Task.query.get_or_404(id)  
            task.output_extention = getExtention(request.json['newFormat'])
            task.status=ProcessStatus.UPLOADED

            if(task.output_file_id != None):                
                output_file = File.query.get_or_404(task.output_file_id)
                task.output_file_id= None
                os.remove(os.path.join("files", output_file.path.split("/")[1])) 
                db.session.delete(output_file)
                db.session.commit()

            db.session.commit() 
            args = (task.id, task.input_file_id,
                        request.json['newFormat'], task.user_id, 0) 
            convert_file.apply_async(args)          
            task.status = task.status.value
            task.output_extention = task.output_extention.value
            # task.user=task.usuario.username
            task.input_extention = task.input_extention.value
            t = task_schema.dump(Task.query.get_or_404(id))
            t["usuario"] = task.usuario.username   
            return t
        except NameError:
            error=NameError
            return error()

    @jwt_required()
    def delete(self, id):
        try:
            task = Task.query.get_or_404(id)            

            if (task.status.value != 'PROCESSED'):
                return {"mensaje": "La tarea no se puede eliminar ya que aún no se ha procesado", "error": True}

            output_file = File.query.get_or_404(task.output_file_id)
            input_file = File.query.get_or_404(task.input_file_id)
            os.remove(os.path.join("files", input_file.path.split("/")[1]))
            os.remove(os.path.join("files", output_file.path.split("/")[1]))      
            db.session.delete(task)
            db.session.commit()
            db.session.delete(output_file)
            db.session.delete(input_file)
            db.session.commit()
            return {'mensaje': 'Tarea eliminada con exito'}, 200
        except NameError:
            error=NameError
            return error()


class ViewTasks(Resource):
    @jwt_required()
    def get(self):
        try:
            token_data = getTokenData(request)
            paginate = getPagination(request)
            order = Task.id if (request.args.get('order')
                                != '1') else Task.id.desc()
            tasks = Task.query.filter(Task.user_id == token_data['sub']).order_by(
                order).paginate(page=paginate['page'], per_page=paginate['per_page'])

           
            for task in tasks.items:
                task.status = task.status.value
                task.output_extention = task.output_extention.value
                task.user = task.usuario.username
                task.input_extention = task.input_extention.value
            return [task_schema.dump(task) for task in tasks.items]
        except:
            return error()

    @jwt_required()
    def post(self):
        try:
            file = request.files['file']
            response = {"mensaje": "Tarea creada con exito", "error": False}
            if 'file' not in request.files or file.filename == '':
                response["error"] = True
                response["mensaje"] = "Debe ingresar un archivo"
            elif 'newFormat' not in request.form:
                response["error"] = True
                response["mensaje"] = "Debe especificar un formato de salida 'newFormat'"
            elif not allowedFile('q.'+request.form['newFormat']):
                response["error"] = True
                response["mensaje"] = "El formato de salida no es valido (mp3, ogg, wav)"
            elif not allowedFile(file.filename):
                response["error"] = True
                response["mensaje"] = "El formato del archivo debe ser (mp3, ogg, wav)"
            else:
                token_data = getTokenData(request)
                file_name = file.filename
                extention = file_name.rsplit('.', 1)[1].lower()
                path = 'files/'+datetime.datetime.now().strftime("%m_%d_%Y_%H_%M_%S_%f") + \
                    '.'+extention
                output_extention = getExtention(request.form['newFormat'])
                user_id = token_data['sub']

                new_file = File(name=file_name, extention=getExtention(
                    extention), path=path, timestamp=datetime.datetime.now(), user_id=user_id)
                db.session.add(new_file)
                db.session.commit()

                new_task = Task(status=ProcessStatus.UPLOADED, input_extention=getExtention(
                    extention), output_extention=output_extention, user_id=user_id, input_file_id=new_file.id)
                db.session.add(new_task)
                db.session.commit()

                file.save(path)
                retry = 0
                args = (new_task.id, new_file.id,
                        request.form['newFormat'], user_id, retry)
                convert_file.apply_async(args)

            return response
        except:
            return error()


class ViewFile(Resource):
    @jwt_required()
    def get(self, name):
        try:
            user = File.query.filter(File.name == name).first()
            path = "../"+user.path
            return send_file(path, as_attachment=True)
        except:

            return error()


@celery_app.task(name='convert_file')
def convert_file(task_id, input_file_id, output_extention, user_id, retry):
    pass


def error():
    return {"mensaje": "Hubo un error no esperado", "error": True}, 500


def getExtention(format):
    if format == 'mp3':
        return AudioFormat.MP3
    elif format == 'ogg':
        return AudioFormat.OGG
    else:
        return AudioFormat.WAV


def allowedFile(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def getTokenData(request):
    token = request.headers.environ['HTTP_AUTHORIZATION'].split("Bearer ")[1]
    return jwt.decode(token, 'frase-secreta', algorithms=['HS256'])


def getPagination(request):
    per_page = 5 if (request.args.get('max') == None) else int(
        request.args.get('max'))
    page = 1 if (request.args.get('page') == None) else int(
        request.args.get('page'))
    return {'page': page, 'per_page': per_page}
