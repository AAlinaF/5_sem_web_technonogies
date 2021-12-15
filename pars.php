<?php
    $infa = json_decode(file_get_contents('php://input'));
    $infa->chto_to = "s_chem_to";
    $infa = json_encode($infa);
    echo $infa;
?>