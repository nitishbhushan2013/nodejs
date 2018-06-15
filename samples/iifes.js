// immediately invoked function 

var firstName = "Manish"; 
(function (lastName) {
    var firstName = "Nitish ";  // it is scoped within this function 
    console.log("firstName-->"+firstName);
    console.log("lastName-->"+lastName);
}("Bhushan"));

console.log("firstName-->"+firstName);
//console.log("lastName-->"+lastName); // this will give error as it has not been defined 