import datetime
import os
import re
from nis import match

import jwt
from celery import Celery
from flask import redirect, request, url_for
from flask_jwt_extended import create_access_token, jwt_required
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from werkzeug.utils import secure_filename

from ..models import (AudioFormat, File, FileSchema, ProcessStatus, Task,
                      TaskSchema, User, UserSchema, db)

celery_app = Celery(__name__, broker='redis://localhost:6379/0')
user_schema = UserSchema()
task_schema = TaskSchema()
file_schema = FileSchema()
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
ALLOWED_EXTENSIONS = {'mp3', 'ogg', 'wav'}


class ViewConverter(Resource):

    @jwt_required()
    def post(self):
        response= {"mensaje": "Se ha convertido el archivo con exito","error":False}
        q='qq'
        return q
        

       


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
