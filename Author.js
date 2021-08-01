const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    books: [
        {
            booksId: {type: Schema.Types.ObjectId, required: true, ref: 'books'}
        }
    ]
});

module.exports = mongoose.model('Author', AuthorSchema);