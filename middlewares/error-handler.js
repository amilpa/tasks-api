
const { CustomApiError } = require('../errors/custom-error')
const mongoose = require('mongoose')

const handleError = (err,req,res,next) => {
  if(err instanceof CustomApiError)
  {
    return res.status(err.statusCode).json({message : err.message})
  }
  if(err instanceof mongoose.Error.ValidationError)
  {
    return res.status(400).json({ message:"Invalid data" })
  }
  if(err instanceof mongoose.Error.CastError)
  {
    return res.status(400).json({ message:"Invalid id" })
  }
  return res.status(500).json({message : "Something went wrong"})
}

module.exports = handleError