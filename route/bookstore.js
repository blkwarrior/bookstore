const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Genre = require('../models/genre');
const Book = require('../models/book');

// books api
router.get('/books', (req,res) => {
    Book.getBooks((err,books) => {
        if(err) throw err;

        res.json(books);
    });
});

router.get('/books/:_id', (req,res) => {
    const book_id = req.params._id;

    Book.getBookById(book_id,(err,book) => {
        if(err) throw err;

        res.json(book);
    });
});

// genres api
router.get('/genres', (req, res, next) =>{
    Genre.getGenres( (err,genres) => {
        if(err) throw err;

        res.json(genres);
    });
});


// genres api
router.post('/genres', (req , res, next) =>{

    let newGenre = new Genre({
        name: req.body.name        
    });

   
    //var newGenre = req.body;
    
    Genre.addGenre( newGenre, (err,genres) => {
        if(err) throw err;

        res.json(genres);
    });
});


// book api
router.post('/books', (req , res, next) =>{

    let newBook = new Book({
        title: req.body.title,
        discription: req.body.discription,
        author: req.body.author,
        publisher: req.body.publisher,
        pages: req.body.pages
    });
    
    Book.addBook( newBook, (err,books) => {
        if(err) throw err;
        
        res.json(books);
    });
});


module.exports = router;