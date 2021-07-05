//importing books database
let booksDb = require('./db');
//books model
class BookModel {
    constructor({title, author, description}){
        this.title = title
        this.author = author
        this.description = description
    }

    save(){
        booksDb.push(this);
        return this;
    }

    static all(){
        return booksDb;
    }

    static update(updatedInfo = {}){
        booksDb = booksDb.map(book =>{
            if (book.name == updatedInfo.name){
                return {...book, ...updatedInfo}
            }
            return book;
        })
        return booksDb;
    }

    static delete({title}){
        let deletedBook = null;
        booksDb = booksDb.filter(book =>{
            if (book.title !== title){
                return true;
            }
            deletedBook = book;
            return false;
        })
        return deletedBook;
    }


}

module.exports = BookModel;