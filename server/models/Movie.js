var mongoose = require('mongoose');

var Movie = new mongoose.Schema({
    title: {type: String},
    synopsis: {type: String},
    releaseYear: {type: Number, min: 1800, max: 2016},
    rating: {type: Number, min: 0, max: 10},
    actors: [],
    directors:[],
    prductionCompany: []

    
});


module.exports = mongoose.model('Movie', Movie); 