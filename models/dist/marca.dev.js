"use strict";

var Mongoose = require('mongoose');

var Schema = Mongoose.Schema;

function validator() {
  return 'io';
}

var Marca = new Schema({
  codigo: {
    label: 'Código',
    tipo: 'text',
    type: String
  },
  marca: {
    label: 'Marca',
    tipo: 'text',
    //    validate: validator,
    type: String
  },
  api: {
    type: String,
    url: 'produto'
  }
});
module.exports = Mongoose.model('Marca', Marca);