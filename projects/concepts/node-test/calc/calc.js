var add = (a,b)=>{
    return a+b;
} 

var asyncAdd = (a,b,callback) =>{
    setTimeout(()=>{
        var sum = a+b;
        callback(sum);
    },1000);
}

var asyncSqr = (a,b,callback) =>{
    setTimeout(()=>{
        // business logic
        var sqr = a*b;
        callback(sqr);
    },1000);
}




exports = module.exports = {
    add, asyncAdd, asyncSqr
}