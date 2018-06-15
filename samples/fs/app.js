var fs = require("fs");
var zlib = require('zlib')

//console.log("SYNC start reading-- START");
fs.readFile(__dirname+'/input.txt','utf8',  (err, data)=> {
    if(err) throw err;
   // console.log(data);
})
//console.log("SYNC start -- END ");


/*
readFileSync and readFile are two file reading method that use buffer of V8 Heap to temp storer data for reading purpose. 
This approach is not very useful and practical as it leads to performance issue. 

Stream is the answer. 
Stream is sequence of data broken into pieces called CHUNK of some particualr size. 

In older node - there is only Stream class. 
Howevere in newer code, this has been broken into different classes. These are abstract class. 
    - Readable Stream - user can only read from this stream
    - Writable Sream - user can only write to this stream
    - Duplex Stream - user can do both in this stream
    - Transform stream - Data is getting transform as it move along the stream. It means, while passing through, it is being
    consumed by some processoer. 
    - PassThrough Stream         

    These read and write stream are with reference to Node. if Node is reading through the stream then its readable stream.
    If Node is writting to the stream then its writable stream. 

    User needs to extend these calsses to use their functionalitieis. 
*/
console.log(__dirname);

var readable = fs.createReadStream(__dirname+"/input.txt", {"encoding":"utf8"});
var writable = fs.createWriteStream(__dirname+"/output.txt");
var compressed  = fs.createWriteStream(__dirname+"/compressed.gz");
var gzip = zlib.createGzip();

readable.on("data", (chunk)=>{
    console.log(chunk);
});
//1.  Using event emitter function
readable.on("data", (chunk)=>{
    writable.write(chunk);
})

//using pipes, replacing entire conetnt of 1.
//readable.pipe(writable);    
readable.pipe(gzip).pipe(compressed);

