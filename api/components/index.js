const express = require('express');
const store = require('../../store/dummy');
const ctrl = require('./controller');




const config = require('../../config');
const user = require('./user/network.js')
const app = express();

app.use('/api/user', user);

app.listen(config.api.port, ()=>{
    console.log('Api escuchando en el puerto', config.api.port);
});

module.exports = ctrl(store);