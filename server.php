<?php
// Connect to the database
$conn = mysqli_connect("localhost", "username", "password", "chat_db");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Insert a new message into the database
$message = $_POST['message'];
$sql = "INSERT INTO messages (message) VALUES ('$message')";
if (mysqli_query($conn, $sql)) {
    echo "Message sent successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
