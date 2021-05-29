const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtSecret = process.env.JWTSECRET

//Creating a new instance of mongoose Schema
const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    phone : {
        type:Number,
        required:true
    },
    work : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    cpassword : {
        type:String,
        required:true
    },
    tokens : [
        {
            token : {
                type:String,
                required:true
            }
        }
    ]
})

//Now here we are going to specify the pre function that will work before we save the document (this function will be a middleware)
//this returns a promise so we can use the async and await of advanced javascript here
//as we have to use this keyword in the function so we will just use the normal form of the function 
userSchema.pre('save',async function(next){
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 12)
        this.cpassword = await bcrypt.hash(this.cpassword , 12)
    }
    next()
})

//We Are generating the token
//as this is an instance we can define a new method like this
//We are not using fat arrow function as we have to use this keyword and this keyword does not work with fat arrow function.
userSchema.methods.generateAuthToken = async function () {
    try {
        //token generate karwa diya
        let token_generated = jwt.sign({_id : this._id},jwtSecret)
        //Sending the token to the database for authentication i.e token add kar diya 
        this.tokens = this.tokens.concat({ token : token_generated })
        //token save karwa diya
        await this.save()

        return token_generated

    }catch (err){
        console.log(err)
    }
}

//We have defined the schema of our document and now we have to attach it to our project which is done with the help of models 
const User = mongoose.model ("users",userSchema)

module.exports = User