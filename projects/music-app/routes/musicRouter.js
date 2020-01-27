const express = require('express');
const {getAllMusics} = require('../controllers/musicController');

const router = express.Router();

// set up router for /musics
router.get('/',getAllMusics);

module.exports = router;