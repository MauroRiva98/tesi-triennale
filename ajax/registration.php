<?php	
        session_start();
    	if($_SERVER["REQUEST_METHOD"] == "POST"){
        	if($_POST["username"] == "" || strlen($_POST["username"]) > 20 || strpos($_POST["username"], '<') !== false || strpos($_POST["username"], '>') !== false || strpos($_POST["username"], '=') !== false || strpos($_POST["username"], '!') !== false || strpos($_POST["username"], '/') !== false)
            	echo "Error username! (MAX CARATTERI: 20)";
            else if($_POST["email"] == "" || strlen($_POST["email"]) > 35 || strpos($_POST["email"], '@') == false || strpos($_POST["email"], '.') == false)
            	echo "Error email! (MAX CARATTERI: 35)";
            else if($_POST["pass1"] == "" || strlen($_POST["pass1"]) > 30 || $_POST["pass1"] != $_POST["pass2"])
            	echo "Error password!";
            else{
            	//Controlli ok
                $password = md5($_POST["pass1"]);
                $data = date("Y-m-d");
                $mysqli = new mysqli('localhost', 'user', 'password', 'my_rivamauro');
                if ($mysqli->connect_error)
    				die("Connection failed: " . $mysqli->connect_error);               
                $SQLquery = $mysqli->prepare("INSERT INTO registrazioni (nome_utente, indirizzo_email, hash_password, data_registrazione, permessi) VALUES (?, ?, '".$password."','".$data."',1)");
                $SQLquery -> bind_param("ss", $_POST["username"], $_POST["email"]);
                $SQLquery -> execute();               
                if ($mysqli->error == "") {
    				echo "1";
				} 
				else {
    				echo "Error: ". $mysqli->error;
				}
                $SQLquery -> close();
				$mysqli->close();
            }
        }
        else{
        	echo "Error!";
        }
?>