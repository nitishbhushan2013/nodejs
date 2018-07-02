const geocode = require("./geocode/geocode")
const yargs = require("yargs");

//define yargs 
const argv = yargs
.options({
    a :{
        dvaremand : true,
        alias : 'address',
        string : true,
        describe : 'address to get the weather report'
    }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (error, results )=>{
    if(error)
        console.log(error);
    else    
        console.log(`details are ${JSON.stringify(results,undefined, 4)}`)
})