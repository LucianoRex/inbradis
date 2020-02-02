const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

function validator() {
    return 'io';
}

const Produto = new Schema({
    _id: {
        type: String,
        label: 'ID',
    },

    codigo: {
        label: 'Código',
        class: 'col-md-4',
        tipo: 'text',
        type: String
    },
    descricao: {
        label: 'Descrição',
        class: 'col-md-4',
        tipo: 'text',
        default: 'Uma descrição',
        //    validate: validator,
        type: String,
    },
    api: {
        type: String,
        url: 'produto'
    }
});




module.exports = Mongoose.model('Produto', Produto);