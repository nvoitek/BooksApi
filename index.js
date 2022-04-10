require('dotenv').config();
const bookApi = require('./app/api/bookApi');
const express = require('express');
const app = express();

// Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/book', bookApi);

// Listen
app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});