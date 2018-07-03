/**
 * This app will be used to pull the user details from the github repo
 */
const github = require("./github");
const yargs = require("yargs");
const argv = yargs.argv;

 console.log(`user name - ${argv.name}`);

 var githubPromise = getUserDetail(argv.name);
 githubPromise.then((data)=>{
    console.log(JSON.stringify(data, undefined,2));
    return data; // for chaining, we need to return data to the next 'then'
 }, (error)=>{
    console.log(JSON.stringify(error, undefined,2));
 }).then((data)=>{
    console.log(`second set of data is -->${JSON.stringify(data, undefined,2)}`);
 })

/*
By chaining then functions on a promise we can pass the data to the next functions. 


*/