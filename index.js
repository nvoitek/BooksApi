const express = require('express');
const app = express();

// Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listen
app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});