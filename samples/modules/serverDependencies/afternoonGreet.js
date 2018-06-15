var greeting = require("../greetings.json");

var afternoonGreet = function() {
    console.log(greeting.afternoon);
}

module.exports = afternoonGreet;