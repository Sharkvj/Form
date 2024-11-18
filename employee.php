<?php

$link = mysqkli_connect('localhost','root','','company');
if (!$link){
die('Connetion Erro'.mysqli_connect_error());
}
else{
    echo('Connection  Sucess');
}




?>