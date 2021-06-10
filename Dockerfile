FROM node:12 as node

WORKDIR /app
COPY ./ /app
RUN npm install
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=node /app/dist/store-angular /usr/share/nginx/html

