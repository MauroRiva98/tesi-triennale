<?php
	if(!isset($_POST["id_utente"]))
    	echo "0";
    else{
        $mysqli = new mysqli('localhost', 'user', 'password', 'my_rivamauro');
        if ($mysqli->connect_error)
    		die("0");
        $query = $mysqli->query("SELECT COUNT(uid) FROM policy WHERE id_utente = '".$_POST["id_utente"]."'");
        $num = $query->fetch_row();
        $SQLquery = $mysqli->query("SELECT uid, nome_file, ultima_modifica, id_policy FROM policy WHERE id_utente = '".$_POST["id_utente"]."' ORDER BY ultima_modifica DESC");       
        if($num > 0){                      
        	$string = "";
            for($i = 0; $i < $num[0]; $i++){
            	$row = $SQLquery->fetch_assoc();
                $uid = $row["uid"];
                $nome_file = $row["nome_file"];
               	$ultima_modifica = $row["ultima_modifica"];
                $id_policy = $row["id_policy"];            
            	$string = $string."<tr id=\"row_".$id_policy."\">\
                                    <td style=\"cursor: help\" onclick=\"show_policy_cloud(".$id_policy.")\">".$uid."</td>\
                                    <td id=\"row_file_name_".$id_policy."\" style=\"cursor: help\" onclick=\"show_policy_cloud(".$id_policy.")\">".$nome_file."</td>\
                                    <td style=\"cursor: help\" onclick=\"show_policy_cloud(".$id_policy.")\">".$ultima_modifica."</td>\
                                    <td class=\"div_selector\" name=\"div_selector\" id=\"div_selector_".$id_policy."\" onclick=\"selector_click(".$id_policy.")\"></td>\
                                  </tr>";
            }
            echo $string;
        }
        else
        	echo "";
     }
?>