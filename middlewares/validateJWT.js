const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateJWT = (req, res, next) =>{
    const token = req.headers['token'];
    if(!token){
        res.json({msg: 'Access denied'})
        return;
    }
    try{
        const isValid = jwt.verify(token, process.env.SECRET);
        if (!isValid) {
            res.json({msg: 'Access denied'})
            return;
        }
        next();
    }catch(e){
        console.log('Error to validate Token: ', e);
        res.json({msg: 'Access denied'})
    }
};

module.exports = {validateJWT};