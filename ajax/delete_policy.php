<?php
	if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST["id_policy"])){
   		$mysqli = new mysqli('localhost', 'user', 'password', 'my_rivamauro');
    	if ($mysqli->connect_error)
    		die("0");
        try{
        	$mysqli->begin_transaction();
            $in = '(' . implode(',', $_POST["id_policy"]) .')';
            $query1 = $mysqli->query("DELETE FROM policy_context WHERE id_policy IN ".$in);
            $SQLquery = $mysqli->query("SELECT count(id_rule) FROM rule WHERE id_policy IN ".$in);
            $row = $SQLquery->fetch_row();
            $num_rule = $row[0];
            $SQL = $mysqli->query("SELECT id_rule FROM rule WHERE id_policy IN ".$in);
            for($i = 0; $i < $num_rule; $i++){
            	$r = $SQL->fetch_assoc();
                $id_rule = $r["id_rule"];
                $query2 = $mysqli->query("DELETE FROM target WHERE id_rule = '".$id_rule."'");
            }
            $query3 = $mysqli->query("DELETE FROM rule WHERE id_policy IN ".$in);
            $query4 = $mysqli->query("DELETE FROM policy WHERE id_policy IN ".$in);
            $mysqli->commit();
            echo "1";
        }
        catch(mysqli_sql_exception $exception){
        	$mysqli->rollback();
            echo "0";
    		throw $exception;
        }
		$mysqli->close();
    }
    else
    	echo "0";
?>