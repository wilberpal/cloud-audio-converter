import datetime

import jwt
from celery import Celery
from flask import current_app, redirect, request, url_for
from flask_jwt_extended import create_access_token, jwt_required
from flask_restful import Resource
from models.models import (AudioFormat, File, FileSchema, ProcessStatus, Task,
                           TaskSchema, User, UserSchema, db)
from pydub import AudioSegment
from sqlalchemy.exc import IntegrityError
from werkzeug.utils import secure_filename

celery_app = Celery(__name__, broker='redis://localhost:6379/0')
user_schema = UserSchema()
task_schema = TaskSchema()
file_schema = FileSchema()
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
ALLOWED_EXTENSIONS = {'mp3', 'ogg', 'wav'}


class ViewConverter(Resource):

    def post(self):
        try:
            if not allowedFile('q.'+request.json["output_extention"]):
                return {"mensaje": "El formato de salida no es valido (mp3, ogg, wav)", "error": True}

            user = User.query.get_or_404(request.json["user_id"])
            task = Task.query.get_or_404(request.json["task_id"])
            file = File.query.get_or_404(request.json["input_file_id"])
            output_extention = request.json["output_extention"]
            path_files=current_app.config['PATH_FILES']
            new_path = path_files+datetime.datetime.now().strftime("%m_%d_%Y_%H_%M_%S_%f") + \
                '.'+output_extention
            input_file_path = file.path
            input_file_format = file.path.split(".")[1]
            input_path= pathRoot()+input_file_path
            from_file = AudioSegment.from_file(
                pathRoot()+input_file_path, input_file_format)
            from_file.export(pathRoot()+new_path, format=output_extention)

            new_file = File(name=file.name.split(".")[0]+"."+output_extention, extention=getExtention(
                output_extention), path=new_path, timestamp=datetime.datetime.now(), user_id=user.id)
            db.session.add(new_file)
            db.session.commit()

            task.output_file_id = new_file.id
            task.status = ProcessStatus.PROCESSED
            db.session.commit()
            return {"mensaje": "Se ha convertido el archivo con exito", "error": False}
        except NameError:
            return {"mensaje": "Hubo un error no esperado", "error": True}


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


def pathRoot():
    return current_app.config['PATH_ROOT'] if (current_app.config['PATH_ROOT'] != None)else current_app.root_path
