const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message : "handling GET request to /products"
    })
})

router.post('/', (req,res,next)=>{
    res.status(200).json({
        message : "handling POST request to /products"
    })
})

router.get('/:productId', (req,res,next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message : "handling Get request to product Id",
        id: id
    })
})

router.post('/:productId', (req,res,next)=>{
    res.status(200).json({
        message : "handling POST request to individual product",
        id: req.params.productId
    })
})

module.exports=router;