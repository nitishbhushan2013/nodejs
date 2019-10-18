const {MongoClient} = require("mongodb");

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(dbUrl, (err, client)=>{
    if(err)
        return console.log("Error connecting Mongo Database ...abort");
    
    const db = client.db(dbName);
    console.log(`db --> ${db}`);
    
    // update would take the update operator - https://docs.mongodb.com/manual/reference/operator/update/ 
    // update signature - findOneAndUpdate({}, {}, {})
    db.collection('Todos').findOneAndUpdate({
        todo : 'complete mongo db and node conectivity and usages understanding'
    }, {
        $set : {
            todo : 'task2',
            completed : true
        }
    }, {
        returnOriginal : false // this option would return the updated document 
    }). // Promise
        then((data)=>{
            console.log(JSON.stringify(data, undefined,3));
        },(err)=>{
            return console.log("unable to update the document");
        })

    
  // closing the DB      
  client.close();      

})