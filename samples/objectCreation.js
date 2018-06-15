//object constructor
var o1 = new Object();
o1.name = "Nitish-1";
o1.company = "sydney water";
o1.getName =  function() {
    return this.name;
};
console.log("object constructor, object created is -->"+ o1.name, o1.company);
console.log("------------------------------------------------------------------------------");
// function constructor
var o2 = new function() {
    this.firstName = "Nitish";
    this.lastName = "Bhushan";
    this.getCompany = function() {
        return "Sydney water";
    }
}

console.log("function constructor-->"+ o2.firstName, o2.lastName, o2.getCompany());
console.log("------------------------------------------------------------------------------");

//singleton function 
var o3 = new function() {
    this.firstName = "manish";
    this.lastName = "Bhushan";
}
console.log("singleton constructor-->"+ o3.firstName, o3.lastName);
console.log("------------------------------------------------------------------------------");

//Array constructor
var o4 = {};
o4["firstName"] = "Anish";
o4["lastName"] = "Bhushan";
console.log("Array constructor-->"+ o4.firstName, o4.lastName);
console.log("------------------------------------------------------------------------------");

// function constructor
var obj = function(firstname, lastname, company) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.company = company;
}
var o5 = new obj("nitish", "bhushan", "SW");
console.log("function constructor-->"+ o5.firstName, o5.lastName, o5.company);
console.log("------------------------------------------------------------------------------");

