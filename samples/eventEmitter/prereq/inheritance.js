function superSuperclass () {
    this.superSupername = "super-super";
}


function superclass () {
    this.supername = "super";
}

superclass.prototype = new superSuperclass();

superclass.prototype.getSupername = function(){
    console.log("super class name is : "+ this.supername);
}

function subclass () {
    this.subname = "sub";
}

subclass.prototype = new superclass();

subclass.prototype.getSubname = function(){
    console.log("sub class name is : "+ this.subname);
}

