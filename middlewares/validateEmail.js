const User = require('../models/users.model');

const existsEmail = async(email) =>{

    const user = await User.findOne({username: email});

    if(user){
        throw new Error("Email exists");
    }
}

module.exports = {existsEmail};