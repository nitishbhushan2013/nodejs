const express = require('express');
const {getAllGenres} = require('../controllers/genreController');

const router = express.Router();

// set up router for /genres
router.get('/',getAllGenres);

module.exports = router;