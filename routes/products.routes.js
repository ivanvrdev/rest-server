const router = require('express').Router();
const {body} = require('express-validator');

const {allProducts, newProduct} = require('../controllers/products.controllers');
const {validateFields} = require('../helpers/validation');

router.get('/products/all', allProducts);

router.post('/products/new',
    body('name', 'El nombre del producto debería contener al menos 8 caracteres y no más de 30...')
    .isLength({min:8, max:30}),
    body('description', 'La descripcion debe tener al menos 20 caracteres y no mas de 180...')
    .isLength({min:10, max:180}),
    //add array and price validations later
    validateFields,
    newProduct
);

module.exports = router;

