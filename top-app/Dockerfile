FROM node:14-alpine

# Create app directory
WORKDIR /opt/app
ADD package.json package.json

# Install app dependencies
RUN npm install

# Bundle app source
ADD . .

ENV NODE_ENV production

RUN npm run build

RUN npm prune --production

CMD [ "npm", "start" ]

EXPOSE 3000