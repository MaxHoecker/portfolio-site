sudo systemctl stop nginx
mv ./nginx.conf /etc/nginx/nginx.conf
sudo systemctl start nginx
npm run-script build
