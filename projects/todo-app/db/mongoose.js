const mongoose = require("mongoose");
mongoose.Promise = global.Promise; // assign the default Promise library. 

mongoose.connect('mongodb://localhost:27017/TodoApp');

exports = module.exports = {mongoose};

