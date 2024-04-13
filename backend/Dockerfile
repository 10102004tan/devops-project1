FROM node:20
RUN npm install pm2@latest -g
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
#PORT
EXPOSE 3000
#RUN COMMAND
CMD [ "node", "app.js" ]

