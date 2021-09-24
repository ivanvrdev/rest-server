const router = require('express').Router();
const {allUsers, newUser, editUser, routePUTDelete, routeDELETE} = require('../controllers/users.controllers');
const {userValidation} = require('../middlewares/user.middlewares');

//Rutas
router.get('/users/all', allUsers);
router.post('/users/new',userValidation, newUser);
router.put('/users/edit', editUser);
router.put('/users/delete', routePUTDelete); //Eliminación lógica
router.delete('/users/delete', routeDELETE); //Eliminación física

module.exports = router;