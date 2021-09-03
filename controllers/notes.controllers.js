const ctrlNotes = {};
const Note = require('../models/notes.models');
//GET
//Obtener notas
ctrlNotes.routeGET = async (req, res)=>{
    const notes = await Note.find({active: true});
    res.json(notes);
}
//POST
//Crear notas
ctrlNotes.routePOST = async (req, res)=>{
    const {userId, title, description} = req.body;
    const note = new Note({userId, title, description, active: true});
    await note.save();
    res.json({message: 'Note created succesfully!'});
}
//PUT
//Editar notas
ctrlNotes.routePUT = async (req, res)=>{
    const {id, title, description} = req.body;
    const note = await Note.findByIdAndUpdate(id, {title, description}, {new: true});
    res.json({
        message: 'Note updated succesfully!',
        note
    })
}
//Eliminación lógica de las notas
ctrlNotes.routePUTDelete = async (req, res)=>{
    const {id} = req.body;
    const note = await Note.findByIdAndUpdate(id, {active: false}, {new: true});
    res.json({message: 'Note deleted succesfuly!'});
} 
//DELETE
//Eliminación física de las notas
ctrlNotes.routeDELETE = async (req, res) =>{
    const {id} = req.body;
    try{
        await Note.findByIdAndDelete(id);
        res.json({message: 'Note deleted succesfuly!'});
    }catch(err){
        console.log('Error to delete the note: ', err);
    }
}

module.exports = ctrlNotes;