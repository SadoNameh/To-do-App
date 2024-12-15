const express = require('express')
const app = express()
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require("dotenv").config() 
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')

//middleware
app.use( express.static('./public'))
app.use(express.json())

//routes
app.get('/', (req, res) => {
    console.log('Task Manager App ')
    res.send('welcome')
})

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

//server
const port = process.env.PORT || 5000

const start = async() => {
try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log( `'sever active and listening on port ${port}..'`);
    })
    
} catch (error) {
    console.error(error)
}
}
start()