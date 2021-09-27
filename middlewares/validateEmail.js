const User = require('../models/users.model');
const {request} = require('express');

const existsEmail = async(email, {req = request}) =>{

    const user = await User.findOne({username: email});

    if(user){
        const uid = req.params.uid;
        
        if(uid){
            if(user.id != uid){
                throw new Error('Email exists');
            } 
        }else{
            throw new Error('Email exists');
        }
    }
}

module.exports = {existsEmail};