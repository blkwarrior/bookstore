const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Genre = require('../models/genre');
const Book = require('../models/book');

// Get All Books
router.get('/books', (req,res) => {
    Book.getBooks((err,books) => {
        if(err) throw err;

        res.json(books);
    });
});

// Get Book with ID
router.get('/books/:_id', (req,res) => {
    const book_id = req.params._id;

    Book.getBookById(book_id,(err,book) => {
        if(err) throw err;

        res.json(book);
    });
});

// Post Book
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

// Update Book
router.put('/books/:_id', (req , res, next) =>{

    const update_id = req.params._id;   
    const  updateBook = req.body;

    Book.updateBook(update_id, updateBook, {}, (err,books) => {
        if(err) throw err;

        res.json(books);
    });
});

// Update Book
router.delete('/books/:_id', (req , res, next) =>{

    const delete_id = req.params._id;  

    Book.deleteBook(delete_id, (err,books) => {
        if(err) throw err;

        res.json(books);
    });
});

// ========================================

// Get All Genres
router.get('/genres', (req, res, next) =>{
    Genre.getGenres( (err,genres) => {
        if(err) throw err;

        res.json(genres);
    });
});


// Post Genre
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

// Update Genre
router.put('/genres/:_id', (req , res, next) =>{

    const update_id = req.params._id;   
    const  updateGenre = req.body;

    Genre.updateGenre(update_id, updateGenre, {}, (err,genres) => {
        if(err) throw err;

        res.json(genres);
    });
});


// Delete Genre
router.delete('/genres/:_id', (req , res, next) =>{

    const delete_id = req.params._id;  

    Genre.deleteGenre(delete_id, (err,genres) => {
        if(err) throw err;

        res.json(genres);
    });
});




module.exports = router;