const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getUserRole = async(token) =>{
    try{
        const payload = jwt.verify(token, process.env.SECRET);

        const {role} = await User.findById(payload.uid);
    
        return role;
    }catch(e){
        console.log('Error to get role', e)
    }
}

module.exports = {getUserRole};