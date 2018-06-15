
// function declaration
function greet() {
    console.log("Hello there");
}

greet1 = function() {
    console.log("Hello there again");
}

// function exprression 
var helloFunction = function() {
    console.log("function expression");
}

// function can be pass as parameter 

function invokeFunction(func) {
    func();
}

//invokeFunction(greet);
//invokeFunction(helloFunction);
//invokeFunction(function() {
 //   console.log("Inline function expression ");
//})

function handle() {
    console.log("This requires specific handles");
}

handle1 = function(){
    console.log("This requires specific handles - again");
}
//module.exports = handle;

// module.exports = {
//     handle : function handle() {
//         console.log("This requires specific handles")
//     },
//     greet : function greet() {
//         console.log("Hello there");
//     }
// }

// first way of defining module.exports
/*module.exports = {
    handle : handle1,
    greet : greet1
}*/

// second way of defining module.exports, module object has property named 'exports', which we can use to export any fields or methods for other programs
module.exports.handle = handle1;
module.exports.greet = greet1;

console.log("module.filename->"+module.filename);  
console.log("module.id->"+module.id);  
console.log("module.exports->"+module.exports);  



//links 
// http://stackabuse.com/how-to-use-module-exports-in-node-js/