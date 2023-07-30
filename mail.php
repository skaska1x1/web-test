<?php

$inp =$_POST['login'];

switch($inp) {
    case 'логин':
        echo 'Укажите логин';
        break;
    case 'пароль':
        echo 'Укажите email';
        break;
    
    default:
}

// if (empty($_POST['login'])) {
// 	echo 'Укажите логин';
// } elseif (empty($_POST['email'])) {
// 	echo 'Укажите email';
// } else {
// 	echo 'Авторизация...';
// }