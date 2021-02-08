<?php
	session_start();
	if(isset($_SESSION["utente"]) && isset($_SESSION["email"]) && isset($_SESSION["data_reg"]) && isset($_SESSION["permessi"]))
		echo "1";  
    else
		echo "0";
?>