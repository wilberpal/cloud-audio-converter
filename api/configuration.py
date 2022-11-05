class BaseConfig(object):
    ##postgresql://<nombre_usuario>:<password>@<host>:<puerto>/<nombre_basededatos>
    SQLALCHEMY_DATABASE_URI= 'postgresql://converter:0123456789@localhost:5432/postgres'
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    JWT_SECRET_KEY='frase-secreta'
    PROPAGATE_EXCEPTIONS=True
    PATH_ROOT=None
    PATH_FILES='/files/'

class GCPConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI= 'postgresql://postgres:0123456789@35.238.2.63:5432/postgres'
    PATH_FILES='/home/'
    
class DevJhonConfig(BaseConfig):
    PATH_FILES='/files/'
    PATH_ROOT="/Volumes/DATA/EDU/MISO/Cloud/cloud-audio-converter/api"
    SQLALCHEMY_DATABASE_URI= 'postgresql://postgres:0123456789@35.238.2.63:5432/postgres'
