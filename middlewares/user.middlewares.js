
const {body} = require('express-validator');
const {validateFields} = require('./validateFields');
const {canEdit, canCreate} = require('./validateRoles');
const {existsEmail} = require('./validateEmail');
const {uidIsCorrect} = require('./validateUID');

const middlewares = {};

middlewares.createUserMW = [
    canCreate,
    body('username', 'The email is not well formed').isEmail(),
    body('username', 'The email exists').custom(existsEmail),
    body('password', 'The password must contain between 8 and 20 characters').isLength({max:20, min:8}),
    body('role', 'These role does not exists').isIn(['admin', 'colaborator', 'common']),
    validateFields
];

middlewares.editUserMW = [
    canEdit,
    uidIsCorrect,
    body('username', 'The email is not well formed').isEmail(),
    body('username', 'The email exists').custom(existsEmail),
    body('password', 'The password must contain between 8 and 20 characters').isLength({max:20, min:8}),
    body('role', 'These role does not exists').isIn(['admin', 'colaborator', 'common']),
    validateFields
];

middlewares.deleteUserMW = [
    canEdit,
    uidIsCorrect
];

middlewares.loginUserMW = [
    body('username', 'Add an email').exists(),
    body('username', 'The email is not well formed').isEmail(),
    body('password', 'Add a password').exists(),
    validateFields
];

module.exports = middlewares;