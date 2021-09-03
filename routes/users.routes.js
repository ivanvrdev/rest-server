const router = require('express').Router();
const {routeGET, routePOST, routePUT, routePUTDelete, routeDELETE} = require('../controllers/users.controllers');

//Rutas
router.get('/users/all', routeGET);
router.post('/users/new', routePOST);
router.put('/users/edit', routePUT);
router.put('/users/delete', routePUTDelete); //Eliminación lógica
router.delete('/users/delete', routeDELETE); //Eliminación física

module.exports = router;