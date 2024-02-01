const mongoose = require('mongoose');


const connectDB = (url)=>{
     return mongoose.connect(url).then(()=>{
          console.log("MongoDB Connected Successfully!");
     }).catch((err)=>{
          console.log("Error While Connecting to MongoDB", err.message);
     })
}


module.exports = connectDB;






