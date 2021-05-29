const jwt = require('jsonwebtoken')
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
require('../database/connection')
const User = require('../models/userSchema')

const middleware = (req,res,next) =>{
    console.log("This is the middleware")
    next()
}

router.get('/',middleware,(req,res)=>{
    res.send("Hellow from router.js Home")
})

router.get('/About',(req,res)=>{
    res.send('This is the About Me Page')
})

router.get('/contact' ,(req,res)=>{
    res.send("this is the contact page")
})

router.get('/login' ,(req,res)=>{
    res.send("this is the login page")
})

router.get('/register' ,(req,res)=>{
    res.send("this is the register page")
})


router.post('/register', (req,res)=>{

    const {name , email , phone , work , password , cpassword} = req.body

    //Hashing the Password

    if (!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json('Error , You have not filled one of the fields properly ')
    }

    //Returns a promise
    User.findOne({email:email}).then((userExists)=>{
        if(userExists){
           return res.status(422).json({ error : "Email Already Exists"})
        }else if (password != cpassword){
            return res.status(422).json({ error : "Password and Confirm Password not matching"})
        }else{
             //Now here we know that the object has the same variable name for defining the keys and its value hence we dont need to write 
             //it twice, aise likhdenge toh bhi chaleha
            const user = new User({name , email , phone , work , password , cpassword})

            //Now before running this save command we have a middle ware in auth.js which is working on the userSchema and 

            //this again returns a promise
            user.save().then(()=>{
                console.log("Data successfully saved in the Database")
                return res.status(201).json({message :  "Data Sent Successfully"})
            }).catch((err)=>{
                if (err){
                    console.log(err)
                    return res.status(500).json({error : 'Some error Occurred'})
                }
            })
        }
    })
})

//Instead of using promises here we used async and await functions so basically these make our code less and are really easy to understand
// all those functions which generate a promise we write await in front of them and we then make use of try and catch to catch the errors 
router.post ('/login',async (req,res)=>{
    try {
        let token ;
        const {email , password} = req.body

        if (!email || !password){
            res.send(402).json({error:"Invalid Credentials"})
        }

        const userLogin = await (User.findOne({email:email}))
        
        if (userLogin){
            const isMatch = await bcrypt.compare(password , userLogin.password)
            token = await userLogin.generateAuthToken()
            console.log(token )

            //To store the token in the form of cookie in our browser 
            //res.cookie("nameOfTheCookie",tokenToBeSaved, {options}) 

            res.cookie("jwtToken", token , {
                expires : new Date( Date.now() + 25892000000), //This is valid for 30 Days after creation and will then expire. 
                httpOnly : true //So that it runs on a non secure browser as well 
            })

            if(isMatch){
                console.log("Data found Successfully")
                return res.status(200).json({message : "Successfully Logged in"})
            }else{
                console.log("Data not Found")
                return res.status(400).json({message : "Invalid Credentials"})
            }
        }

    }catch (err){
        console.log(err)
    }
    
})

module.exports = router