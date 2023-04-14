const express = require('express')
const router = express.Router()

const { getAllTasks , createTask , getTask , editTask , deleteTask }  = require('../controllers/tasks')

router.get('/' , getAllTasks)

router.post('/' , createTask)

router.get('/:id',getTask)

router.patch('/:id',editTask)

router.delete('/:id', deleteTask)


module.exports = router