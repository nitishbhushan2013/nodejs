'use strict'

class Greeter {
    constructor(firstname, lastname, company){
        this.firstname = firstname;
        this.lastname = lastname;
        this.company =  company;
    }

    sayHello(id, dept, deskNo) {
        console.log(  `${this.company} : Hello and good morning to ${this.firstname} ${this.lastname}. !!!.` );
        console.log(  ` your ID is ${id}, dept is ${dept} and your deskNo is ${deskNo}` );
    }
}

var obj1 = new Greeter("Nitish", "Bhushan", "Sydney Water");
var obj2 = new Greeter("Manish", "Bhushan", "Reliance");
var obj3 = new Greeter("Anish", "Bhushan", "Lifestyle");

Greeter.prototype.sayHello.call(obj1, 300, "IT", 33);  // call -> takes the comma seperated parameters
Greeter.prototype.sayHello.apply(obj1, [300, "IT", 33]); // apply -- takes the array of parameters
//Greeter.prototype.sayHello.call(obj2, 500, Retail, 55);
//Greeter.prototype.sayHello.call(obj3, 700, manufactoring, 77 );

//console.log(obj2.sayHello());