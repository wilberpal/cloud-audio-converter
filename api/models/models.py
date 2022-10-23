from flask_sqlalchemy import SQLAlchemy
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow_enum import EnumField
import enum
db = SQLAlchemy()

TASK_DB_NAME='task'
USER_DB_NAME='user'
FILE_DB_NAME='file'

USER_ID_DB_NAME='user.id'
FILE_ID_DB_NAME='file.id'

CASCADE_FULL_DB = 'all, delete, delete-orphan'
class AudioFormat(enum.Enum):
    MP3 = "MP3"
    OGG="OGG"
    WAV="WAV"

class ProcessStatus(enum.Enum):
    PROCESSED = "PROCESSED"
    UPLOADED = "UPLOADED"

class User(db.Model):
    __tablename__ = USER_DB_NAME
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(32))
    email = db.Column(db.String(64))
    password = db.Column(db.String(32))
    tasks = db.relationship('Task', cascade=CASCADE_FULL_DB)
    files = db.relationship('File', cascade=CASCADE_FULL_DB)
    __table_args__ = (db.UniqueConstraint('username', 'email', name='unique_user'),)

class File(db.Model):
    __tablename__ = FILE_DB_NAME
    id = db.Column(db.Integer, primary_key = True)
    name= db.Column(db.String(200))
    extention= db.Column(db.Enum(AudioFormat))
    path= db.Column(db.String(200))
    timestamp = db.Column(db.DateTime, default=db.func.now()) 

    user_id= db.Column(db.Integer, db.ForeignKey(USER_ID_DB_NAME), nullable=False)
    
    usuario = db.relationship('User')

class Task(db.Model):
    __tablename__ = TASK_DB_NAME
    id = db.Column(db.Integer, primary_key = True)
    status = db.Column(db.Enum(ProcessStatus))
    input_extention= db.Column(db.Enum(AudioFormat))
    output_extention= db.Column(db.Enum(AudioFormat))

    input_file_id= db.Column(db.Integer, db.ForeignKey(FILE_ID_DB_NAME), nullable=False)
    output_file_id= db.Column(db.Integer, db.ForeignKey(FILE_ID_DB_NAME))
    user_id= db.Column(db.Integer, db.ForeignKey(USER_ID_DB_NAME), nullable=False)

    usuario = db.relationship('User')
    #file = db.relationship('File')


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        include_relationships = True
        load_instance = True

class TaskSchema(SQLAlchemyAutoSchema):

    class Meta:
        model = Task
        include_relationships = True
        load_instance = True

class FileSchema(SQLAlchemyAutoSchema):
    input_extention=EnumField(AudioFormat, by_value=True)
    output_extention=EnumField(AudioFormat, by_value=True)
    class Meta:
        model = File
        include_relationships = True
        load_instance = True
