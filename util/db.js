var mongoose = require('mongoose');
//mongoose.set('debug', true);
var config = require('./config').config;
//const  client = require('socket.io').listen(3000).sockets;

module.exports = function () {
    mongoose.Promise = global.Promise;
   
    var db = mongoose.
    connect(config.DB_URL.url, {
            useNewUrlParser: true
        },

        () => console.log(`Conectado ao banco de dados ${config.DB_URL.url}`));
   // require('../models/doenca')   
    return db;
};