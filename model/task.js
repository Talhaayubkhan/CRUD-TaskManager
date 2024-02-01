const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
     name:{
          type: String,
          required: [true, "Name Must Be Required"],
          lowercase: true,
          trim: true,
     },
     completed: {
          type: Boolean,
          default: false,
     }
}, {timestamp: true})



module.exports = mongoose.model("Task", taskSchema)