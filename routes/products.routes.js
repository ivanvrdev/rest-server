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
    body('specs', 'Debe agregar al menos una característica')
    .isLength({min:1, max:20}),
    body('price', 'Debe agregar un precio al producto.')
    .notEmpty(),
    validateFields,
    newProduct
);

module.exports = router;

