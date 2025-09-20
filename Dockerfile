FROM node:22-slim

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN npx nest build

EXPOSE 3000

CMD ["node", "dist/main"]
