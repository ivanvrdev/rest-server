const ctrlUsers = {};
const User = require('../models/users.model');
//GET
//Obtener usuarios
ctrlUsers.routeGET = async (req, res)=>{
    const users = await User.find({active: true});
    res.json(users);
}
//POST
//Crear usuarios
ctrlUsers.routePOST = async (req, res)=>{
    const {username, pass} = req.body;
    const user = new User({username, pass, active: true});
    await user.save();
    res.json({message: 'User created succesfully!'});
}
//PUT
//Editar usuarios
ctrlUsers.routePUT = async (req, res)=>{
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