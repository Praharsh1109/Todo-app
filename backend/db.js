const mongoose = require('mongoose')
const { boolean, string } = require('zod')


mongoose.connect('mongodb+srv://admin:admin123@firstdatabase.lyxqw8k.mongodb.net/')

const todoSchema = new mongoose.Schema({
    title : String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo',todoSchema)

module.exports={
    todo
}