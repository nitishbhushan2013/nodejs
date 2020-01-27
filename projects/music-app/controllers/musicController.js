getAllMusics = (req, res, next) => {
    res.render('music', { title: 'List of musics' });
}
module.exports = { getAllMusics}