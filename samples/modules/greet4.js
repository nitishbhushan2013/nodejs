function Greeter () {
    this.Greeter = "Nitish Bhushan";
    this.greet = function() {
        console.log("module.expots would point to a reference of an object");
    }
}

module.exports = Greeter;