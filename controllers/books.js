const BookModel = require('../models/books')

const {validationResult} = require('express-validator');

const createBookController = (req, res) => {

	const errors = validationResult(req);

	if(!errors.isEmpty()){
		console.log(errors);
		res.json({message: errors.array()[0].msg});
	}
    const { title, authorId, description } = req.body;
    const book = new BookModel({ title, authorId, description });
    book
      .save()
      .then((result) => {
        res.json({ message: "book created successfully", data: result });
      })
      .catch((err) => console.log(err));
  };
  
  const viewBookController = (req, res) => {
    const { id } = req.body;
  
    if (id) {
      BookModel.findById(id )
        .populate("authorId" , "name email country")
        .then((result) => {
          res.json({ message: "list of books", data: result });
        })
        .catch((err) => console.log(err));
    } else {
      BookModel.find()
        .populate("authorId", "name email country")
        .then((result) => {
          res.json({ message: "list of books", data: result });
        })
        .catch((err) => console.log(err));
    }
  };
  
  const updateBookController = (req, res) => {
    const { id, title, author, description } = req.body;
    BookModel.findById(id)
      .then((book) => {
        if (book) {
          (book.title = title),
            (book.author = author),
            (book.description = description);
  
          book.save();
  
          res.json({ message: "book udated successfully", data: book });
        }
  
        res.json({ message: "book cannot be found" });
      })
      .catch((err) => console.log(err));
  };
  const deleteBookController = (req, res) => {
    const { id } = req.body;
    BookModel.findByIdAndRemove(id)
      .then((deletedBook) => {
        if (deletedBook) {
          res.json({ message: "book deleted successfully", data: deletedBook });
          return;
        }
        res.json({ message: "book not found" });
      })
      .catch((err) => console.log(err));
  };

  module.exports = {
    createBookController,
    viewBookController,
    updateBookController,
    deleteBookController
  }