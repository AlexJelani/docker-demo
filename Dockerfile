
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./src

RUN npm run install

ENV PORT=8080

EXPOSE 3000

CMD ["npm", "start"]
