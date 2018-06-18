//Middleware

/*
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle. If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
- Call the next middleware function in the stack.

Types of middleware
    Application-level middleware
    Router-level middleware
    Error-handling middleware
    Built-in middleware
    Third-party middleware
*/

const express = require("express");
const app = express();
/***************************************************************************************************************** */
                                //Application-level middleware
/***************************************************************************************************************** */
/*
app.use((req, res, next)=>{
    res.send("Application level middleware initiated ");
    next();
})
app.listen(3333);
*/


// order of the middleware
var response = {} ;

// middleware function to process the req
app.use((req, res, next)=>{
    //response.first = "START : function initiated at " + Date.now()+"\n";
    console.log("START : Generic function initiated at " + Date.now()); 
    next();
});

app.use('/book',(req, res, next)=>{
    //response.first = "START : function initiated at " + Date.now()+"\n";
    console.log("BOOK-initiate : Capture book req time Line " + Date.now().toString); 
    next();
});


// route handler to process the req
app.get('/book', (req, res, next)=>{
 // response.second = "Step1 : book specific request has initated \n\r";  
 console.log("BOOK-PROCESS : book specific request has initated"); 
  next();
});
app.use('/students',(req, res, next)=>{
    //response.first = "START : function initiated at " + Date.now()+"\n";
    console.log("STUDENT-initiate : Capture student req time Line " + Date.now().toString); 
    next();
});


// route handler to process the req
app.get('/students', (req, res, next)=>{
 // response.second = "Step1 : book specific request has initated \n\r";  
 console.log("STUDENT-PROCESS: student specific request has initated"); 
  next();
});




app.use('/user/:id', (req, res, next)=>{
    console.log("1. =====================middleware processing - 1===============================");
  //  res.send("express call : user id is ->");
    next()
}, (req, res, next) =>{
    console.log("2. =====================middleware processing - 2===================================================");
    next()
}, (req, res, next) =>{
    console.log("3. =====================middleware processing - 3===================================================");
   // res.send("chain process completed");  // end the req-res cycle
    next();

});

app.get('/user/:id', (req, res, next)=>{
    console.log("1. ====================Request processing - 1====================================================");
  //  res.send("express call : user id is ->");
    next()
}, (req, res, next) =>{
    console.log("2. ===================Request processing - 2====================================================="+ req.params.id);
    next()
}, (req, res, next) =>{
    console.log("3. ==================Request processing - 3======================================================");
    res.send("chain process completed");  // end the req-res cycle
    next();

});



 // CONDITIONAL ROUTING : applicable ONLY with app.METHOD()
  app.get('/student/:id', (req, res, next) => {
    console.log(" ==================Conditional Routing======================================================"+req.params.id);
    next();
  });
 
  app.get('/student/:id', (req, res, next) => {
    console.log(" ==================Conditional Routing======================================================");
      if(req.params.id === '3') {
        console.log("forwarding to next route");  
        next('route');
      }
      else {
        console.log("processing the current req --> "+ req.params.id); 
        next(); 
      }
    }, (req, res, next) => {
        res.send("the student id is --> "+ req.params.id);
  });

  // invoking next('route') flow
  app.get('/student/:id', (req, res, next) => {
    res.send("Student Id is 3.......");
  });



/**************************************************************************************************************** */
                          //Routing-level middleware
/***************************************************************************************************************** */
 /*
Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

var router = express.Router()
Load router-level middleware by using the router.use() and router.METHOD() functions.


 */


 /**************************************************************************************************************** */
                          //Error-handling middleware
/***************************************************************************************************************** */
 /*
Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.

 */

  app.use('/exception', (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("Internal Server Error");
  })

  app.use((req, res, next)=>{
    // response.third =  "STOP : order chaining has ended at Date.now() \n\r";
    console.log("STOP : order chaining has ended at "+ Date.now()); 
  //   res.send("All Done")    ;
  });
app.listen(3333);
