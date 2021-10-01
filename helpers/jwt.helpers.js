const jwt = require('jsonwebtoken');
require('dotenv').config()

/**
 * Esta función genera un jsonwebtoken a partir de un objeto y una clave de seguridad.
 * @param {object} payload El objeto que vamos a convertir en token.
 * @returns {string} El token.
 */

const generateJWT = (payload) =>{
    /**
     * Conversión a token.
     */
    const token = jwt.sign(payload, process.env.SECRET);
    return token;
}

module.exports = {generateJWT};