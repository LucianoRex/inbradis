var express = require('express');
var router = express.Router();
const Produto = require('../models/produto');



/* GET users listing. */
router.get('/', function (req, res, next) {
    Produto.find().then(produto => {
        res.status(200).json(produto)
    });
});

router.post('/', (req, res, next) => {
    var item = {
        ...req.body
    };

    var data = new Produto(item);
    data.save().then(produto => {
        res.status(200).json(produto)
    });
})

module.exports = router;