var mongoose = require('mongoose');

var Actor = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number, min: 0, max: 125},
    gender: {type: String, enum: ['M', 'F']},
    moviesActedIn: [{
        title: {type: mongoose.Schema.Types.ObjectId, ref: 'Movie'},
        character: {type: String}
    }],
    //agent/agency: {type: String}


    
});


module.exports = mongoose.model('Actor', Actor); 