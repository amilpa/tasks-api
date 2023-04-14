const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  taskName : String,
  completed : Boolean
})

module.exports = mongoose.model('Tasks' , taskSchema)