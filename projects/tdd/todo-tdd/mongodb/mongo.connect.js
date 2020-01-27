const mongoose = require('mongoose');

connect = async ()=>{
    try{
        var connecResponse = await mongoose.connect("mongodb://nitish:nitish123@ds163630.mlab.com:63630/nodesamples", { useNewUrlParser: true });
        console.log(`Db connection is successful`)
    }catch(error){
        console.error(`error connecting to mongoDb. ${error}`);
    }
}
module.exports = {connect} ;
//mongodb://<dbuser>:<dbpassword>@ds163630.mlab.com:63630/nodesamples