// emit handleing 

// function Emitter () {
//     this.events = {};
// }

// Emitter.prototype.on = function(type, listener ) {
//     this.events[type] = this.events[type] || [];
//     this.events[type].push(listener);
// }

// Emitter.prototype.emit = function(type) {
//     if(this.events[type]) {
//         this.events[type].forEach(function(listener) {
//             listener();
//         });
//     }
   
// }

// ES6 declaration
'use strict'
var events  = require("./events.json");
class Emitter {
    constructor () {
        this.events = {};
    }
    // definition of prototype functions starts 
    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    } 
    emit(type) {
        if(this.events[type]) {
            this.events[type].forEach(function(listener) {
                listener();
            });
        }
    }
}



var obj1 = new Emitter();

obj1.on(events.ONSAVE, function() {
    console.log("file has saved successfully");
});
obj1.on(events.ONSAVE, function() {
    console.log("file has selected successfully");
});

obj1.emit(events.ONSAVE);