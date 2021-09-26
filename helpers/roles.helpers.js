const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getRole = async(token) =>{
    try{
        const decodedToken = jwt.verify(token, process.env.SECRET);

        const {role} = await User.findById(decodedToken.id);
    
        return role;
    }catch(e){
        console.log('Error to get role', e)
    }
}

module.exports = {getRole};