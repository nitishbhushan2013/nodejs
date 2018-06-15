var greeting = require("../greetings.json");

var morningGreet = function() {
    console.log(greeting.morning);
}

module.exports = morningGreet;