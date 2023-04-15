const Tasks = require('../models/tasks')
const asyncWrapper = require('../middlewares/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
  const allTasks = await Tasks.find({})
  res.status(200).json(allTasks)
})

const createTask = asyncWrapper(async (req, res) => {
  const task = new Tasks({ taskName: req.body.taskName })
  const newTask = await task.save()
  return res.status(201).send(newTask)
})

const getTask = async (req, res ,next) => {
  const task = await Tasks.findById(req.params.id)
  if (!task) {
    return next(createCustomError(`No task with id : ${req.params.id}`, 404))
  }
  return res.status(200).json(task)
}

const editTask = async (req, res ,next) => {
  const task = await Tasks.findById(req.params.id)

  if (!task) {
    return next(createCustomError(`No task with id : ${req.params.id}`, 404))
  }

  if (req.body.taskName) {
    task.taskName = req.body.taskName
  }
  if (req.body.completed) {
    task.completed = req.body.completed
  }
  const newTask = await task.save()
  return res.status(200).json(newTask)
}

const deleteTask = async (req, res,next) => {
  const task = await Tasks.findById(req.params.id)

  if (!task) {
    return next(createCustomError(`No task with id : ${req.params.id}`, 404))
  }
  await task.deleteOne()
  return res.status(200).json(task)
}

module.exports = { getAllTasks, createTask, getTask, editTask, deleteTask }