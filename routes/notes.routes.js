const router = require('express').Router();
const {routeGET, routePOST, routePUT, routePUTDelete, routeDELETE} = require('../controllers/notes.controllers');

//Rutas
router.get('/notes/all', routeGET);
router.post('/notes/new', routePOST);
router.put('/notes/edit', routePUT);
router.put('/notes/delete', routePUTDelete); //Eliminación lógica
router.delete('/notes/delete', routeDELETE); //Eliminación física

module.exports = router;
