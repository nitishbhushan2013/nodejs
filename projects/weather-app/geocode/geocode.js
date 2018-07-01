// required modules
const request = require("request");
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


var geocodeAddress = () => {
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`;
    console.log(`url --> ${url}`);
    //create request and get the address and set geocodeAddress
    request({
        url : url,
        json : true
        },
        (error, response, body) => {
            if(error) {
                console.log("could not connect to Google Server")
            }else if(body.status === 'ZERO_RESULTS') {
                console.log("unable to find the address");
            }    
            else if (body.status === 'OK') {
                console.log(body.status )
                console.log(body.results[0].geometry.location)
                return body.results[0].geometry.location;
            }
    })
}

exports = module.exports =  {
    geocodeAddress
}


