
/*
The core idea behind promises is that a promise represents the result of an asynchronous operation. A promise is in one of three different states:

pending - The initial state of a promise.
fulfilled - The state of a promise representing a successful operation.
rejected - The state of a promise representing a failed operation.
Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).

We use new Promise to construct the promise. We give the constructor a factory function which does the actual work. This function is called immediately with two arguments. The first argument fulfills the promise and the second argument rejects the promise. Once the operation has completed, we call the appropriate function.

Promise is solution for 'Callback Hell'

*/
var promise = new Promise((resolve, reject)=>{
   // resolve("This function is resolved");
    reject("oops ");
    reject("oops -1");
}); 

promise.then((message)=>{
    console.log("promise is resolved with messsage--", message)
}, (error)=>{
    console.log("promise is rejected with messsage--", error)
})
