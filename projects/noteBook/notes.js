const fs = require("fs");
const _ = require("lodash");

var noteObj = {
    title,
    subject
}

//create a json file to store the content. 
/*var jsonFile = fs.open('./notebook.json', 'a+', (err,data) => {
    if(err)
        console.log("file error...abort")
    else {
        //console.log("data --> "+data)
    }
} )*/

 addNote = (noteString) => {
    fs.appendFile('./notebook.json', noteString, (err)=> {
        if (err)
            console.log("error occured .. abort...")
    })
 }

 deleteNote = (title) => {
    console.log("deleting note with title-->"+title);
    noteString = "";
    fs.readFile('./notebook.json', (err,data)=> {
        if(err)
            console.log("file read error... abort...")
        else {
            noteObj = JSON.parse(data);
            if(_.eq(title, noteObj.title)) {
                fs.writeFile('./notebook.json', noteString, (err)=> {
                    if (err)
                        console.log("error occured .. abort...")
                })
            }
            else 
                console.log(`note with ${title} not found..`)
         }   
    })   
 }

 readNote = (title) => {
    console.log("reading note with title-->"+title);
    //1. read file and get the content 
    //2. convert the content to object, compare and display the content
    fs.readFile('./notebook.json', (err,data)=> {
        if(err)
            console.log("file read error... abort...")
        else {
            noteObj = JSON.parse(data);
            if(_.eq(title, noteObj.title)) {
                console.log(`title --> ${noteObj.title}`);
                console.log(`subject --> ${noteObj.subject}`); 
            }
            else 
                console.log(`note with ${title} not found..`)
            
         }   
    })
 }

 listNotes = () => {
    console.log("Listing notes");
 }

 exports = module.exports = {
     addNote, deleteNote, readNote, listNotes
 }