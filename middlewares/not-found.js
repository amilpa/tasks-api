const notFound = (req,res) => res.status(404).json({ messsage : "not found" })

module.exports = notFound