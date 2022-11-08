sleep 8
sudo rm /etc/nginx/sites-available/myproject
sudo cp /home/j_albarracinp/cloud-audio-converter/template-ngnix  /etc/nginx/sites-available/
sudo mv /etc/nginx/sites-available/template-ngnix    /etc/nginx/sites-available/myproject
export PROXY_PASS=api
 PUBLIC_IP_HOST=`wget -q -O - checkip.dyndns.org|sed -e 's/.*Current IP Address: //' -e 's/<.*$//'`
sudo sed -i "s/__PUBLIC_IP_HOST__/$PUBLIC_IP_HOST/g" /etc/nginx/sites-available/myproject
sudo sed -i "s/__PROXY_PASS__/$PROXY_PASS/g" /etc/nginx/sites-available/myproject
sudo systemctl restart nginx
sudo systemctl  unmask  myproject
sudo systemctl stop myproject
sudo systemctl enable myproject
sudo systemctl start myproject
export URL_CONVERTER=http://34.28.4.169
cd /home/j_albarracinp/cloud-audio-converter
source .venv/bin/activate
celery -A broker.tareas  worker -l info
