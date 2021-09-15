const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.ATLAS)
  .then(() => console.log("Connected to data base!"))
  .catch((err) => console.error('DB connection error: ', err)); 