const {body} = require('express-validator');
const {validateFields} = require('./validation');

const userValidation = [
    body('username', 'El email ingresado no es válido').isEmail(),
    body('password', 'La contraseña debe contener entre 8 y 20 caracteres').isLength({min:8, max:20}),
    validateFields
];

module.exports = {userValidation};