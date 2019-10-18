const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message : "handling GET request to /orders"
    })
})

router.post('/', (req,res,next)=>{
    res.status(200).json({
        message : "handling POST request to /orders"
    })
})

router.get('/:orderId', (req,res,next)=>{
    const id = req.params.orderId;
    res.status(200).json({
        message : "handling Get request to order Id",
        id: id
    })
})

router.post('/:orderId', (req,res,next)=>{
    res.status(200).json({
        message : "handling POST request to individual order",
        id: req.params.orderId
    })
})

module.exports=router;