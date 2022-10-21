from flask import Flask

from api.views.views import ViewTask
from .models import db
from flask_restful import Api
from .views import ViewSignUp, ViewLogIn
from flask_jwt_extended import JWTManager

def create_app(config_name):
        app = Flask(__name__)
        ##postgresql://<nombre_usuario>:<password>@<host>:<puerto>/<nombre_basededatos>
        app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:testing@localhost:5432/postgres'
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

        app.config['JWT_SECRET_KEY']='frase-secreta'

        app.config['PROPAGATE_EXCEPTIONS']=True

        return app

app = create_app('default')
app_context = app.app_context()
app_context.push()

db.init_app(app)
db.create_all()

api = Api(app)
api.add_resource(ViewSignUp, '/api/auth/signup')
api.add_resource(ViewLogIn, '/api/auth/login')
api.add_resource(ViewTask, '/api/tasks')

jwt = JWTManager(app)