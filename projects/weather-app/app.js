const geocode = require("./geocode/geocode")

var geocodeLocation = geocode.geocodeAddress();
console.log(`geocodeLocation---> ${JSON.stringify(geocodeLocation)}`);