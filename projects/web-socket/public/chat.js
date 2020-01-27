// this socket is differen then one defined in the index.js.
var socket = io.connect("http://localhost:4000"); 

var btn = document.getElementById('send');
var handle = document.getElementById('handle');
var message = document.getElementById('message');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// bind action on send button click event
btn.addEventListener('click', ()=>{
    console.log('click event trigerred');
    socket.emit('chat',{
        handle: handle.value,
        message : message.value
    });
})

message.addEventListener('keypress', ()=>{
    socket.emit('typing',handle.value);
})

// listen for event from the server
socket.on('chat', (data)=>{
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
    feedback.innerHTML = "";
})

socket.on('typing', (data)=>{
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
})