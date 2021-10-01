const {validationResult} = require('express-validator');
/**
 * Recolecta los errores de los middlewares de la librería express-validator
 * @param {object} req 
 * @param {object} res 
 * @param {*} next 
 * @returns Errores en caso de que los haya.
 */
const validateFields = async (req, res, next) => {
    /**
     * Función de la librería de express-validator que recolecta los errores de la request.
     */
    const errors = await validationResult(req);
    /**Verificar si hay errrores */
    if(!errors.isEmpty()) {
        res.status(400).json({errores: errors.array()});

        return;     
    }
    next();
}

module.exports = {validateFields};