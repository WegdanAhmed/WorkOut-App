<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "signup";

try {
    // Create connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Function to check credentials
    function checkCredentials($email, $password, $conn) {
        $stmt = $conn->prepare("SELECT * FROM user WHERE email = :email AND password = :password");
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            return true; // Credentials match a record in the database
        } else {
            return false; // No matching record found
        }
    }

    // Example usage:
    $email_to_check =$_POST['email'] ;
    $password_to_check =$_POST['password'];

    if (checkCredentials($email_to_check, $password_to_check, $conn)) {
        exec('start chrome http://localhost:3456/home');
    } else {
        echo "Credentials not found or do not match";
    }
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>

