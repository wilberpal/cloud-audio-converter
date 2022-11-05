class BaseConfig(object):
    ##postgresql://<nombre_usuario>:<password>@<host>:<puerto>/<nombre_basededatos>
    SQLALCHEMY_DATABASE_URI= 'postgresql://converter:0123456789@localhost:5432/postgres'
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    JWT_SECRET_KEY='frase-secreta'
    PROPAGATE_EXCEPTIONS=True
    PATH_ROOT=None
    PATH_FILES='/files/'

class GCPConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI= 'postgresql://postgres:0123456789@35.194.21.210:5432/postgres'
    PATH_GCP_CREDENTIALS='/home/j_albarracinp/cloud-audio-converter/'
    
class DevJhonConfig(BaseConfig):
    PATH_ROOT="/Volumes/DATA/EDU/MISO/Cloud/cloud-audio-converter/api"
    SQLALCHEMY_DATABASE_URI= 'postgresql://postgres:0123456789@35.194.21.210:5432/postgres'
    PATH_GCP_CREDENTIALS='/Volumes/DATA/EDU/MISO/Cloud/cloud-audio-converter/'
