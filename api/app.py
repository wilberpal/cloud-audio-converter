from flask import Flask

from api.models.models import db
from flask_restful import Api
from flask_jwt_extended import JWTManager

from api.views.views import ViewFile, ViewLogIn, ViewSignUp, ViewTask, ViewTasks
import os
from flask import Flask

def create_app(config_name):
        _deployed_env_ = os.environ.get("ENVIRONMENT", default=None)
        app = Flask(__name__)
        print('_deployed_env_='+str(_deployed_env_))
        if(_deployed_env_==None):
                app.config.from_object('api.configuration.GCPConfig')
        elif (_deployed_env_ == 'gcp'):
                app.config.from_object('api.configuration.GCPConfig')
        elif (_deployed_env_ == 'dev-jhon'):
                app.config.from_object('api.configuration.DevJhonConfig')
        else:
                app.config.from_object('api.configuration.BaseConfig')
     
        print(app.config['SQLALCHEMY_DATABASE_URI'])
        return app


app = create_app('default')
print('create app')
app_context = app.app_context()
print('app_context')
app_context.push()
print('push')

db.init_app(app)
print('init_app')
db.create_all()
print('db.create_all()')

api = Api(app)
print('Api')
api.add_resource(ViewSignUp, '/api/auth/signup')
api.add_resource(ViewLogIn, '/api/auth/login')
api.add_resource(ViewTasks, '/api/tasks')
api.add_resource(ViewTask, '/api/tasks/<int:id>')
api.add_resource(ViewFile, '/api/files/<name>')
print('add_resource')

jwt = JWTManager(app)