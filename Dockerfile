FROM node:18-alpine3.15 as dependencies
WORKDIR /app
COPY package.json package-lock.json yarn.lock ./
RUN yarn install

FROM node:18-alpine3.15 as development
RUN npm i -g @nestjs/cli
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
CMD ["yarn", "start"]
