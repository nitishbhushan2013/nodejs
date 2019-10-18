const express = require('express');
const morgan = require('morgan');
const productsRouter = require('./api/routes/products');
const ordersRouter = require('./api/routes/orders');
const app = express();


//request side logging 
app.use(morgan('dev'));
app.use('/products',productsRouter)
app.use('/orders',ordersRouter)

// capture exception: If any route is ot able to process the request then its an error
app.use((req, res, next)=>{
    const error = new Error("error has been thrown");
    error.status = 404;
    
    next(error);
})


// define the generic exception handling block
app.use((error, req, res, next)=>{
    
    res.status(error.status || 500)
    res.json({
        errorMessage : error.message
    })

})
module.exports = app;

