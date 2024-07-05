FROM node:20-alpine

WORKDIR app/

COPY package.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

ENV NODE_ENV production

EXPOSE 8080

CMD ["yarn", "start:prod"]