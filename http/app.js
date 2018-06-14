var http = require("http");
var fs = require("fs");

// create http proxy server 
http.createServer((req,res)=>{
    // json implementation
    /*  res.writeHead(200, {'Content-Type' : "text/json"});
    var obj = {
        'Name' : "Nitish Bhushan",
        'Company' : "SW"
    }
     //res.end(JSON.stringify(obj));
    */

    //reading file and outputting though pipes
  /*  res.writeHead(200, {'Content-Type' : "text/html"})
    fs.createReadStream(__dirname+"/index.html").pipe(res); // stream and pipes
   */
  

   //routing concept
   if(req.url == '/') {
       fs.createReadStream(__dirname+"/index.html").pipe(res);
   }
   else if (req.url == '/json') {
        res.writeHead(200, {'Content-Type' : "text/json"});
        var obj = {
            'Name' : "Nitish Bhushan",
            'Company' : "SW"
     }
     res.end(JSON.stringify(obj));
   }

   }).listen(3333, 'localhost');


