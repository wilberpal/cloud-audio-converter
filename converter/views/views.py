from flask_restful import Resource
from ..models import db, User, UserSchema
from flask import request
import re
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import jwt_required, create_access_token


user_schema = UserSchema()
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
            access_token = create_access_token(identity=request.json['username'])
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