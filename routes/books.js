
const express = require('express');

const {body} = require('express-validator');

const {createBookController, viewBookController, updateBookController, deleteBookController} = require('../controllers/books')

const router = express.Router();

router.post('/book', [
    body('title').trim().not().isEmpty().withMessage('title cannot be empty'),
    body('authorId').trim().not().isEmpty().withMessage('authorId cannot be empty'),
    body('description').trim().not().isEmpty().withMessage('description cannot be empty')
], createBookController);
router.get('/book/:id?', viewBookController);
router.patch('/book', updateBookController);
router.delete('/book', deleteBookController);

module.exports = router;