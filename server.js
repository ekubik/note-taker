//import modules
const fs = require('fs');
const express = require('express');
const path = ('path');

//select port
const PORT = process.env.PORT || 3004;
const app = express();

//middleware to read data properly
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//serve static files from public folder
app.use(express.static('public'));

//code executed if running successfully
app.listen(PORT, () => console.log (`Now listening at http://localhost:${PORT}`))