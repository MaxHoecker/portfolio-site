sudo systemctl stop nginx
cp ./nginx.conf /etc/nginx/conf.d/
sudo systemctl start nginx
npm run-script build
