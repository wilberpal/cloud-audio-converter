from flask import Flask


from models.models import db
from flask_restful import Api
from views.views import ViewConverter,ViewLogIn
from flask_jwt_extended import JWTManager
import os
from flask import Flask

def create_app(config_name):
        _deployed_env_ = os.environ.get("ENVIRONMENT", default=None)
        app = Flask(__name__)
        print('_deployed_env_='+str(_deployed_env_))
        if(_deployed_env_==None):
                app.config.from_object('configuration.GCPConfig')
        elif (_deployed_env_ == 'gcp'):
                app.config.from_object('configuration.GCPConfig')
        elif (_deployed_env_ == 'dev-jhon'):
                app.config.from_object('configuration.DevJhonConfig')
        else:
                app.config.from_object('configuration.BaseConfig')
     
        return app
app = create_app('default')

app_context = app.app_context()
app_context.push()

db.init_app(app)
##db.create_all()

api = Api(app)
api.add_resource(ViewConverter, '/api/audio/converter')
api.add_resource(ViewLogIn, '/api/auth/login')

jwt = JWTManager(app)