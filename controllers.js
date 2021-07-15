//importing Model
const BookModel = require('./model');
//controllers
const createBookController = (req, res) => {
    const {title, author, description} = req.body;
    const book = new BookModel({title, author, description});
    book.save().then(
        result => {
            res.json({message: 'book created successfully', data: result})
        }
    ).catch(err => console.log(err));
    
}

const viewBookController = (req, res) => {
    const {id} = req.params;

    if (id) {
        BookModel.find({author:id})
        .then(
            result => {res.json({message: 'list of books', data: result})})
        .catch(err => console.log(err));
    } else {
        BookModel.find()
        .then(
            result => {res.json({message: 'list of books', data: result})})
        .catch(err => console.log(err));
    }
   
}

/* const updateBookController = (req, res) => {
    const {title, author, description} = req.body;
    const updatedBook = BookModel.update({title, author, description})
    res.json({message: 'book udated successfully', data: updatedBook})
} */
/* const deleteBookController = (req, res) => {
    const {title} = req.body;
    const deletedBook = BookModel.delete({title});
    res.json({message: 'book deleted successfully', data: deletedBook })    
} */

module.exports = {
    createBookController, 
    viewBookController, 
    // updateBookController, 
    // deleteBookController
}