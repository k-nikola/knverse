# Build stage
FROM node:21.7.1 as build

USER node

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm i

# Run stage
FROM node:21.7.1-alpine3.18

WORKDIR /usr/src/app

USER node

COPY --from=build /usr/src/app /usr/src/app

EXPOSE 3000

CMD npm run start
