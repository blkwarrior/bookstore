const express = require('express');
const router = express.Router();
const connect_db = require('../config/connect_db');
const genre = require('../models/genre');

router.get('/genres', (req, res, next) =>{
    genre.getGenres( (err,genres) => {
        if(err) throw err;

        res.json(genres);
    });
});

module.exports = router;