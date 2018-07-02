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
       console.log(`latitude is ${latitude} and longitude is ${longitude}`);
       // calling forcase.io API to get the currebt day weather report
       forcast.getCurrentWeatherDetails(results.latitude, results.longitude, (error, response) => {
            if(error)
                console.log(error);
            else 
                console.log(`Weather report--> ${JSON.stringify(response, undefined, 4)}`)
        })
    } 
})       
// first approach : Ajax call chaining. rather primitive and error prone solution
/*
setTimeout(() => {
    forcast.getCurrentWeatherDetails(latitude, longitude, (error, response) => {
        if(error)
            console.log(error);
        else {
            console.log(`Weather report--> ${JSON.stringify(response, undefined, 4)}`)
        }   
            
    })
}, 2000); // wait for 2 secs to get the latitude and longitude
*/
