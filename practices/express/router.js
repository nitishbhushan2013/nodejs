const express = require('express');
const router = express.Router();

// define route for home page 
router.get('/', (req, res)=>{
    res.send("This is the home page ");
})

// define router for user detail page 
router.get('/user', (req, res)=>{
    res.send("This is the user details page");
});

module.exports = router;