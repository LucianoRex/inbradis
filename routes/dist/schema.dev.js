"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var router = express.Router();

function montaForm(obj) {
  console.log(obj);
  var form = '';
  form += "<form method=\"POST\" action=\"".concat(obj['api'].options.url, "\"> <div class=\"form-row\">");

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (key != '_id' && key != '__v' && key != 'api') {
        console.log(obj[key].options.label);
        form += "<div class=\"form-group ".concat(obj[key].options["class"], "\">\n                <label for=\"exampleInputPassword1\">").concat(obj[key].options.label, "</label>\n                <input type=\"").concat(obj[key].options.tipo, " \" value=\"").concat(obj[key].defaultValue || '', "\" name=\"").concat(key, "\" class=\"form-control\">\n              </div>");
      }
    }
  }

  form += '</div><button class="btn btn-primary"  type="submit">Enviar</button></form>';
  return form;
}

router.get('/', function (req, res, next) {
  var Schema = require("../models/".concat(req.query.schema)); // res.status(200).json(montaForm(Schema.schema.paths))


  res.status(200).json(Schema.schema.paths);
});
router.post('/', function (req, res, next) {
  var item = _objectSpread({}, req.body);

  var data = new Schema(item);
  data.save().then(function (produto) {
    res.status(200).json(produto);
  });
});
module.exports = router;