const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    discription:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require: true
    },
    publisher:{
        type: String,
        require: true
    },
    pages:{
        type: Number,
        require: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Book = module.exports = mongoose.model('Book',bookSchema);

// get Books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

// get Books By ID
module.exports.getBookById = function(id,callback){
    Book.findById(id,callback);
}

// add Genres
module.exports.addBook = function(book, callback){
    Book.create(book, callback);    
}
