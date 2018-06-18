/*
Express is fast, unopinionated, minimalist web framework for node.js    

*/

const express = require("express");
const app = express();

// basic web server
app.get("/", (req,res)=> {
    res.send("Hello boys.., Welcome to Express world");
})
app.listen(3333);


// Basic routing concept : app.METHOD(PATH, HANDLER)
app.get('/get', (req,res)=>{
    res.send("GET request invoked");
})

app.get('/student/:studentId/class/:classId', (req,res)=>{
    res.send(req.params); // output in json 
})
app.post('/post', (req,res)=>{
    res.send("POST request invoked");
})

// all, matches all the METHODs
app.all('/all', (req,res)=>{
    res.send("ALL HTTP methods are suppported ");
})






