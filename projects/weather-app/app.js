const geocode = require("./geocode/geocode")
const forcast = require("./forcastApp/forcast")
const yargs = require("yargs");
var latitude;
var longitude;
var temperature,currentSummary,night,dailySummary

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
    else {    
       // console.log(`details are ${JSON.stringify(results,undefined, 4)}`)
       latitude = results.latitude;
       longitude = results.longitude;
       console.log(`latitude is ${latitude} and longitude is ${longitude}`);
    }    
})

setTimeout(() => {
    forcast.getCurrentWeatherDetails(latitude, longitude, (error, response) => {
        if(error)
            console.log(error);
        else {
            console.log(`Weather report--> ${JSON.stringify(response, undefined, 4)}`)
        }   
            
    })
}, 2000); // wait for 2 secs to get the latitude and longitude

