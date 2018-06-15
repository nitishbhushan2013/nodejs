console.log("---------------------------------------------------------------------------------");
var methods = require("./greet");
methods();

console.log("---------------------------------------------------------------------------------");
var methods = require("./greet1");
methods();

console.log("---------------------------------------------------------------------------------");
var methods = require("./greet2");
methods.greet();

console.log("---------------------------------------------------------------------------------");
var methods = require("./greet3");
methods.greet();

console.log("---------------------------------------------------------------------------------");
var Greet = require("./greet4");
    var obj = new Greet();
    obj.greet();

console.log("---------------------------------------------------------------------------------");
console.log("exposing different methods");
var methods = require("./greet5");
    methods.method1();
    methods.method2();
    methods.method3();

console.log("---------------------------------------------------------------------------------");    
console.log("reading from json file ");
var messages  = require("./greetings");
console.log(messages.morning)