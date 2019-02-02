FROM node:10

WORKDIR /app
COPY . /app
RUN npm i

ENTRYPOINT [ "node", "/app/main.js" ]