//importing controllers
const {createBookController, viewBookController, updateBookController, deleteBookController} = require('./controllers') 
//importing packages
const express = require('express');

//creating express server instance
const server = express();

//middleware
server.use(express.json());



//routes
//create books route
server.post('/book', createBookController);
server.get('/book', viewBookController);
server.patch('/book', updateBookController);
server.delete('/book', deleteBookController);

//starting server
server.listen(3000, () => console.log('server is ready'));