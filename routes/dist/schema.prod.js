"use strict";function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,o)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var express=require("express"),router=express.Router();function montaForm(e){console.log(e);var t="";for(var r in t+='<form method="POST" action="'.concat(e.api.options.url,'"> <div class="form-row">'),e)e.hasOwnProperty(r)&&"_id"!=r&&"__v"!=r&&"api"!=r&&(console.log(e[r].options.label),t+='<div class="form-group '.concat(e[r].options.class,'">\n                <label for="exampleInputPassword1">').concat(e[r].options.label,'</label>\n                <input type="').concat(e[r].options.tipo,' " value="').concat(e[r].defaultValue||"",'" name="').concat(r,'" class="form-control">\n              </div>'));return t+='</div><button class="btn btn-primary"  type="submit">Enviar</button></form>'}router.get("/",function(e,t,r){var o=require("../models/".concat(e.query.schema));t.status(200).json(o.schema.paths)}),router.post("/",function(e,t,r){var o=_objectSpread({},e.body);new Schema(o).save().then(function(e){t.status(200).json(e)})}),module.exports=router;