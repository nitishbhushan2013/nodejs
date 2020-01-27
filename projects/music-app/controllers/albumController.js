getAllAlbums = (req, res, next)=>{
    res.render('index', { title: 'List of Albums' });
}

module.exports = {getAllAlbums}


