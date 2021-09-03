const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Connected to data base!"))
  .catch((err) => console.error('DB connection error: ', err));