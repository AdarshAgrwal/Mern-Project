const mongoose = require('mongoose')

//Getting the .env variables
const DB = process.env.DB

//Connecting the Database
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=>{
      console.log('Connection Successful')
  }).catch((err)=>{
      console.log("Connection Unsuccessful")
      console.log(err)
  })

  // THis had to used at multiple places in our project to hum har jagah thodhi na baar baar likhenge toh issiliye humlog ek jagah 
  // isko bana lete hai and then we call it from this one place
  //for example connects bana ke liye , fetch while authentication to bahut jagah 