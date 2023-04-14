
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

require('dotenv').config()

//middleware

app.use(express.json())

//routes

app.use('/api/v1/tasks',tasks)


const port = process.env.PORT || 3000

const serverStart = async () => {
  try {
    await connectDB(process.env.MONGO_URI)    
    app.listen(3000, () => {
      console.log(`server listening on port ${port}`)
    })
  } catch (error) {
    console.log(error.message)
  }
}

serverStart()