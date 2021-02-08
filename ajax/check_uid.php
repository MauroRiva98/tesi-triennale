<?php
	if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST["id_policy"]) && isset($_POST["uid"])){
   		$mysqli = new mysqli('localhost', 'user', 'password', 'my_rivamauro');
    	if ($mysqli->connect_error)
    		die("0");
        $query = $mysqli->query("SELECT COUNT(id_policy) FROM policy WHERE id_policy <> '".$_POST["id_policy"]."' AND uid = '".$_POST["uid"]."'");
        $row = $query->fetch_row();
        $num = $row[0];
        if($num == 0)
        	echo "1";
        else
        	echo "-1";
        $mysqli->close();
	}
?>