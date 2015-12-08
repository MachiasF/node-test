var Movies = require('../models/Movie')

module.exports = {
    // Create New User
    create: function(req, res){
        console.log(req.body);
        Movies.create(req.body, function(err, user){
            if(err){
                return res.status(500).json(err)
            } else {
                return res.json(user)
            }
        });
    },
    findAll: function(req, res){
        Movies.find({}, function(err, result){
            if(err){
                res.send(err)
            } else {
                console.log("Get all Movies", result)
                res.json(result)
            }
        })    
    },
    findOne: function(req, res){
        console.log(req.body);
        Movies.findById(req.params.id).exec(function(err, result){
            if(err){
                res.send(err)
            } else {
                res.json(result)
            }
        });    
    },
    update: function(req, res){
        delete req.body._id;
        Movies.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function(err, result){
            if(err) {
                return res.status(500).json(err);
            } else {
            return res.status(200).json(result);
            }
        });
    },
    delete: function(req, res){
        Movies.findByIdAndRemove(req.params.id, function(err, result){
          if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(result);
                }
            });
    }
}; 