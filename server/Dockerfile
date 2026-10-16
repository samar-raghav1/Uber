FROM node:20 AS build

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .


FROM node:20-slim

WORKDIR /app
COPY --from=build /app .

EXPOSE 8000

CMD ["npm","start"]