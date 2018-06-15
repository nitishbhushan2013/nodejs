// call back implementation 
// call back in a function is the function that is being called by first function on its completion. 
// So in the code base, if we see a function is getting pass in second function then its callnack mechanism or framework. 

function parent (callback) {

    console.log("This is the parent function ");
    var data = {
        name: "Nitish Bhushan",
        company : "SW"
    };
    callback(data);
}


var callback = function(data) {
    console.log(data);
}

parent(callback);
