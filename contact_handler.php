<?php
// Configuration
$to = "majdddineoueslati@gmail.com"; // Remplace par ton adresse email réelle
$subject = "Nouveau message de contact depuis le site web";

// Vérifie que les données existent
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname   = strip_tags(trim($_POST["fname"]));
    $lname   = strip_tags(trim($_POST["lname"]));
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Validation
    if (empty($fname) || empty($lname) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        http_response_code(400);
        echo "Veuillez remplir tous les champs correctement.";
        exit;
    }

    // Construction du contenu de l'e-mail
    $email_content = "Nom: $fname $lname\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // En-têtes
    $headers = "From: $fname $lname <$email>";

    // Envoi de l'e-mail
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Merci pour votre message. Nous vous contacterons bientôt.";
    } else {
        http_response_code(500);
        echo "Une erreur est survenue. Le message n’a pas pu être envoyé.";
    }
} else {
    http_response_code(403);
    echo "Méthode de requête non autorisée.";
}
?>
