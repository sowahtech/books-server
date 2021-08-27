//importing mongoose package
const mongoose = require('mongoose');

//importing packages
const express = require('express');

const bookRoutes = require('./routes/books');

const authorRoute = require('./routes/author')

//creating express server instance
const server = express();

//middleware
server.use(express.json());



//routes

server.use(bookRoutes);
server.use(authorRoute);


//connect to mongoDB database and starting server
mongoose.connect('mongodb+srv://dBUser1:failedconn@cluster0.wu29m.mongodb.net/booksDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(result=>{
        server.listen(3000, () => console.log('server is ready'));
}).catch(err => console.log(err));

