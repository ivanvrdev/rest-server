const router = require('express').Router();
const {getUser, createUser, editUser, deleteUser} = require('../controllers/users.controllers');
const {createUserMW, editUserMW, deleteUserMW} = require('../middlewares/user.middlewares');
const {validateJWT} = require('../middlewares/validateJWT');

//Rutas
router.get('/get-user', validateJWT, getUser);
router.post('/create-user/', validateJWT, createUserMW, createUser);
router.put('/edit-user/:uid', validateJWT, editUserMW, editUser);
router.put('/delete-user/:uid',validateJWT, deleteUserMW, deleteUser); //Eliminación lógica

module.exports = router;