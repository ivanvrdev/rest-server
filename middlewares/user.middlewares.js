
const {body} = require('express-validator');
const {validateFields} = require('./validateFields');
const {validateRoles} = require('./validateRoles');
const {existsEmail} = require('./validateEmail');
const {uidIsCorrect} = require('./validateUID');

const middlewares = {};

middlewares.createUserMW = [
    validateRoles('admin', 'colaborator'),
    body('username', 'The email is not well formed').isEmail(),
    body('username', 'The email exists').custom(existsEmail),
    body('password', 'The password must contain between 8 and 20 characters').isLength({max:20, min:8}),
    body('role', 'These role does not exists').isIn(['admin', 'colaborator', 'common']),
    validateFields
];

middlewares.editUserMW = [
    validateRoles('admin'),
    uidIsCorrect,
    body('username', 'The email is not well formed').isEmail(),
    body('username', 'The email exists').custom(existsEmail),
    body('password', 'The password must contain between 8 and 20 characters').isLength({max:20, min:8}),
    body('role', 'These role does not exists').isIn(['admin', 'colaborator', 'common']),
    validateFields
];

middlewares.deleteUserMW = [
    validateRoles('admin'),
    uidIsCorrect
];

module.exports = middlewares;