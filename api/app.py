from flask import Flask
from api import create_app


from models.models import db
from flask_restful import Api
from flask_jwt_extended import JWTManager

from views.views import ViewFile, ViewLogIn, ViewSignUp, ViewTask, ViewTasks
from flask import current_app


app = create_app('default')
app_context = app.app_context()
app_context.push()

db.init_app(app)
db.create_all()

api = Api(app)
api.add_resource(ViewSignUp, '/api/auth/signup')
api.add_resource(ViewLogIn, '/api/auth/login')
api.add_resource(ViewTasks, '/api/tasks')
api.add_resource(ViewTask, '/api/tasks/<int:id>')
api.add_resource(ViewFile, '/api/files/<name>')

jwt = JWTManager(app)