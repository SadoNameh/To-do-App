const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
    name : {
        type: String, 
        required: [true, 'must provide name'], 
        maxlength: 20
    }, 
    data: String, 
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = model('Products', taskSchema)


module.exports =  Task  

