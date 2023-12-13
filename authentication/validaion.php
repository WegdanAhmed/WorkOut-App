<?php
// validation.php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Assume the data sent from React is in JSON format
    $data = json_decode(file_get_contents("php://input"), true);

    $firstname = $data['firstname'];
    $lastname = $data['lastname'];
    $password = $data['password'];
    $email = $data['email'];

    $errors = [];

    // Validate firstname
    if (empty($firstname)) {
        $errors['firstname'] = 'First name is required';
    }

    // Validate lastname
    if (empty($lastname)) {
        $errors['lastname'] = 'Last name is required';
    }

    // Validate password
    if (empty($password)) {
        $errors['password'] = 'Password is required';
    } elseif (strlen($password) < 6) {
        $errors['password'] = 'Password must be at least 6 characters';
    }

    // Validate email
    if (empty($email)) {
        $errors['email'] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Invalid email format';
    }

    // Return the response as JSON
    header('Content-Type: application/json');
    if (empty($errors)) {
        $response = array("success" => true, "message" => "Validation successful");
    } else {
        $response = array("success" => false, "errors" => $errors);
    }

    echo json_encode($response);
}
?>
