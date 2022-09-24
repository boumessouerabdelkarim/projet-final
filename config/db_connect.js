const mongoose = require('mongoose');
const DBconnect=async()=>{
    try {
       await mongoose.connect(process.env.DB_URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
       console.log("database connected successfully")
    } catch (error) {
        console.log("connection database failed", error)
  
    }
}
module.exports=DBconnect