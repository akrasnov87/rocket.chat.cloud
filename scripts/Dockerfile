FROM node:20.17-bullseye-slim

COPY . /build
COPY . /app
RUN cd /build && npm install
RUN cp -r /build/node_modules /app/node_modules
RUN set DEBUG=rocket.chat.cloud:*

WORKDIR /app

EXPOSE 9001

CMD ["node", "bin/www", "--env-file=/app/.env"]