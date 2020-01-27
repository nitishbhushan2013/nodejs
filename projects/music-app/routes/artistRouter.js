const express = require('express');
const {getAllArtists} = require('../controllers/artistController');

const router = express.Router();

// set up router for /artists
router.get('/',getAllArtists);

module.exports = router;