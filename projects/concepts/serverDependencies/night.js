var greeting = require("../greetings.json");

var nightGreet = function() {
    console.log(greeting.night);
}

exports = module.exports = nightGreet;