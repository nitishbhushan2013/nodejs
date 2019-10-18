var greeting = require("../greetings.json");

var afternoonGreet = function() {
    console.log(greeting.afternoon);
}

exports = module.exports = afternoonGreet;