FROM node:10.16.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --production

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]