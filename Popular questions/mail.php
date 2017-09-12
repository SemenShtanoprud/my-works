

<?php

$frm_name  = "Vorobievi gory";
$recepient = "dp160893ssv1@gmail.com";
$sitename  = "vorobievy-gory";
$subject   = "Новая заявка с сайта \"$sitename\"";


$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$question = trim($_POST["question"]);


$message = "

<b>Имя:</b> $name <br>
<b>Email:</b> $email <br>
<b>Вопрос:</b> $question
";
// if($name1 !== '') {
// 	mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
// }

$result = mail($recepient, $subject, $message, "From: $frm_name " . "\r\n"  . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
  if ($result == 'true'){ 
        echo "<p>Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи</p>";
    }
    else{
        echo "<p>Cообщение не отправленно. Пожалуйста, попрбуйте еще раз</p>";
    }

