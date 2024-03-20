FROM node:21.7.1-alpine3.18

RUN mkdir -p /var/log/knverse/user-registration && \
    touch /var/log/knverse/user-registration/stdout.log

RUN chown -R node:node /var/log/knverse

USER node

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm i

EXPOSE 3000

CMD npm run start
