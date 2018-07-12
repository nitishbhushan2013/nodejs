
const express =  require("express");
const bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {User} = require("./models/user");
var {Todo} = require("./models/todo");

const app = express();
app.use(bodyParser.json()); // middleware

app.post('/todo', (req,res)=>{
    //save todo
    var todo = new Todo({
        topic: req.body.topic
       // completed: req.body.completed,
       // completedAt: req.body.completedAt 
    })

    todo.save().then((data)=>{
            res.send(data);
    }, (err)=>{
        res.status(400).send(err);
    })
})

app.listen(3000,()=>{
    console.log("server start up at port 3000");
});

exports = module.exports = {app}