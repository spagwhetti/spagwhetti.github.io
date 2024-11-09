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
