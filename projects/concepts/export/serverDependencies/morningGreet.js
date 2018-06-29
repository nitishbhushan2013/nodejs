var greeting = require("../greetings.json");

var morningGreet = function() {
    console.log(greeting.morning);
}

exports = module.exports = morningGreet;