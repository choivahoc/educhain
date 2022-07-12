FROM node:14-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
#RUN npm run builddev
RUN npm run build
EXPOSE 4200
CMD [ "npm", "start" ]
