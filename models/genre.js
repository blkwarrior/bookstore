const mongoose = require('mongoose');
const connect_db = require('../config/connect_db');

const genreSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Genre = module.exports = mongoose.model('Genre',genreSchema);

// get Genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}

// add Genres
module.exports.addGenre = function(genre, callback){
    Genre.create(genre, callback);
    //genre.save(callback);
    
}

// update Genres
module.exports.updateGenre = function(id, genre, options, callback){
    const query = {_id : id}
    const update = {name : genre.name}

    Genre.findOneAndUpdate(query, update, options, callback);
    
}

// delete Genres
module.exports.deleteGenre = function(id, callback){
    const query = {_id : id}
    Genre.remove(query, callback);
    
}

