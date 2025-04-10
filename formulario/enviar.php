<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
if ($_POST) {
    $nombre = $_POST['nombre'];
    $cif = $_POST['cif'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'libs/vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                        //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                    //Enable SMTP authentication
    $mail->Username   = 'castillolaguardiadejaen@gmail.com';        //SMTP username
    $mail->Password   = 'kmcbojiixgkpcokn';                       //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;             //Enable implicit TLS encryption
    $mail->Port       = 465;                                     //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('remitente@gmail.com', 'Solicitante');
    $mail->addAddress('castillolaguardiadejaen@gmail.com', 'Guia de empresas'); //Add a recipient

    //Content
    $mail->isHTML(true);                                        //Set email format to HTML
    $mail->Subject = $nombre;
    $mail->Body = "CIF: " . $cif . "<br>Teléfono: " . $telefono . "<br>Email: " . $email . "<br>Mensaje: " . $mensaje;

    $mail->send();
    header("Location:formularioalta.html");
    echo("Correo enviado con éxito.");
} catch (Exception $e) {
    echo "Error en el envío: {$mail->ErrorInfo}";
}
?>
