var fs = require("fs");

// create readable stream 
var readerStream = fs.createReadStream("read.txt");
console.log("start reading files");
// set Encoding
readerStream.setEncoding("UTF8");

// implement event 'data' and 'end'
readerStream.on('data', (chunk)=>{
    console.log(chunk);
});
readerStream.on('end', ()=>{
   // console.log(data);
})
