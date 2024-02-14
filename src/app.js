const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const clientRoute = require('./routes/clientRoute');
const productsRoute = require('./routes/productsRoute')
const salesRoute = require('./routes/salesRoute')

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/products', productsRoute)
app.use('/sales', salesRoute)

module.exports = app;