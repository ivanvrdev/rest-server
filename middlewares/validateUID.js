const {request, response} = require('express');
const User = require('../models/users.model');
/**
 * Middleware que verifica si la uid es válida.
 * @param {object} req 
 * @param {object} res 
 * @param {*} next 
 * @returns Error en el caso de que la uid no sea válida
 */
const uidIsCorrect = async(req = request, res = response, next)=>{
    try {
        /**
         * Consultar si existe un usuario con es uid.
         */
        const uid = req.params.uid;
        const user = await User.findById(uid);
    
        if (!user) {
            res.json({msg: 'uid invalid'})
            return;
        }
    
        next();
    } catch (e) {
        console.log('Error to validate uid', e);
    }
}

module.exports = {uidIsCorrect};