//const MongoClient = require("mongodb").MongoClient;

//ES6 destructuring : fetching properties as new varible out of object
const {MongoClient, ObjectID} = require("mongodb");

var objId = new ObjectID();
console.log(`objId --> ${objId.getTimestamp()}`);

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
// connect using Mongo client
MongoClient.connect(dbUrl, (err, client)=>{
    if(err)
        return console.log("Error connecting Mongo Database ...abort");
    console.log("success in connecting to Mongo database");

    //get the collection name from the db
    const db = client.db(dbName);  
    
    // inserting todo document
    db.collection("Todos").insertOne({
        todo : "task2",
        completed : false
    },(err, response)=>{
        if(err)
            return console.log("unable to insert record..aborting...");
        console.log(JSON.stringify(response.ops, undefined, undefined));    
    })


    // insert Users collection details 
    db.collection("users").insertOne({
        name : "Jack Wilson",
        age : 28,
        location: "sydney"
    },(err, response)=>{
        if(err)
            return console.log("unable to insert record.. aborting.. ");
        console.log(JSON.stringify(response.ops, undefined, 3));    
    }) 
    client.close();    
})

