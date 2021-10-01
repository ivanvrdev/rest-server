const {request} = require('express')

/**
 * Es un middleware custom que compara el rol del usuario que realiza
 *  una petición con los roles especeficados al llamar la función
 * @param  {...string} roles 
 * @returns respuesta negativa o deja pasar la request al siguente middleware.
 */
const validateRoles = (...roles) =>{
    return (req = request, res, next) =>{
        if(!roles.includes(req.user.role)){
            return res.json({msg:'Access denied'});
        }
        next();
    }
}

module.exports = {validateRoles};





