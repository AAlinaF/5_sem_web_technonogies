<?php
    $name = htmlspecialchars($_POST["name"]);
    $ch = htmlspecialchars($_POST["ch"]);
    echo 'Твое_имя_',  $name, '_ответ был выбран?_(on_=_yes)_', $ch; 
?>