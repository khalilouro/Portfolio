<?php

$nom = $_POST['nom'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "khalilphelps8@gmail.com";
$subject = "Message depuis ton portfolio";

$body = "Nom: $nom\n";
$body .= "Email: $email\n\n";
$body .= "Message: \n$message";

$headers = "From: $email";

echo "Message envoyé avec succès!";

?>