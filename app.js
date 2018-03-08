const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dateTime = require('node-datetime');
const connect_db = require('./config/connect_db');

// Start Server
app.listen(3000 , () =>{
    var dt = dateTime.create();
    var current_datetime = dt.format('Y-m-d H:M:S');
    console.log(current_datetime);
    console.log('Server Start');

    mongoose.connect(connect_db.database);
    mongoose.connection.on('connected',()=>{
        console.log('connected to database:' + connect_db.database);
    });
    mongoose.connection.on('error',(err)=>{
        console.log('Error:' + err);
    });


});