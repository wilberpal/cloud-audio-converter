from google.cloud import storage,pubsub_v1
import json
import os
import requests


def subscribeMessages():
    path_gcp_credentials='/Volumes/DATA/EDU/MISO/Cloud/cloud-audio-converter/'
   
    os.environ['GOOGLE_APPLICATION_CREDENTIALS']=path_gcp_credentials+'pubSubKey.json'
    subscription_name='projects/converter-367016/subscriptions/converter-sub'
    subscriber=pubsub_v1.SubscriberClient()

    streaming_pull_future=subscriber.subscribe(subscription_name,callback=callback)

    with subscriber:
        try:
            streaming_pull_future.result()
        except TimeoutError:
            streaming_pull_future.cancel()
            streaming_pull_future.result()

 

def callback(message):
    print(message)
    print(message.attributes['output_extention'])
    url_converter=os.environ.get("URL_CONVERTER", default=None)
    payload = message.attributes
    payload = dict(task_id=message.attributes['task_id'], input_file_id=message.attributes['input_file_id'],output_extention=message.attributes['output_extention'],user_id=message.attributes['user_id'])
     
    content = requests.post(url_converter+'/api/audio/converter', json=payload)
    if content.status_code == 200:
            return {'mensaje':'Regla Creada Exitosamente'}, 200  
    message.ack()

subscribeMessages()