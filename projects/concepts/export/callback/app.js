

/*
var parentFun = (callback) => {
    setTimeout(() => {
        callback("data1", "data2")
    }, 2000);
}

parentFun((data1, data2) => {
    console.log("In the callback-data1->", data1)
    console.log("In the callback-data2->", data2)
})
*/

// when function is pass as a parameter to other funtin then its callback function.
var parentFun = (num1, num2, callback) =>{
    var sum = num1 + num2; // perform business logics
    // we must need to know the signature of calllback function as to how we can call this function 
    callback(sum); // calling to callback function
}

// define callback function 
var callback = (num) =>{
    console.log(num);
}
// flavour one - callback is defined externally
    //parentFun(3, 4, callback); // call the parentFun
// flavour 2 - callback is defined in the calling parent function

parentFun(3, 4, (num)=>{
    console.log(num);
})


