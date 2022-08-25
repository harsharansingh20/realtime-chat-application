// node server which will handle socket io connections

const express = require('express');
const io = require('socket.io')(8000);
// const cors = require('cors');
const app = express();

// app.use(cors());

const users = {};

io.on('connection', socket =>{
  socket.on('new-user-joined', Name => {
      console.log("new user",Name);
    users[socket.id] = Name;
    socket.broadcast.emit('user-joined', Name);
  });
  
  socket.on('send', message => {
    socket.broadcast.emit("recieve", {
      message: message,   
      Name: user[socket.id],
    });
  });
});
