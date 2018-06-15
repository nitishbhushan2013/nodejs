// Buffer handling in NodeJs

var buff = new Buffer("Hello world", 'UTF-8');
// console.log(buff); // console.log(buff);
// console.log(buff.toString());
// console.log(buff.toJSON());
// console.log(buff[3]);
// buff.write("dddSSSSSWWWWDDDAAAWWWW")
// console.log(buff.toString());

var arrBuffer = new ArrayBuffer(2); // 12  undefined
var arrBuffer = new ArrayBuffer(3); // 12  15
var arrBuffer = new ArrayBuffer(4); // 12  15
var view = new Int16Array(arrBuffer);
view[0] = 12;
view[1] = 15;
console.log(view[0] );    
console.log(view[1] ); 