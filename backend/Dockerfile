FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8000
ENV API_REALTIME='https://stocktraders.vn/service/data/getTotalTradeReal'
ENV URL_KAFKA='kafka:9092'

EXPOSE 8000

CMD [ "npm", "start" ]