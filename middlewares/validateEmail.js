const User = require('../models/users.model');
/**
 * Esta función verifica si ya existe alguien registrado con ese email.
 * @param {string} email 
 */
const existsEmail = async(email) =>{

    const user = await User.findOne({username: email});

    if(user){
        throw new Error("Email exists");
    }
}

module.exports = {existsEmail};