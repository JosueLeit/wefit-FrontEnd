FROM node:16-alpine

WORKDIR /app

RUN yarn global add json-server

COPY db.json /app/db.json

ENTRYPOINT ["json-server", "--port", "80", "--host", "0.0.0.0"]
CMD ["/app/db.json"]  