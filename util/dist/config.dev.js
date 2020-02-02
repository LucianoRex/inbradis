"use strict";

var environment = "dev";
var serverURLs = {
  "dev": {
    "NODE_SERVER": "http://localhost",
    "NODE_SERVER_PORT": "3000",
    "MONGO_DB": "mongodb://localhost:27017/inbradis"
  },
  "production": {
    "NODE_SERVER": "http://11.11.11.11",
    "NODE_SERVER_PORT": "3000",
    "MONGO_DB": "mongodb://localhost:27017/inbradis"
  }
};
var config = {
  "DB_URL": {
    "url": "".concat(serverURLs[environment].MONGO_DB)
  },
  "NODE_SERVER_PORT": {
    "port": "".concat(serverURLs[environment].NODE_SERVER_PORT)
  },
  "NODE_SERVER_URL": {
    "url": "".concat(serverURLs[environment].NODE_SERVER)
  }
};
module.exports = {
  config: config
};