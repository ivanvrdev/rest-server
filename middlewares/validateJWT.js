const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
require('dotenv').config();
/**
 * Middleware que valida el token del usuario que envía solicitudes
 * @param {object} req 
 * @param {object} res 
 * @param {*} next 
 * @returns Un mensaje de error en caso de que el token sea inválido. 
 */
const validateJWT = async(req, res, next) =>{
    /**
     * Obtener el token de la request
     */
    const token = req.headers['token'];
    /**
     * Validar si hay un token
     */
    if(!token){
        res.json({msg: 'Access denied'})
        return;
    }
    try{
        /**
         * Autenticar el token
         */
        const decodedToken = jwt.verify(token, process.env.SECRET);
        if (!decodedToken) {
            res.json({msg: 'Access denied'})
            return;
        }
        /**
         * Agregar el usuario al que pertenece a la request.
         */
        const user = await User.findById(decodedToken.uid);
        req.user = user;

        next();
    }catch(e){
        console.log('Error to validate Token: ', e);
        res.json({msg: 'Access denied'})
    }
};

module.exports = {validateJWT};