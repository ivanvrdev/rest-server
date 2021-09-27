const router = require('express').Router();
const {getUser, createUser, editUser, deleteUser, loginUser} = require('../controllers/users.controllers');
const {createUserMW, editUserMW, deleteUserMW, loginUserMW} = require('../middlewares/user.middlewares');
const {validateJWT} = require('../middlewares/validateJWT');

//Rutas
router.get('/get-user', validateJWT, getUser);
router.post('/login', loginUserMW, loginUser);
router.post('/create-user/', validateJWT, createUserMW, createUser);
router.put('/edit-user/:uid', validateJWT, editUserMW, editUser);
router.put('/delete-user/:uid',validateJWT, deleteUserMW, deleteUser); //Eliminación lógica

module.exports = router;