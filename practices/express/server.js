const express = require('express');
const router = require('./router');
const app = express();
var port = 9001;

app.use('/', router);

app.listen(port, ()=>{
    console.log("server is listening at "+port);
});