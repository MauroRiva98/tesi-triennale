<?php
  	session_start(); 	
    $_SESSION["redirect"] = "https://rivamauro.altervista.org/tesi";
    if(!isset($_POST["email"]) || !isset($_POST["password"]))
    	echo "Login error!";
    else{
        $mysqli = new mysqli('localhost', 'user', 'password', 'my_rivamauro');
        if ($mysqli->connect_error)
    		die("Connection failed: " . $mysqli->connect_error);
        $SQLquery = $mysqli->query("SELECT * FROM registrazioni WHERE indirizzo_email = '" .$_POST["email"] ."' AND hash_password = '" .md5($_POST["password"]) ."' ");
        $row = $SQLquery->fetch_assoc();
        if(!isset($row)){                      
        	echo "0";
        	}
        else{
        	$_SESSION["utente"] = $row["nome_utente"];
            $_SESSION["email"] = $row["indirizzo_email"];
            $_SESSION["data_reg"] = $row["data_registrazione"];
            $_SESSION["permessi"] = $row["permessi"];
          	echo "1";
        }
  		$mysqli->close();
    }
 ?>