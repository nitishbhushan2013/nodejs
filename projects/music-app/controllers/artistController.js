getAllArtists = (req, res, next) => {
    res.render('index', { title: 'List of Artists' });
}
module.exports = { getAllArtists}
