var Users = require('../models/User')

module.exports = {
    // Create New User
    create: function(req, res){
        console.log(req.body);
        Users.create(req.body, function(err, user){
            if(err){
                return res.status(500).json(err)
            } else {
                return res.json(user)
            }
        });
    },
    me: function(req, res){
		if(!req.user){
			return res.send("current user not defined");
		} else {
			req.user.password = null;
			return res.json(req.user);
		}
	},
    findAll: function(req, res){
        Users.find({}, function(err, result){
            if(err){
                res.send(err)
            } else {
                console.log("Get all users", result)
                res.json(result)
            }
        })    
    },
    findOne: function(req, res){
        console.log(req.body);
        Users.findById(req.params.id).exec(function(err, result){
            if(err){
                res.send(err)
            } else {
                console.log("Get Current User's orders", result)
                res.json(result)
            }
        });    
    },
    update: function(req, res){
        delete req.body._id;
        Users.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function(err, result){
            if(err) {
                return res.status(500).json(err);
            } else {
            return res.status(200).json(result);
            }
        });
    },
    delete: function(req, res){
       Users.findByIdAndRemove(req.params.id, function(err, result){
          if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(result);
                }
            });
    }
}; 