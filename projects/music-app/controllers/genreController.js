getAllGenres  = (req, res, next) => {
    res.render('index', { title: 'List of genres' });
}
module.exports = { getAllGenres}
