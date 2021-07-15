//importing mongoose package
const mongoose = require('mongoose');
//importing controllers
const {createBookController, viewBookController} = require('./controllers') 
//importing packages
const express = require('express');

//creating express server instance
const server = express();

//middleware
server.use(express.json());



//routes
//create books route
server.post('/book', createBookController);
server.get('/book/:id?', viewBookController);
// server.patch('/book', updateBookController);
// server.delete('/book', deleteBookController);

//connect to mongoDB database and starting server
mongoose.connect('mongodb+srv://salis:salis01@cluster0.wu29m.mongodb.net/booksDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(result=>{
        server.listen(3000, () => console.log('server is ready'));
}).catch(err => console.log(err));
