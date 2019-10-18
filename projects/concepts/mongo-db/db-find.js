const {MongoClient} = require("mongodb");

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(dbUrl, (err, client)=>{
    if(err)
        return console.log("Unable to conect to Mongo DB..aborting... ");
    
    // get the db name
    const db = client.db(dbName);    

    
// find.toArray() returns list of array  which is Promise    
db.collection("Todos").find({
    completed : true
}).toArray().then((response)=>{
    console.log(JSON.stringify(response, undefined, 3));
},(err)=>{
    return console.log("unable to fetch record..aborting...");
})


db.collection("Todos").find({
    completed : true
}).count().then((count)=>{
    console.log(`The total numebr of records in Todos collection is ${count}`);
},(err)=>{
    return console.log("unable to get record count..aborting...");
})



    // closing the DB    
    client .close();    
})




