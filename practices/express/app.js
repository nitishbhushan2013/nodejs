const express = require('express');

var port = 9001;
var app = express();

app.get('/', (req, res)=>{
    res.send("express is setup and ready to be used");
})

app.listen(port, ()=>{
    console.log("Server is listening at "+port);
})
