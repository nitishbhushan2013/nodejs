const mongoose = require("mongoose");

 // define the schema
 var todoSchema = mongoose.Schema({
    topic: {
        type: String,
        required : true
    },    
    completed: String,
    completedAt: Date
});

/*
Date.now() -> It is executed only once when the server starts up and the Mongoose Schema are loaded. All the subsequent calls to get the default value, will get the same historic date value when the schema was initialised.

Date.now -> We can be sure that whenever it is invoked we get current timestamp as expected. 
*/


 //define the model 
 var Todo = mongoose.model('Todo', todoSchema);

 exports = module.exports = {Todo};