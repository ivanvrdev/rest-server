const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
    }
});

module.exports = model('User', userSchema);