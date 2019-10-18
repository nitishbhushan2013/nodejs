var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {"id":1, "FirstName":"Nitish", "LastName":"Bhushan"},
    {"id":2, "FirstName":"Manish", "LastName":"Bhushan"},
  ])
});

module.exports = router;
