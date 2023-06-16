// Task1: initiate app and run server at 3000

const express = require('express');
const app = express();


const morgan = require('morgan');
app.use(morgan('dev'));


require('dotenv').config();
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({extended:true}));


const path = require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));


// Task2: create mongoDB connection 

require('./DB connection');

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below


const employeeGet = require('./routes/get');
const employeePut = require('./routes/put');
const employeePost = require('./routes/post');
const employeeDelete = require('./routes/delete');


app.use('/api',employeeGet);
app.use('/api',employeePut);
app.use('/api',employeePost);
app.use('/api',employeeDelete);


//! don't delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});


app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});