

//Links 
// https://hackernoon.com/prototypes-in-javascript-5bba2990e04b


function Human (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}


// console.log(Human);
// console.log(Human.prototype);
// console.log(Human.prototype.constructor);
// console.log(Human.prototype.__proto__);
// console.log(obj1);
// console.log(obj1['__proto__']);
// console.log(Human.prototype == obj1.__proto__);

//adding primitive value to Human
//adding non-primitive value to Human
Human.prototype.company = "sydney water";

var obj1 = new Human('nitish', 'bhushan');
var obj2 = new Human('Manish', 'bhushan');

console.log(obj1); //Human { firstname: 'nitish', lastname: 'bhushan' }
console.log(obj1.company); //sydney water
console.log(obj2.company); //sydney water

obj2.company = "SW";

console.log(obj1.company); //sydney water
console.log(obj2.company); //SW, non-primitive value is overwritten by object and it dit not impact the prototype object

//overwritting non-primitive value 
Human.prototype.arr = ['one', 'two'];

console.log(obj1.arr); //
console.log(obj2.arr); 

obj2.arr.push("three");

console.log(obj1.arr); 
console.log(obj2.arr); 

console.log("====================================================================================================");


// Right way of using prototype example 
function vehicle(model, wheel, owner) {
    this.model = model;
    this.wheel = wheel;
     this.owner = owner;

};

vehicle.prototype.blowHorn= function() {
    console.log("Horn is blowing");
};

vehicle.prototype.broadcastOwner= function() {
    console.log(this.owner);
};


var honda =  new vehicle("Honda", 4, "manish");
var rangeRover =  new vehicle("Range Rover", 4, "nitish");


function PersonDetails(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.cars = [ ];

}
PersonDetails.prototype.name = function() {
    return this.firstname + " " + this.lastname;
}


PersonDetails.prototype.sayHello = function() {
        console.log(this.name());
}

var nitish = new PersonDetails("nitish", "bhushan");
var manish = new PersonDetails("manish", "bhushan");

console.log(nitish);
console.log(manish);

console.log("-----------------------------------------------------------------------");
nitish.cars.push("range rover");

console.log(nitish.name());
console.log(manish.name());

console.log(nitish.sayHello());