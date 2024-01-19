<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "example@gmail.com";
$subject = "Subject";

mail($recipient, $subject, $phone, $mailheader, $phone) or die("Error!");

echo"Message sent";

?>