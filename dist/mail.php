<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$temp = $_POST["subscription"];

if ( isset($temp) ) {
    $name    = "Добро пожаловать в наше сообщество!";
    $body    = "Вы подписались на рассылку от нашей компании и теперь мы - одно целое! Вы не пропустите ни одной новости из нашего блога, а также будете знать о всех действующих акциях и специальных предложениях. Еще не наш клиент? Переходите по ссылке ниже, не пожалеете!!!";
    $address = $temp;
} else {
    $name    = $_POST["name"]." обратился со следующей просьбой:";
    $address = "katasonov-jenyaa@mail.ru"; 
    $service = $_POST["service"];
    $budget  = $_POST["budget"];
    $message = $_POST["message"];
    $email   = $_POST["email"];

    $body    = "$message"."<br><br>"."Email: "."$email"."<br>"."Вид услуги: "."$service"."<br>"."Бюждет: $budget";
}

$mail->isSMTP();                                    
$mail->Host = 'smtp.mail.ru';  																							
$mail->SMTPAuth = true;                               
$mail->Username = 'alexis-studio@mail.ru'; 
$mail->Password = 'TRFoO13rgui^'; 
$mail->SMTPSecure = 'ssl';                          
$mail->Port = 465; 
$mail->setFrom('alexis-studio@mail.ru'); 
$mail->addAddress($address);  
$mail->isHTML(true);                              

$mail->Subject = "$name";
$mail->Body    = '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        
		<title>HTML LETTER</title>
        
		<style type="text/css">
        @media only screen and (min-device-width: 601px) {.content {width: 600px !important;}}
		body[yahoo] .class {}
		.button {text-align: center; font-size: 18px; font-family: sans-serif; font-weight: bold;}
		.button a {color: #ffffff!important; text-decoration: none;}
		.button a:hover {text-decoration: underline;}

		@media only screen and (max-width: 550px), screen and (max-device-width: 550px) {}
		body[yahoo] .buttonwrapper {background-color: transparent!important;}
		body[yahoo] .button a {background-color: #e05443; padding: 15px 15px 13px!important; display: block!important;}
        </style>
    </head>
	
    <body yahoo bgcolor="#f6f8f1" style="margin: 0; padding: 0; min-width: 100%; background-color: #f6f8f1;">
	<table class="content" align="center" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px;">
        <tr>                         
            <td bgcolor="#c7d8a7" style="padding: 40px 30px 20px 30px;">
                <table class="col425" align="left" border="0" cellpadding="0" style="width: 100%; max-width: 400px;">
                    <tr>
                        <td height="70">
                            <table width="100%" border="0" cellspacing="0">
                                <tr>
                                    <td style="padding: 0 0 0 3px; font-size: 20px; color: #ffffff; font-family: sans-serif; letter-spacing: 5px; font-weight: bold;">
                                        Дизайн-студия
                                    </td>
                                </tr>

                                <tr>    
                                    <td class="h1" style="padding: 5px 0 0 0; font-size: 33px; line-height: 38px; font-weight: bold; color: #153643; font-family: sans-serif;">
                                        <i>
                                            <span style="color: #fc5f45;">A</span><span style="color: #616161;">lexis</span>
                                        </i>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td class="content" bgcolor="#ffffff" style="width: 100%; max-width: 600px; padding: 30px 30px 30px 30px; border-bottom: 1px solid #f2eeed;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td style="color: #153643; font-family: sans-serif; padding: 0 0 15px 0; font-size: 24px; line-height: 28px; font-weight: bold;">
                        
                                '."$name".' 
                                
                        </td>
                    </tr>
            
                    <tr>
                        <td style="color: #153643; font-family: sans-serif; font-size: 16px; line-height: 22px;">
                            <p>
                                '."$body".'
                            </p>
                
                            <table class="buttonwrapper" bgcolor="#e05443" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td class="button" height="45" width="145" style="text-align: center; font-size: 18px; font-family: sans-serif; font-weight: bold;">
                                        <a style="color: #ffffff; text-decoration: none; " href="http://localhost:3000/alexis/dist/index.html">Alexis Studio</a>
                                    </td>
                                </tr>
                            </table>                    
                        </td>    
                    </tr>                
                </table>
            </td>
        </tr>	
    </body>
</html>

';
$mail->AltBody = 'Упс! Что - то пошло не так!';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>