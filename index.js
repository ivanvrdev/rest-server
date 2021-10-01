const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

//Connection
require('./connection');

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Port setting
app.set('port', process.env.PORT || 3000);

//Routes
app.use(require('./routes/users.routes'));
app.use(require('./routes/auth.routes'));
app.listen(app.get('port'), ()=>console.log(`Server run on port ${app.get('port')}`));



