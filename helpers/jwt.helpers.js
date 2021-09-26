const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateJWT = (payload) =>{
    const token = jwt.sign(payload, process.env.SECRET);
    return token;
}

module.exports = {generateJWT};