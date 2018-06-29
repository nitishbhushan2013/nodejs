/**
 * Define the operations
 */


 addNote = (title, subject) => {
    console.log("title --> "+ title);
    console.log("subject -->"+ subject);
 }

 deleteNote = (title) => {
    console.log("deleting note with title-->"+title);
 }

 readNote = (title) => {
    console.log("reading note with title-->"+title);
 }
 
 listNotes = () => {
    console.log("Listing notes");
 }

 exports = module.exports = {
     addNote, deleteNote, readNote, listNotes
 }