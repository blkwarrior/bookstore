const mongoose = require('mongoose');

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
}

