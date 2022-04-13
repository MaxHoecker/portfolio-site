sudo systemctl stop nginx
cp ./max-hoecker.conf /etc/nginx/conf.d/
sudo systemctl start nginx
#npm run-script build
