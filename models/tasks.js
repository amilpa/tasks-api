const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  taskName : {
    type : String,
    required : true,
    maxLength : [20,'Maximum length is 20'],
    trim: true,
  },
  completed :{
    type : Boolean, 
    default : false
  }
})

module.exports = mongoose.model('Tasks' , taskSchema)