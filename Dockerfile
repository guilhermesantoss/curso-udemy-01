FROM node:alpine
LABEL author="Guilherme Santos"
LABEL version="1.0.0"

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

CMD [ "npm", "start" ]
