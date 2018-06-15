//older way 
// function Greeter() {
//     this.name = "Nitish Bhushan";
//     this.company = "SW";
// }

// Greeter.prototype.greet =  function() {
//        console.log("hello "+this.name); 
// }


// newer way
'use strict'
class Greeter {  //class definition from ES6
    cosntructor() { 
        this.name = "Nitish Bhushan";
        this.company = "SW";
    }
    greet () { // newer way to define prototype function 
        //console.log("hello "+this.name); 
        console.log(`hello ${this.name}`); // template string 
 }

}
var obj1 = new Greeter();

console.log(obj1.greet());
console.log(obj1.__proto__ === Greeter.prototype);
