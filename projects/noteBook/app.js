const yargs = require("yargs");

const os = require("os");

const note = require("./notes.js");

// 1. get the arguments from the command prompt
var args = yargs.argv;
var operation = process.argv[2]

console.log("operation -->"+ operation);

var noteObj = {
    title : "",
    subject : ""
}

// 2. call the api for each of the operation
switch(operation) {
    case 'add' :
        noteObj.title = args.title;
        noteObj.subject = args.subject;
        var noteString = JSON.stringify(noteObj);

        note.addNote(noteString);
        break;
    case 'read' :
        note.readNote(args.title);
        break;
    case 'delete' :
        note.deleteNote(args.title);
        break;
    case 'list' :
        note.listNotes();
        break;                
}


