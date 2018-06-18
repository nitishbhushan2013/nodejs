/*
use mongoLab to maintain cloud based mongo db instance 
use mongoose NPM module to manage the client interaction with the mongo db 
*/

const mongoose = require('mongoose');
//import mongoose from 'mongoose';
const options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: 100, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };

/* mongoose.connect("mongodb://nitish:nitish123@ds163630.mlab.com:63630/nodesamples", options, (err, data)=> {
    if(err) throw err;
    console.log("Database connection created !!!!!");
});
*/

mongoose.connect('mongodb://nitish:nitish123@ds163630.mlab.com:63630/nodesamples',options).then(
    ()=>{
      console.log("connected to mongoDB")},
   (err)=>{
       console.log("err",err);
  })



const Schema  = mongoose.Schema;
const PersonDetailSchema = new Schema({
    firstName : String,
    lastName : String,
    mobile : String
});

const PersonDetail =  mongoose.model('PersonDetail', PersonDetailSchema);

const person1 = PersonDetail({
    firstName : 'Daniel',
    lastName : 'kohn',
    mobile : '938384388'
}) ;

person1.save(function(err,data){
    if(err) throw err;
    console.log("record saved -->"+data);
})
