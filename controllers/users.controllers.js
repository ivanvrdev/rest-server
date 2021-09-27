const bcryptjs = require('bcryptjs');
const {request, response} = require('express');
const User = require('../models/users.model');
const {generateJWT} = require('../helpers/jwt.helpers')
const ctrlUsers = {};
//GET
//Obtener usuarios
ctrlUsers.getUser = async (req, res)=>{
    const query = {active: true};
    const [total, users] = await Promise.all([
        User.count(query),
        User.find(query)
    ])
    res.json({total, users});
}
//POST
ctrlUsers.loginUser = async (req, res)=>{
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});

        if (user) {
            if (bcryptjs.compareSync(password, user.password)) {
                const uid = user._id;
                const token = generateJWT({uid});
                res.json({
                    msg: 'Welcome!', 
                    token
                });
            } else{
                res.json({msg: 'Access denied'});
            }
        }else{
            res.json({msg: 'Access denied'});
        }
    } catch (e) {
        console.log('Error to login user', e);
        res.json({msg: 'Error to login user! Try it again later...'});
    }
}

//Crear usuarios
ctrlUsers.createUser = async (req, res)=>{
    const {username, password, role} = req.body;

    try{
        const user = new User({username, password, role, active: true});
        //Encriptación de contraseña
        const salt = bcryptjs.genSaltSync(10);
        user.password = bcryptjs.hashSync(password, salt);

        await user.save();

        res.json({msg: "User created successfully!"});
    }catch(e){
        console.log('Error to create new user: ', e);
        res.json({msg: "Error to create new user..."});
    };
};

//PUT
//Editar usuarios
ctrlUsers.editUser = async (req = request, res = response)=>{
    const {uid} = req.params;
    let {username, password, role} = req.body;

    const salt = bcryptjs.genSaltSync();
    password = bcryptjs.hashSync(password, salt);

    try{
        const user = await User.findByIdAndUpdate(uid, {username, password, role}, {new: true});
        res.json({
            message: 'User updated succesfully!'
        })
    }catch(e){
        console.log('Error to update user: ', e);
        res.json({msg: "Error to update user..."});
    }
}

//Eliminación lógica de usuarios
ctrlUsers.deleteUser = async (req = request, res = response)=>{
    const {uid} = req.params;

    try{
        const user = await User.findByIdAndUpdate(uid, {active: false}, {new: true});
        res.json({message: 'User deleted succesfuly!'});
    }catch(e){
        console.log('Error to delete user: ', e);
        res.json({msg: "Error to delete user..."});
    }

} 

module.exports = ctrlUsers;