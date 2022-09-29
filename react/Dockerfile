# pull official base image
#FROM node:13.12.0-alpine
FROM node:16.13
# set working directory
RUN mkdir /react
WORKDIR /react

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_OPTIONS --max-old-space-size=4096
ENV WDS_SOCKET_PORT=0

# install app dependencies
COPY ./src ./src
COPY ./public ./public

COPY package.json ./

#COPY package-lock.json ./
#RUN npm config set strict-ssl=false
#RUN npm install -g npm@8.4.1
RUN npm install
#RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent
# start app
CMD ["npm", "start"]