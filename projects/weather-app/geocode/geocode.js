// required modules
const request = require("request");



var geocodeAddress = (address, callback) => {
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;
    console.log(`url --> ${url}`);
    //create request and get the address and set geocodeAddress
    request({
        url : url,
        json : true
        },
        (error, response, body) => {
            if(error) {
                callback("could not connect to Google Server")
            }else if(body.status === 'ZERO_RESULTS') {
                callback("unable to find the address");
            }    
            else if (body.status === 'OK') {
                console.log(body.status )
                callback(undefined,{
                    address :  body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng 
                });
            }
    })
}

exports = module.exports =  {
    geocodeAddress
}


