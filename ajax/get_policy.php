<?php
	class rule {
    	public $uid;
        public $assignee;
        public $action;
        public $purpose;
        public $target;
        
        function __construct($uid, $assignee, $action, $purpose) {
          $this->uid = $uid;
          $this->assignee = $assignee;
          $this->action = $action;
          $this->purpose = $purpose;
          $this->target = array();
        }
        function add_target($t) {
          array_push($this->target, $t);
        }
        function set_target($t) {
          $this->target = $t;
        }
    }
    
	if(!isset($_POST["id_policy"]))
    	die(FALSE);
	$mysqli = new mysqli('localhost', 'user', 'password', 'my_rivamauro');
        if ($mysqli->connect_error)
    		die(FALSE);
            
        $query = $mysqli->query("SELECT COUNT(url) FROM context, policy_context WHERE id_policy = '" .$_POST["id_policy"] ."' AND policy_context.id_context = context.id_context");
        $r = $query->fetch_row();
        $num_context = $r[0];
        $SQLquery = $mysqli->query("SELECT url FROM context, policy_context WHERE id_policy = '" .$_POST["id_policy"] ."' AND policy_context.id_context = context.id_context");
        $context = array();
        for($i = 0; $i < $num_context; $i++){
        	$row = $SQLquery->fetch_assoc();
            array_push($context, $row["url"]);
        }
        
        $query = $mysqli->query("SELECT uid, type FROM policy WHERE id_policy = '".$_POST["id_policy"]."'");
        $row = $query->fetch_assoc();
        $uid = $row["uid"];
        $type = $row["type"];
        
        $SQLquery = $mysqli->query("SELECT COUNT(id_rule) FROM rule WHERE id_policy = '".$_POST["id_policy"]."'");
        $r = $SQLquery->fetch_row();
        $num_rule = $r[0];
        $query = $mysqli->query("SELECT id_rule, type, uid, assignee, action, purpose FROM rule WHERE id_policy = '".$_POST["id_policy"]."'");
        $permission = array();
        $obligation = array();
        $prohibition = array();
        for($i = 0; $i < $num_rule; $i++){
        	$row = $query->fetch_assoc();
            $rule_type = $row["type"];
            $rule_uid = $row["uid"];
            $assignee = $row["assignee"];
            $action = $row["action"];
            $purpose = $row["purpose"];
            $SQLquery = $mysqli->query("SELECT count(id_target) FROM target WHERE id_rule = '".$row["id_rule"]."'");
            $r = $SQLquery->fetch_row();
            $num_target = $r[0];
            $SQL = $mysqli->query("SELECT nome FROM target WHERE id_rule = '".$row["id_rule"]."'");
            $rule = new rule($rule_uid, $assignee, $action, $purpose);
            for($j = 0; $j < $num_target; $j++){
            	$rt = $SQL->fetch_assoc();
                $rule->add_target($rt["nome"]);
            }
            if($rule_type == "permission")
            	array_push($permission, $rule);
            else if($rule_type == "obligation")
            	array_push($obligation, $rule);
            else if($rule_type == "prohibition")
            	array_push($prohibition, $rule);
        }
  	$mysqli->close();
    $policy = ['uid' => $uid, '@type' => $type, '@context' => $context, 'permission' => $permission, 'obligation' => $obligation, 'prohibition' => $prohibition];
    header('Content-type: application/json');
	echo json_encode($policy);
?>