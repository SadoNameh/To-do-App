const mongoose = require('mongoose')
const express = require('express')

   
const connectDB = (url) => {
   
    
    return  mongoose.connect(url, {
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify: false,
        useUnifiedTopology : true,
     }), 
     console.log('db connected');

}      

module.exports = connectDB