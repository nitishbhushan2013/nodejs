const express = require('express');
const indexRouter = require('./indexRouter');
const albumRouter = require('./albumRouter');
const artistRouter = require('./artistRouter');
const genreRouter = require('./genreRouter');
const musicRouter = require('./musicRouter');

const router = express.Router();

// middle ware 
router.use('/', indexRouter);
router.use('/albums', albumRouter);
router.use('/artists', artistRouter);
router.use('/genres',genreRouter );
router.use('/musics', musicRouter);

module.exports = router;

