const {model, Schema} = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    specs: Array,
    price: {
        type: Number,
        required: true
    },
    active: Boolean
})

module.exports = model('Product', productSchema);