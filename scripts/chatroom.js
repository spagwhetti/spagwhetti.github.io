const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

var chatbox = document.getElementById("chatbox");
var messageInput = document.getElementById("message");

function sendMessage() {
  var message = messageInput.value;
  if (message.trim() !== "") { // Check if the message is not empty
    chatbox.innerHTML += "<p>You: " + message + "</p>";
    messageInput.value = ""; // Clear the message input field
  }
}

messageInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendMessage();
  }
});
