const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin123@firstdatabase.lyxqw8k.mongodb.net/');

const cardSchema = mongoose.Schema({
    id: String,
    description: String
});

const Card = mongoose.model('card', cardSchema);

module.exports = {
    Card
};
