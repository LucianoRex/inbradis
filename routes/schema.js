var express = require('express');
var router = express.Router();

function montaForm(obj) {
    console.log(obj)
    let form = '';
    form += `<form method="POST" action="${obj['api'].options.url}"> <div class="form-row">`;
    for (let key in obj) {


        if (obj.hasOwnProperty(key)) {
            if (key != '_id' && key != '__v' && key != 'api') {
                console.log(obj[key].options.label)
                form += `<div class="form-group ${obj[key].options.class}">
                <label for="exampleInputPassword1">${obj[key].options.label}</label>
                <input type="${obj[key].options.tipo} " value="${obj[key].defaultValue || ''}" name="${key}" class="form-control">
              </div>`
            }
        }
    }

    form += '</div><button class="btn btn-primary"  type="submit">Enviar</button></form>'
    return form
}

router.get('/',  (req, res, next)=> {
    const Schema = require(`../models/${req.query.schema}`);
   // res.status(200).json(montaForm(Schema.schema.paths))
   res.status(200).json(Schema.schema.paths)
});

router.post('/', (req, res, next) => {
    var item = {
        ...req.body
    };

    var data = new Schema(item);
    data.save().then(produto => {
        res.status(200).json(produto)
    });
})

module.exports = router;