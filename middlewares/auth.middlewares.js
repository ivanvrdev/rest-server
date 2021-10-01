const {body} = require('express-validator');
const {validateFields} = require('./validateFields');

const loginUserMW = [
    body('username', 'Add an email').exists(),
    body('username', 'The email is not well formed').isEmail(),
    body('password', 'Add a password').exists(),
    validateFields
];

module.exports = {loginUserMW};