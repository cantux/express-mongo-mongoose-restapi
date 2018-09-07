FROM node:latest
RUN mkdir /nodeapp
WORKDIR /nodeapp
COPY ./app/package.json /nodeapp
RUN npm install
COPY ./app /nodeapp
EXPOSE 3000
CMD ["npm", "start"]
