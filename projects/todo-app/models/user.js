const mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    location: String 
}); 

var User = mongoose.model('User', userSchema);

exports = module.exports = {User};