const bcryptjs = require('bcryptjs');
const {generateJWT} = require('../helpers/jwt.helpers');
const User = require('../models/users.model');

const loginUser = async (req, res)=>{
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});

        if(!user){
            res.json({msg: 'Access denied'});
            return;
        }
        if(!user.active == true){
            res.json({msg: 'Access denied'});
            return;
        }
        if (!bcryptjs.compareSync(password, user.password)) {
            res.json({msg: 'Access denied'});
            return;
        }
        const uid = user._id;
        const token = generateJWT({uid});
        res.json({
            msg: 'Welcome!', 
            token
        });
    } catch (e) {
        console.log('Error to login user', e);
        res.json({msg: 'Error to login user! Try it again later...'});
    }
}

module.exports = {loginUser};