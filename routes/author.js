const express = require('express');

const AuthorModel = require('../models/Author');

const {body} = require('express-validator');

const {createAuthorController} = require('../controllers/author');

const router = express.Router();

router.post('/authors',[
    body('name').trim().not().isEmpty().withMessage('authors name cannot be empty'),
    body('email').isEmail()
    .custom((value, {req}) =>{
       return AuthorModel.findOne({"email": value}).then(
           authorDoc =>{
                if(authorDoc){
                        return Promise.reject('email already taken');
                }
            }
        )
    }),
    body('country').trim().not().isEmpty().withMessage('authors country cannot be empty'),
    body('booksId').trim().not().isEmpty().withMessage('books id cannot be empty')
],createAuthorController);

module.exports = router;