const {request, response} = require('express');
const User = require('../models/users.model');

const uidIsCorrect = async(req = request, res = response, next)=>{
    const uid = req.params.uid;
    const user = await User.findById(uid);

    if (!user) {
        res.json({msg: 'uid invalid'})
        return;
    }

    next();
}

module.exports = {uidIsCorrect};