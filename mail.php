<?php
// Include PHPMailer autoload file
require 'vendor/autoload.php';

// Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer();

// SMTP configuration
$mail->isSMTP();
$mail->Host = 'live.smtp.mailtrap.io'; // Your SMTP server address
$mail->SMTPAuth = true;
$mail->Username = 'api'; // SMTP username
$mail->Password = '9ed90e25424bd57613c486592d28cad8'; // SMTP password
$mail->SMTPSecure = 'tls';
$mail->Port = 587; // TCP port to connect to

// Sender and recipient settings
$mail->setFrom('groont.agency@gmail.com', 'Groont agency');
$mail->addAddress('andry.yatsola@gmail.com', 'Andrii');

// Email subject and body
$mail->Subject = 'Test Email';
$mail->Body = 'This is a test email sent using PHPMailer';

// Send email
if ($mail->send()) {
    echo 'Email sent successfully';
} else {
    echo 'Error: ' . $mail->ErrorInfo;
}
?>