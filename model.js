//importing books database
const mongoose = require('mongoose');
//books model
const BookSchema = mongoose.Schema({
    title: String,
    author: String,
    description: String
});

const BookModel = mongoose.model('books', BookSchema);

module.exports = BookModel;