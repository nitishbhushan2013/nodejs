//object and its properties
var obj = {
    name : "Nitish Bhushan",
    "company" : "Sydney Water"
}

//first way
console.log("name->"+obj.name);
console.log("company->"+obj.company);

//second way 
console.log(obj['name']); // value must be of string type

//third way
var nameKey = "name";
console.log(obj[nameKey]); 


//Array

var arr = [];

arr.push(function() {
    console.log("function inserted - 1");
})
arr.push(function() {
    console.log("function inserted - 2");
})
arr.push(function() {
    console.log("function inserted - 3");
})
//arr.push(123);

arr.forEach(function(item){
item();
})