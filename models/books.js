//importing books database
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//books model
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },
    description: {
        type: String,
        required: true
    }
        
});

module.exports = mongoose.model('books', BookSchema);

