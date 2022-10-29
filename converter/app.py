from flask import Flask


from models import db
from flask_restful import Api
from views.views import ViewConverter
from flask_jwt_extended import JWTManager
from converter import create_app


app = create_app('default')
app_context = app.app_context()
app_context.push()

db.init_app(app)
##db.create_all()

api = Api(app)
api.add_resource(ViewConverter, '/api/audio/converter')

jwt = JWTManager(app)