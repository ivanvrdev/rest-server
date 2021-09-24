const bcryptjs = require('bcryptjs');
const User = require('../models/users.model');
const ctrlUsers = {};
//GET
//Obtener usuarios
ctrlUsers.allUsers = async (req, res)=>{
    const query = {active: true};
    const [total, users] = await Promise.all([
        User.count(query),
        User.find(query)
    ])
    res.json({total, users});
}
//POST
//Crear usuarios
ctrlUsers.newUser = async (req, res)=>{
    const {username, password} = req.body;

    try{
        const user = new User({username, password, active: true});
        //Encriptación de contraseña
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        await user.save();

        res.json({msg: "User created successfully!",user});
    }catch(e){
        console.log('Error to create new user: ', e);
    };
};

//PUT
//Editar usuarios
ctrlUsers.editUser = async (req, res)=>{
    const {id, username, pass} = req.body;
    const user = await User.findByIdAndUpdate(id, {username, pass}, {new: true});
    res.json({
        message: 'User updated succesfully!',
        user
    })
}
//Eliminación lógica de usuarios
ctrlUsers.routePUTDelete = async (req, res)=>{
    const {id} = req.body;
    const user = await User.findByIdAndUpdate(id, {active: false}, {new: true});
    res.json({message: 'User deleted succesfuly!'});
} 
//DELETE
//Eliminación física de usuarios
ctrlUsers.routeDELETE = async (req, res) =>{
    const {id} = req.body;
    try{
        await User.findByIdAndDelete(id);
        res.json({message: 'User deleted succesfuly!'});
    }catch(err){
        console.log('Error to delete the user: ', err);
    }
}

module.exports = ctrlUsers;