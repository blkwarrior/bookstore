const express = require('express');
const router = express.Router();
const connect_db = require('../config/connect_db');
const genre = require('../models/genre');
const book = require('../models/book');

// books api
router.get('/books', (req,res) => {
    book.getBooks((err,books) => {
        if(err) throw err;

        res.json(books);
    });
});

// genres api
router.get('/genres', (req, res) =>{
    genre.getGenres( (err,genres) => {
        if(err) throw err;

        res.json(genres);
    });
});

// genres api
router.post('/genres', (req, res) =>{
    const genre_data = req.body;
    genre.addGenre( genre_data, (err,genres) => {
        if(err) throw err;

        res.json(genres);
    });
});



module.exports = router;