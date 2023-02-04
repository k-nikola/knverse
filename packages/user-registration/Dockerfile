# Build stage
FROM node:19.4.0 as build

ARG NPM_TOKEN

USER node

RUN echo "//knverse.jfrog.io/artifactory/api/npm/knverse/:_authToken=$NPM_TOKEN" > ~/.npmrc \
    && echo "@knverse:registry=https://knverse.jfrog.io/artifactory/api/npm/knverse/" >> ~/.npmrc

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm i

# Run stage
FROM node:19.4.0-alpine3.16

WORKDIR /usr/src/app

USER node

COPY --from=build /usr/src/app /usr/src/app

EXPOSE 3000

CMD ["node", "dist/app.js"]
