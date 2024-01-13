const express = require('express')
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MOGO_URI;

const app = express()
const mongoose = require('mongoose');
const loginRoutes = require('./routes/loginRoutes')
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use(loginRoutes);

mongoose.connect(MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log("listening of port",PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
