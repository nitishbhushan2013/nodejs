const express = require("express");
const hbs = require("hbs");
const app = express();


// to use any template engine , we need to do two things
    // 1. set the properties on app 
    // 2. create the views folder and put view file with the template extension 
app.set('view engine', 'hbs'); 
var year = new Date().getFullYear()

// partials are allows us to modularize the web component. called by {{> partial}}
hbs.registerPartials(__dirname+'/views/partials');

// helper function helps us to dynamically return the function 
hbs.registerHelper('currentYear', ()=>{
    return new Date().getFullYear();
})

/* Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

// It is called by app.use which takes just one function and accept three parameters - request, response and next
// call next to handover call to next middleware function
app.use((req, res, next)=>{

})
*/

//this middleware will help us to display maintenance page beforfe serving any other request . 
// Great way to use middleware 
app.use((req, res, next)=>{
    var now = new Date().toString();
    console.log(`request time ${now}`);
    res.render("maintenance");
})


app.get('/about', (req, res)=>{
     res.render('about', {
         author : "Nitish Bhushan",
         year : year
     });
})

app.get('/home', (req, res)=>{
    res.render("home", {
        welcomeMessage : 'This is dynamically generated message.',
        author : 'Nitish Bhushan',
        year : year
    });
})

//app.use(express.static(__dirname + '/public'));


app.listen(3333, ()=>{
    console.log('server has started on port 3333');
});

