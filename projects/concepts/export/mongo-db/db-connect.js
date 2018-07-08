const MongoClient = require("mongodb").MongoClient;

// connect using Mongo client
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client)=>{
    if(err)
        return console.log("Error connecting Mongo Database ...abort");
    console.log("success in connecting to Mongo database");
    client.close();    
})

