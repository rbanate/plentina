
FROM node:16-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install

CMD ["npm", "run", "start:dev"]