const {model, Schema} = require('mongoose');

const noteSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
    }
})

module.exports = model('Note', noteSchema);