
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const { default: mongoose } = require('mongoose')

require('dotenv').config()
const notFound = require('./middlewares/not-found')
const handleError = require('./middlewares/error-handler')

//middleware

app.use(express.json())

//routes

app.use('/api/v1/tasks',tasks)

app.use(notFound)
app.use(handleError)

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

process.on('SIGINT',() => {
  mongoose.connection.close()
    .then(() => {
      console.log('Previous mongoose connection closed')
      process.exit(0)
    })
    .catch((error) => {
      console.log(error.message)
    })
})

serverStart()