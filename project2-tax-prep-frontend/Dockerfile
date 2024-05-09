# node version we want to work with
FROM node:17-alpine

# create a working directory
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# expose the port that we want it to run on
EXPOSE 5173

CMD ["npm", "run", "dev"]
