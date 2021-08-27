const Author = require("../models/Author");

const {validationResult} = require('express-validator');

const createAuthorController = (req, res) => {

  const errors = validationResult(req);

  if(!errors.isEmpty()){
    console.log(errors);
    return res.json({message: errors.array()[0].msg});
  }
  const { name, email, country, booksId } = req.body;

  const author = new Author({ name, email, country, booksId });

  author
    .save()
    .then((auth) => {
      if (auth) {
        res.json({ message: "author created successfully", data: auth });
        return;
      }
      res.json({ message: "failed to create author" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  createAuthorController
};