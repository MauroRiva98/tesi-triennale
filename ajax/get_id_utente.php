<?php
	session_start(); 	
    $mysqli = new mysqli('localhost', 'user', 'password', 'my_rivamauro');
        if ($mysqli->connect_error)
    		die("Connection failed: " . $mysqli->connect_error);
        $SQLquery = $mysqli->query("SELECT id_utente FROM registrazioni WHERE indirizzo_email = '" .$_SESSION["email"] ."'");
        $row = $SQLquery->fetch_assoc();
        if(!isset($row))                    
        	echo "0";
        else{
          	echo $row["id_utente"];
        }
  	$mysqli->close();
?>