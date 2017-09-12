

<?php

$frm_name  = "Popup_setTimeout";
$recepient = "dp160893ssv1@gmail.com";
$sitename  = "Popup_setTimeout";
$subject   = "Новая заявка с сайта \"$sitename\"";
// $recepient = "info@snails-house.com";


$names = trim($_POST["names"]);
$phones = trim($_POST["phones"]);
// $question = trim($_POST["question"]);
// $phone = trim($_POST["phone"]);
// $mail = trim($_POST["email"]);
// $textarea = trim($_POST["textarea"]);
// $number = trim($_POST["number"]); 
// $formname = trim($_POST["formname"]);
// $category = trim($_POST["category"]);
// $product = trim($_POST["prodct"]);



$message = "

<table>
	<tr>
		<td><p>Заявка с сайта!</p></td>
	</tr>
	<tr>
		<td><b>Имя:</b></td>
		<td>$names</td>
	</tr>
	<tr>
		<td><b>Телефон:</b></td>		 
		<td>$phones</td>

	</tr>
</table>
";
// if($names1 !== '') {
// 	mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
// }

$result = mail($recepient, $subject, $message, "From: $frm_name " . "\r\n"  . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
  if ($result == 'true'){ 
        echo "<p>Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи</p>";
    }
    else{
        echo "<p>Cообщение не отправленно. Пожалуйста, попрбуйте еще раз</p>";
    }

