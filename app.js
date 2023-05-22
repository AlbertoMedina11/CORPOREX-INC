const express = require('express');
const path = require('path');
const bodyParser= require('body-parser');
const app = express();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://albertomedinagardea:Peluche12@primera.3c3gkl3.mongodb.net/?retryWrites=true&w=majority')
.then((result) => console.log('conexion exitosa'))
.catch((err) => console.log(err));




app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT 


app.listen(3000, () => {
  console.log('server started');
})

module.exports= app;