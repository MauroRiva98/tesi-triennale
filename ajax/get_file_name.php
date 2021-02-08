<?php
	if(isset($_POST["id_policy"])){
      $mysqli = new mysqli('localhost', 'user', 'password', 'my_rivamauro');
          if ($mysqli->connect_error)
              die("Connection failed: " . $mysqli->connect_error);
          $SQLquery = $mysqli->query("SELECT nome_file FROM policy WHERE id_policy = '" .$_POST["id_policy"] ."'");
          $row = $SQLquery->fetch_assoc();
          echo $row["nome_file"];
      $mysqli->close();
    }
?>