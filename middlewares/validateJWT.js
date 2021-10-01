const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
require('dotenv').config();

const validateJWT = async(req, res, next) =>{
    const token = req.headers['token'];
    if(!token){
        res.json({msg: 'Access denied'})
        return;
    }
    try{
        const decodedToken = jwt.verify(token, process.env.SECRET);
        if (!decodedToken) {
            res.json({msg: 'Access denied'})
            return;
        }

        const user = await User.findById(decodedToken.uid);
        req.user = user;

        next();
    }catch(e){
        console.log('Error to validate Token: ', e);
        res.json({msg: 'Access denied'})
    }
};

module.exports = {validateJWT};