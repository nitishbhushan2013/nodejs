const express = require('express');
const router = express.Router();

const {getAllAlbums} = require('../controllers/albumController');

// all router for /albums due to index.js redirection
router.get('/', getAllAlbums);

module.exports = router;