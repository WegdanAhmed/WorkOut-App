<?php
// Establish your database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "signup";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Capture user input
$firstname =$_POST ['firstname']; 
$lastname =$_POST['lastname'] ;
$email =$_POST['email'] ;
$password =$_POST['password'] ;

// Prepare your SQL query
$sql = "INSERT INTO user (`firstname`, `lastname`, `email`, `password`) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

// Bind parameters
$stmt->bind_param("ssss", $firstname, $lastname, $email, $password); // Assuming all values are strings

// Execute the statement
if ($stmt->execute()) {
    exec('start chrome http://localhost:3456/home');;
} else {
    echo "Error: " . $stmt->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>

















