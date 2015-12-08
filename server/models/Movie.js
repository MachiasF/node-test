var mongoose = require('mongoose');

var currentYear = new Date().getFullYear();

var Movie = new mongoose.Schema({
    title: {type: String},
    synopsis: {type: String},
    releaseYear: {type: Number, min: 1800, max: currentYear},
    rating: {type: Number, min: 0, max: 10},
    actors: [],
    directors:[],
    productionCompany: [{type: String}]

    
});


module.exports = mongoose.model('Movie', Movie); 