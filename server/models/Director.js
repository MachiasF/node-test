var mongoose = require('mongoose');

var Director = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number, min: 0, max: 125},
    gender: {type: String, enum: ['M', 'F']},
    moviesDirected: [{
        title: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie'},
    }],


    
});


module.exports = mongoose.model('Director', Director); 