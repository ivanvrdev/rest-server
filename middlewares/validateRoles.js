const {request} = require('express')

const validateRoles = (...roles) =>{
    return (req = request, res, next) =>{
        if(!roles.includes(req.user.role)){
            return res.json({msg:'Access denied'});
        }
        next();
    }
}

module.exports = {validateRoles};





