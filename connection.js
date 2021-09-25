const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MYDB)
  .then(() => console.log("Connected to data base!"))
  .catch((err) => console.error('DB connection error: ', err)); 