const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
    }
});

module.exports = model('User', userSchema);