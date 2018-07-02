
/*
This app will use the forcast.io to fetch the weather report based on longitude and latitude of the location
 forcast Io key - **26dd710af7bb8aad9d97661a252***
forecast request details - 
    https://api.darksky.net/forecast/[key]/[latitude],[longitude]

    https://api.darksky.net/forecast/9826dd710af7bb8aad9d97661a252878/-33.8104121,151.1844969
 */

const request = require("request");

var getCurrentWeatherDetails = (latitude, longitude, callback) => {
  var forcastUrl = `https://api.darksky.net/forecast/9826dd710af7bb8aad9d97661a252878/${latitude},${longitude}`;
  console.log(`forcastUrl --> ${forcastUrl}`);
    request({
        url : forcastUrl,
        json : true
        },
        (error, response, body) => {
            if(error) {
                console.log(`error --> ${error}` )
                callback("could not connect to forcase weather server ")
            }   
            else if (response.statusCode === 400) {
                callback("could not connect to forcase weather server ")
            }    
            else if (!error & response.statusCode === 200) {
                callback(undefined,{
                    temperature :  body.currently.temperature,
                    apparentTemperature :  body.currently.apparentTemperature,
                    currentSummary :  body.currently.summary,
                    night : body.daily.data[0].icon,    
                    dailySummary : body.daily.summary
                });
            }
           
    })
}

exports = module.exports =  {
    getCurrentWeatherDetails
}
