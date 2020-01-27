const express = require('express');
const socket = require('socket.io');

const app = express();

// define server
const server = app.listen(4000, ()=>{
    console.log(`server is listening at 4000`)
})

// middlewares configurations
app.use(express.static('public')); 

//socket implementation
const io = socket(server);
 
//listen for the connection
io.on('connection', (socket)=>{

    // perform action on socket object, listen for the action 
    socket.on('chat', (data)=>{ // data is beings ent from the client
        // rely this message to all the sockets registered with this server
        io.sockets.emit('chat', data);
    })

    socket.on('typing',(data)=>{
        //broadcast the message
        socket.broadcast.emit('typing', data);
    })
    

})
