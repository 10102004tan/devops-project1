#!/bin/sh
# installs NVM (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ]  && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ]  && \. "$NVM_DIR/bash_completion"

nvm install 20
npm install -g npm@10.5.1

npm install pm2@latest -g

cd /vagrant/backend
pm2 start app.js 

sudo apt update
sudo apt install -y nginx
sudo cp /vagrant/default.txt /etc/nginx/sites-enabled/default
sudo nginx -s reload
