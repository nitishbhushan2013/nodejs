const express =  require("express");

const app = express();

app.set("views", './views');
app.set("view engine", "ejs");

app.get('/persons/:personId/:personName', (req, res) => {
    res.render('index', {
        personId :req.params.personId,
        personName : req.params.personName
    }) 
});

app.listen(3000);
