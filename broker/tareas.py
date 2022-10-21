import os
from celery import Celery
from celery.signals import task_postrun
import requests
from requests.exceptions import ConnectionError


celery_app = Celery(__name__, broker='redis://localhost:6379/0')

@celery_app.task(name='convert_file')
def convert_file(task_id,input_file_id, output_extention, user_id,retry):
    try:
        payload = dict(task_id=task_id, input_file_id=input_file_id,output_extention=output_extention,user_id=user_id)
        content = requests.post('http://127.0.0.1:5001/api/audio/converter', json=payload)
        print(content.json())
        print(payload)
        if content.status_code == 200:
            return {'mensaje':'Regla Creada Exitosamente'}, 200            
        else:
            retryOn(task_id,input_file_id, output_extention, user_id,retry)
            return content.json(), 500
    except:        
        print('****** 28 ******')
        retryOn(task_id,input_file_id, output_extention, user_id,retry)
   
    

def retryOn(task_id,input_file_id, output_extention, user_id,retry):
    retry += 1
    args = (task_id,input_file_id, output_extention, user_id,retry)
    timetorun = retry * 5
    if(timetorun > 50): timetorun = 60
    print('******** send retry: ' + str(retry) + ' on ' + str(timetorun))
    convert_file.apply_async(args, countdown=timetorun)