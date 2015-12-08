var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var User = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, unique: true, trim: true},
    password: {type: String},
    phoneNumber: {type: String},
    admin: {type: Boolean, default: false},
    date: {type: Date, default: Date.now},
    favorites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
    
});

User.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password'))    return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

User.methods.verifyPassword = function(reqBodyPassword){
    var user = this;
    return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('User', User); 