const mongoose = require('mongoose');
const schema = mongoose.Schema;

var todoSchema = new schema({
    title: {
        type : String,
        required : true
    },
    done: {
        type: Boolean,
        required:true
    }
})
var TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;