function Greeter() {
    this.greeter = "Nitish Bhushan";
    this.greet = function() {
        //console.log(this.greeter);
        console.log("module.exports pointysb to an object");
    }
}

module.exports = new Greeter();