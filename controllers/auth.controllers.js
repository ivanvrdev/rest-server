const bcryptjs = require('bcryptjs');
const {generateJWT} = require('../helpers/jwt.helpers');
const User = require('../models/users.model');

/**
 * Controlador de login de usuario
 * @param {object} req 
 * @param {object} res 
 * @returns si el usuario es autenticado devuelve un token, si no un mensaje de acceso denegado.
 */

const loginUser = async (req, res)=>{
    /**
     * Obtener usuario y contraseña de la request
     */
    const {username, password} = req.body;

    try {
        /**
         * Consultar si existe el usuario a la base de datos
         */
        const user = await User.findOne({username});

        if(!user){
            res.json({msg: 'Access denied'});
            return;
        }
        /**
         * Verificar que el usuario esté activo
         */
        if(!user.active == true){
            res.json({msg: 'Access denied'});
            return;
        }
        /**Validar la contraseña */
        if (!bcryptjs.compareSync(password, user.password)) {
            res.json({msg: 'Access denied'});
            return;
        }
        /**
         * Generar el token.
         */
        const uid = user._id;
        const token = generateJWT({uid});
        /**
         * Enviar el token al usuario.
         */
        res.json({
            msg: 'Welcome!', 
            token
        });
    } catch (e) {
        console.log('Error to login user', e);
        res.json({msg: 'Error to login user! Try it again later...'});
    }
}

module.exports = {loginUser};