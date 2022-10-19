from converter import create_app
from .models import db
from flask_restful import Api
from .views import ViewSignUp, ViewLogIn
from flask_jwt_extended import JWTManager

app = create_app('default')
app_context = app.app_context()
app_context.push()

db.init_app(app)
db.create_all()

api = Api(app)
api.add_resource(ViewSignUp, '/api/auth/signup')
api.add_resource(ViewLogIn, '/api/auth/login')

jwt = JWTManager(app)