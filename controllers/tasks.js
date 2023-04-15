const Tasks = require('../models/tasks')

const getAllTasks = async(req,res) => {
  try {
    const allTasks = await Tasks.find({})
    return res.status(200).json(allTasks)
  } catch (error) {
    return res.status(500).json({ message : error.message }) 
  }
}

const createTask = async(req,res) => {
  try {
    const task = new Tasks({taskName : req.body.taskName })
    const newTask = await task.save()
    return res.status(201).send(newTask)
  } catch (error) {
    return res.status(500).json({message : error.message})
  }
} 

const getTask = async(req,res) => {
  try {
    const task = await Tasks.findById(req.params.id)
    if(task === [])
    {
      return res.status(404).json({ message:"item not found" })
    }
    return res.status(200).json(task)
  } catch (error) {
    return res.status(500).json({ message:error.message })
  }
}

const editTask = async(req,res) => {
  try {
    const task = await Tasks.findById(req.params.id)
    if(req.body.taskName)
    {
      task.taskName = req.body.taskName
    }
    if (req.body.completed) {
      task.completed = req.body.completed
    }
    if(!task)
    {
      return res.status(404).json({ message:"Item not found" })
    }
    const newTask = await task.save()
    return res.status(200).json(newTask)
  } catch (error) {
    return res.status(500).send({ message : error.message })    
  }
}

const deleteTask = async(req,res) => {
  try {
    const task = await Tasks.findById(req.params.id)

    if(!task)
    {
      return res.status(404).json({ message:"item not found"})
    }
    await task.deleteOne()
    return res.status(200).json(task)
  } catch (error) {
    return res.status(500).send({ message:error.message })    
  }
}

module.exports = { getAllTasks , createTask , getTask , editTask , deleteTask }