const {validationResult} = require('express-validator');

const validateFields = async (req, res, next) => {
    const errors = await validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errores: errors.array()});     
    }
    next();
}

module.exports = {validateFields};