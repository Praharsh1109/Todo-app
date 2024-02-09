const mongoose = require('mongoose')
const { boolean, string } = require('zod')


mongoose.connect('mongodb+srv://admin:admin123@firstdatabase.lyxqw8k.mongodb.net/')

const cardSchema = mongoose.Schema({
    id: String,
    description: String,
    
})

const card = mongoose.model('card', cardSchema);

module.exports = {
    card 
}