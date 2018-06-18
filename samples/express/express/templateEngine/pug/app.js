/*
A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. 
Some popular template engines that work with Express are Pug, Mustache, and EJS. 

component
- views, the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views directory in the application root directory.
- view engine, the template engine to use. For example, to use the Pug template engine: app.set('view engine', 'pug').

$ npm install pug --save

*/
const express = require("express");
const app = express();

// setting the template rendering properties
app.set("views", './views');
app.set('view engine', 'pug');

app.get('/render', (req, res)=>{
    console.log("rendering the view through template engine");
    res.render('index', {
        app1: 'pug',
        app2: 'express'
    })
})

app.listen(3000);
