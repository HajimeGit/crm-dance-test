FROM node:20.18-alpine AS base

COPY package.json ./

RUN npm install

COPY src ./src

COPY tsconfig.json ./tsconfig.json
COPY .env ./.env

RUN npm run build

FROM node:20.18-alpine

COPY --from=base ./node_modules ./node_modules
COPY --from=base ./package.json ./package.json
COPY --from=base /dist /dist
COPY --from=base ./.env ./.env

EXPOSE 3000
CMD ["npm", "run", "start"]