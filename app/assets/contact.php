<?
if((isset($_POST['target'])&&$_POST['target']!="")&&(isset($_POST['domain'])&&$_POST['domain']!="")){
        $to = 'valeraerohin97@mail.ru';
        $subject = 'New selection';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Domain: '.$_POST['domain'].'</p>
                        <p>Selection: '.$_POST['target'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: rapp@example.com\r\n";
        mail($to, $subject, $message, $headers);
}
?>
