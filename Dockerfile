FROM node:lts as builder


ARG PUBLIC_WEBMENTIOND_TOKEN=setthis
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm install && npm install sharp
COPY . .
RUN npm run astro telemetry disable
RUN npm run build

FROM nginx:latest
COPY --from=builder /src/dist/ /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
