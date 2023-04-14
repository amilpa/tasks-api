const tasks = require('../models/tasks')

const getAllTasks = async(req,res) => {
  try {
    const allTasks = await tasks.find({})
    res.status(200).json(allTasks)
  } catch (error) {
    res.status(500).json({ message : error.message }) 
  }
}

const createTask = (req,res) => {
  try {
    res.send("Added task")
  } catch (error) {
    res.send('Error occured')   
  }
} 

const getTask = (req,res) => {
  try {
    res.send('Here is the required task')
  } catch (error) {
    res.send('Error occured')    
  }
}

const editTask = (req,res) => {
  try {
    res.send('Updated the task')
  } catch (error) {
    res.send('Error occured')    
  }
}

const deleteTask = (req,res) => {
  try {
    res.send('Deleted the task')
  } catch (error) {
    res.send('Error occured')    
  }
}

module.exports = { getAllTasks , createTask , getTask , editTask , deleteTask }