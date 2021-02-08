<?php
	if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["id_utente"])){
        $data = date("Y-m-d");
        $mysqli = new mysqli('localhost', 'user', 'password', 'my_rivamauro');
        if ($mysqli->connect_error)
    		die("Connection failed: " . $mysqli->connect_error);
        try{
        	$mysqli->begin_transaction();
            $SQLquery = $mysqli->query("INSERT INTO policy (id_utente, nome_file, uid, type, ultima_modifica) VALUES ('".$_POST['id_utente']."', '".$_POST['file_name']."', '".$_POST['policy'][0]['uid']."', '".$_POST['policy'][0]['@type']."', '".$data."')");
            if ($SQLquery == TRUE){
            	$result = $mysqli->query("SELECT id_policy FROM policy WHERE uid = '".$_POST['policy'][0]['uid']."'");
                $r1 = $result -> fetch_assoc();
                $id_policy = $r1["id_policy"];
                for ($i = 0; $i < count($_POST["policy"][0]["@context"]); $i++) {
                	$var = $_POST["policy"][0]["@context"][$i];
                	if(count($_POST["policy"][0]["@context"]) == 1 && strlen($_POST["policy"][0]["@context"][0]) == 1)
                    	$var = $_POST["policy"][0]["@context"];
                    else if(count($_POST["policy"][0]["@context"]) == 1 && strlen($_POST["policy"][0]["@context"][0]) > 1)
                    	$var = $_POST["policy"][0]["@context"][0];
                    $SQLquery = $mysqli->query("SELECT id_context FROM context WHERE url = '".$var."'");
                    $row = $SQLquery -> fetch_assoc();
                    $id_context = $row["id_context"];                   
                    if(!isset($row)){
                    	$result1 = $mysqli->query("INSERT INTO context (url) VALUES ('".$var."')");
                        $result2 = $mysqli->query("SELECT id_context FROM context WHERE url = '".$var."'");
                    	$r2 = $result2 -> fetch_assoc(); 
                        $id_context = $r2["id_context"];
                    }                                     
                    $result3 = $mysqli->query("INSERT INTO policy_context (id_policy, id_context) VALUES ('".$id_policy."', '".$id_context."')");
                }
                for ($j = 0; $j < count($_POST["policy"][0]["permission"]); $j++) {
                	$var = $_POST["policy"][0]["permission"][$j];
                    $SQLquery = $mysqli->query("INSERT INTO rule (id_policy, type, uid, assignee, action, purpose) VALUES ('".$id_policy."', 'permission', '".$var["uid"]."', '".$var["assignee"]."', '".$var["action"]."', '".$var["purpose"]."')");
                    $query = $mysqli->query("SELECT id_rule FROM rule WHERE id_rule = @@Identity");
                    $row = $query -> fetch_assoc();
                    $id_rule = $row["id_rule"];
                    for($i = 0; $i < count($var["target"]); $i++){
                    	$tar = $var["target"][$i];
                    	if(count($var["target"]) == 1 && strlen($var["target"][0]) == 1)
                        	$tar = $var["target"];
                        else if(count($var["target"]) == 1 && strlen($var["target"][0]) > 1)
                        	$tar = $var["target"][0];
                        $query = $mysqli->query("INSERT INTO target (id_rule, nome) VALUES ('".$id_rule."', '".$tar."')");
                    }
                }
                for ($j = 0; $j < count($_POST["policy"][0]["obligation"]); $j++) {
                	$var = $_POST["policy"][0]["obligation"][$j];
                    $SQLquery = $mysqli->query("INSERT INTO rule (id_policy, type, uid, assignee, action, purpose) VALUES ('".$id_policy."', 'obligation', '".$var["uid"]."', '".$var["assignee"]."', '".$var["action"]."', '".$var["purpose"]."')");
                    $query = $mysqli->query("SELECT id_rule FROM rule WHERE id_rule = @@Identity");
                    $row = $query -> fetch_assoc();
                    $id_rule = $row["id_rule"];
                    for($i = 0; $i < count($var["target"]); $i++){
                    	$tar = $var["target"][$i];
                    	if(count($var["target"]) == 1 && strlen($var["target"][0]) == 1)
                        	$tar = $var["target"];
                        else if(count($var["target"]) == 1 && strlen($var["target"][0]) > 1)
                        	$tar = $var["target"][0];                    
                        $query = $mysqli->query("INSERT INTO target (id_rule, nome) VALUES ('".$id_rule."', '".$tar."')");
                    }
                }
                for ($j = 0; $j < count($_POST["policy"][0]["prohibition"]); $j++) {
                	$var = $_POST["policy"][0]["prohibition"][$j];
                    $SQLquery = $mysqli->query("INSERT INTO rule (id_policy, type, uid, assignee, action, purpose) VALUES ('".$id_policy."', 'prohibition', '".$var["uid"]."', '".$var["assignee"]."', '".$var["action"]."', '".$var["purpose"]."')");
                    $query = $mysqli->query("SELECT id_rule FROM rule WHERE id_rule = @@Identity");
                    $row = $query -> fetch_assoc();
                    $id_rule = $row["id_rule"];
                    for($i = 0; $i < count($var["target"]); $i++){
                    	$tar = $var["target"][$i];
                    	if(count($var["target"]) == 1 && strlen($var["target"][0]) == 1)
                        	$tar = $var["target"];
                        else if(count($var["target"]) == 1 && strlen($var["target"][0]) > 1)
                        	$tar = $var["target"][0];                        
                        $query = $mysqli->query("INSERT INTO target (id_rule, nome) VALUES ('".$id_rule."', '".$tar."')");
                    }
                }
                echo "1";
            }
            else
                echo "Error: ". $mysqli->error;
            $mysqli->commit();
        }
        catch(mysqli_sql_exception $exception){
        	$mysqli->rollback();
            echo "0";
    		throw $exception;
        }
		$mysqli->close();
    }
    else
    	echo "Error!";
?>