const User = require('../models/users.model');
const {request} = require('express');

const existsEmail = async(email, {req = request}) =>{
    const uid = req.params.uid;
    if (uid) {
        const users = await User.find({username: email});
        const exists = users.find(user => user.id != uid);
        if(exists){
            throw new Error('Email exists');
        } 
    } else{
        const exists = await User.findOne({username: email});
        if(exists){
            throw new Error('Email exists');
        }
    }
}

module.exports = {existsEmail};