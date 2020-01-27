const express = require('express');
const {getAllIndex} = require('../controllers/indexController');

const router = express.Router();

// set up router for /
router.get('/',getAllIndex);


module.exports = router;