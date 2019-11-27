FROM node:alpine as build

WORKDIR /home/node/app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=build /home/node/app/build /usr/share/nginx/html