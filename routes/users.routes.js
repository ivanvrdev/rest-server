const router = require('express').Router();
const {getUser, createUser, editUser, deleteUser } = require('../controllers/users.controllers');
const {createUserMW, editUserMW, deleteUserMW} = require('../middlewares/user.middlewares');
const {validateJWT} = require('../middlewares/validateJWT');

//Rutas
router.use(validateJWT);
router.get('/get-user', getUser);
router.post('/create-user/', createUserMW, createUser);
router.put('/edit-user/:uid', editUserMW, editUser);
router.put('/delete-user/:uid',deleteUserMW, deleteUser); //Eliminación lógica

module.exports = router;