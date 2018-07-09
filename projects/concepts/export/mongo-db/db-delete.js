const {MongoClient} = require("mongodb");

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(dbUrl, (err, client)=>{
    if(err)
    return console.log("Unable to conect to Mongo DB..aborting... ");

    const db = client.db(dbName);
    
    db.collection('Todos').deleteMany({  // deleteOne
        todo: 'task2'
    }, (err, res)=>{
        if(err)
            return console.log("unable to delete record..aborting...");
        console.log(JSON.stringify(res, undefined, 3));    
    })


    db.collection("Todos").findOneAndDelete({
        completed: false
    }, (err, res)=>{
        if(err)
            return console.log("unable to delete record..aborting...");
        console.log(JSON.stringify(res, undefined, 3));    
    })



   // closing the DB 
   client.close();
})

