const {validationResult} = require('express-validator');

const validateFields = async (req, res, next) => {
    const errors = await validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({errores: errors.array()});

        return;     
    }
    next();
}

module.exports = {validateFields};