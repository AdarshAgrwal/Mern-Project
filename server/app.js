require('dotenv').config()
const express = require('express')
const mongoose = require ('mongoose')

//Making the express App
const app = express()

//Database Functions
require ('./database/connection')
// const User = require('./models/userSchema')

//To set up the router in express.js we have to use middle wares
//We link the router files to make our route easy.
app.use(express.json())
app.use(require('./router/auth'))


//Getting the .env variables
const PORT = process.env.PORT

app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`The Server Started at ${PORT}`)
    }
})