console.log("*********Server.js ***************************");
const mongoose = require("mongoose");
const express =  require("express");
const bodyParser = require("body-parser");

var {User} = require("./models/user");
var {Todo1} = require("./models/todo");

const app = express();
mongoose.Promise = global.Promise; // assign the default Promise library. 

//connect to mongodb
console.log("*********Server.js c1 ***************************");
mongoose.connect('mongodb://localhost:27017/TodoApp').then(()=>{
 
    // Create the object: Instances of model are the document
    var myTodo_1 = new Todo1({
        topic : 'store this todo in the mongo db',
        completed : false,
        completedAt : new Date
    });
    
    // store the object
    myTodo_1.save().then((result)=>{
        console.log("todo item is saved successfully...", result);
    },(err)=>{
        return console.log("Unable to save the user record"); 
    });
},(err)=>{
    return console.log("Unable to connect to Mongo DB at port 27017 "); 
})
