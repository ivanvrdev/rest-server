const {model, Schema} = require('mongoose');

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    especificaciones: Array,
    precio: {
        type: Number,
        required: true
    },
    active: Boolean
})

module.exports = model('Producto', productoSchema);