import os
from flask import Flask

def create_app(config_name):
        _deployed_env_ = os.environ.get("ENVIRONMENT", default=None)
        app = Flask(__name__)
        print('_deployed_env_='+_deployed_env_)
        if (_deployed_env_ == 'gcp'):
                app.config.from_object('api.configuration.GCPConfig')
        elif (_deployed_env_ == 'dev-jhon'):
                app.config.from_object('api.configuration.DevJhonConfig')
        else:
                app.config.from_object('api.configuration.BaseConfig')
     
        return app



