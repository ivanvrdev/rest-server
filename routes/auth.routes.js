const router = require('express').Router();
const {loginUserMW} = require('../middlewares/auth.middlewares');
const {loginUser} = require('../controllers/auth.controllers')

router.post('/login', loginUserMW, loginUser);

module.exports = router;