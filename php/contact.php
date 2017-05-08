<?php
	// Check for empty fields.
	if (empty($_POST['sender_email']) || empty($_POST['sender_message']) || !filter_var($_POST['sender_email'], FILTER_VALIDATE_EMAIL)) {
		echo "Your email could not be sent";
		return false;
	} else {
		// Store form inputs
        $name = $_POST['sender_name'];
		$sender = $_POST['sender_email'];
		$message = $_POST['sender_message'];
		
		// Compose the email
		$to = 'contact@pathfindersit.ca';
		$subject = "Website contact form. Reply to: " . $name . "email:" . $sender;
		
		// Send the email
		mail($to, $subject, $message, "From: ". $sender . "\r\n" . "Content-Type: text/plain; charset=utf-8", 
		"-fsender@example.com");
		echo "We have received your email";
		true;
	}
?>