mv ./nginx.conf /etc/nginx/nginx.conf
sudo systemctl stop nginx
sudo systemctl enable --now nginx
npm run-script build
