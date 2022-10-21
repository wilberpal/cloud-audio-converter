from flask_restful import Resource
from ..models import db, User, UserSchema,Task,TaskSchema
from flask import request
import re
import jwt
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import jwt_required, create_access_token
from .. import app

user_schema = UserSchema()
task_schema = TaskSchema()
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

def checkEmail(email):
    if(re.fullmatch(regex, email)):
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
        user = User.query.filter_by(username=u_username, password=u_password).first()
        if user:
            access_token = create_access_token(identity=user.id)
            return {'mensaje':'Inicio de sesion exitoso', 'access token': access_token}, 200
        else:
            return {'mensaje':'Nombre de usuario o contraseña incorrecta'}, 200

class ViewSignUp(Resource):
    @jwt_required()
    def get(self):
        return [user_schema.dump(user) for user in User.query.all()]

    def post(self):
        if not (checkEmail(request.json['email'])):
            return {'message':'Invalid Emial'}, 400
        if not request.json['password1'] == request.json['password2']:
            return {'message':'Password do not match'}, 400
        if not passwordCheck(request.json['password1']):
            return {'message':'Password do not meet the requirements'}, 400
        
        new_user = User(username=request.json['username'], password=request.json['password1'], email=request.json['email'])
        db.session.add(new_user)

        try:
            db.session.commit()
        except IntegrityError:
            db.session.rollback()
            return 'username and email already exits.', 400
        
        return {'mensaje':'User created successfully'}, 200

class ViewTask(Resource):
     @jwt_required()
     def get(self):
        token = request.headers.environ['HTTP_AUTHORIZATION'].split("Bearer ")[1]
        token_data = jwt.decode(token, 'frase-secreta', algorithms=['HS256'])
        paginate=getPagination(request)
        order=Task.id if(request.args.get('order')!='1') else Task.id.desc()
        tasks=Task.query.filter(Task.user_id==token_data['sub']).order_by(order).paginate(page=paginate['page'] , per_page=paginate['per_page'])
        
        for task in tasks:
            task.status=task.status.value
            task.output_extention=task.output_extention.value
            task.user=task.usuario.username
            task.input_extention=task.input_extention.value
        return [task_schema.dump(task) for task in tasks]

def getPagination(request):
    per_page=5 if (request.args.get('max') == None) else int(request.args.get('max'))
    page=1 if (request.args.get('page') == None) else int(request.args.get('page'))
    return {'page':page,'per_page':per_page}