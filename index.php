<?php 
	session_start(); 
?>
<script src="functions.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<html>
	<head>
		<title>Policy Editor</title>
		<link rel="icon" href="images/icona.ico"/>
		<link rel="stylesheet" href="style.css">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body id="body">
		<div id="div_left_menu" class="unselectable">
			<div id="div_logo">
				<img id="logo" src="images/logo.png" alt="Logo">
			</div>
			<div id="div_menu_list">
				<menu onclick="menu_click(1)">CREATE NEW FILE</menu>
				<menu onclick="menu_click(2)">MODIFY</menu>
				<menu onclick="menu_click(3)">VIEW</menu>
				<menu onclick="menu_click(4)">CLOUD</menu>
                <?php
                	$_SESSION["redirect"] = "https://rivamauro.altervista.org/film";
                	if(isset($_SESSION["utente"]) && isset($_SESSION["email"]) && isset($_SESSION["data_reg"]) && isset($_SESSION["permessi"]))
                    	echo "<menu id=\"menu_login_logout\" onclick=\"menu_click(6)\">LOGOUT</menu>";  
                    else
                    	echo "<menu id=\"menu_login_logout\" onclick=\"menu_click(5)\">LOGIN</menu>";                        
                ?>
			</div>
		</div>
		<div id="div_main">
			<div id="div_center">
				<div id="div_form">
					<titolo class="unselectable">COMPILE THE FORM BELOW</titolo>
					<form id="form_create">
					  <label class="unselectable" for="prefix">Add a prefix (optional):</label><br>
					  <div id="div_prefix">
						<input type="text" id="prefix" class="input_create" onchange="prefix_change()">
					  </div>
					  <br><br>
					  <label class="unselectable" for="context">Context:</label><br>
					  <div id="div_context_ext">
						  <div id="div_context_1" name="div_context" class="div_context">
							<input type="text" id="context_1" name="context" value="http://www.w3.org/ns/odrl.jsonld" class="input_create">
							<div id="div_buttons_context_1" class="div_buttons_context">
								<div onclick="plus_click('context',1,0)" id="div_button_context_plus_1" name="div_button_context_plus" class="div_button_context_plus">
									<div id="div_img_plus_1" name="div_img_plus" class="div_img_plus">
										<plus class="unselectable" style="cursor: pointer">+</plus>
									</div>
								</div>
								<div id="div_button_context_minus_1" name="div_button_context_minus" class="div_button_context_minus">
									<div onclick="minus_click('context',1,0)" id="div_img_minus_1" name="div_img_minus" class="div_img_minus">
										<minus class="unselectable" style="cursor: pointer">-</minus>
									</div>
								</div>
							</div>
						  </div>
					  </div>
					  <br><br>
					  <div id="div_uid_ext" class="scroll_context">
						<label class="unselectable" for="uid">UID:</label><br>
						<input type="text" id="uid_ext" name="uid_ext" class="input_create add_prefix">
					  </div>
					  <br><br><br><br>
					  <div id="div_type_ext" class="scroll_context">
						<label class="unselectable" for="type_ext">Type:</label><br>
						<input type="text" id="type_ext" name="type_ext" class="input_create" value="Set">
					  </div>
					  <br><br>
					  <div id="div_rule_ext">
						<div id="div_rule_1" name="div_rule" class="div_rule">
							<label class="unselectable label_rule" for="rule_1">RULE 1</label>
							<div id="div_button_delete_rule_1" name="div_button_delete_rule" class="div_button_delete_rule">
								<div onclick="delete_rule_click(1)" id="div_img_delete_rule_1" name="div_img_delete_rule" class="div_img_delete_rule">
									<delete class="unselectable" style="cursor: pointer">X</delete>
								</div>
							</div>
							<br>
							<div id="div_rule_type_1" name="div_rule_type" class="div_rule_type">
								<br>
								<label class="unselectable" for="type">Rule type:</label><br>
								<select name="rule_type" id="rule_type_1" class="input_create">
								  <option value="permission">Permission</option>
								  <option value="obligation">Obligation</option>
								  <option value="prohibition">Prohibition</option>
								</select>
							</div>
							<br><br><br><br>
							<div id="div_rule_uid_1" name="div_rule_uid" class="div_rule_uid">
								<label class="unselectable" for="uid">UID:</label><br>
								<input type="text" id="uid_1" name="uid" class="input_create add_prefix">
							</div>
							<br><br><br>
							<div id="div_rule_assegnee_1" name="div_rule_assegnee" class="div_rule_assegnee">
								<label class="unselectable" for="assegnee">Assignee:</label><br>
								<input type="text" id="assegnee_1" name="assegnee" class="input_create add_prefix">
							</div>
							<label class="unselectable" for="target">Target:</label><br>
							<div id="div_rule_target_ext_1" name="div_rule_target_ext" class="div_rule_target_ext">								
								<div id="div_rule_target_1_1" name="div_rule_target_1" class="div_rule_target">
									<input type="text" id="target_1_1" name="target_1" class="input_create add_prefix">
									<div id="div_buttons_target_1_1" class="div_buttons_target">
										<div onclick="plus_click('target',1,1)" id="div_button_target_plus_1_1" name="div_button_target_plus" class="div_button_target_plus">
											<div id="div_img_plus_1_1" name="div_img_plus" class="div_img_plus">
												<plus class="unselectable" style="cursor: pointer">+</plus>
											</div>
										</div>
										<div id="div_button_target_minus_1_1" name="div_button_target_minus" class="div_button_target_minus">
											<div onclick="minus_click('target',1,1)" id="div_img_minus_1_1" name="div_img_minus" class="div_img_minus">
												<minus class="unselectable" style="cursor: pointer">-</minus>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br>
							<div id="div_rule_action_1" name="div_rule_action" class="div_rule_action scroll_target">
								<label class="unselectable" for="action">Action:</label><br>
								<input type="text" id="action_1" name="action" class="input_create">
							</div>
							<div id="div_rule_purpose_1" name="div_rule_purpose" class="div_rule_purpose scroll_target">
								<label class="unselectable" for="purpose">Purpose:</label><br>
								<input type="text" id="purpose_1" name="purpose" class="input_create">
							</div>
							<br>
						</div>
					  </div>
					  <br>
					  <div id="div_add_rule" class="scroll_bottom" onclick="add_new_rule()">
						<label class="unselectable" id="label_add_rule">Add new rule</label>
					  </div>
					  <div id="div_show" name="div_show" class="scroll_bottom" onclick="show_policy()">
						<label class="unselectable" id="label_div_show">Show policy</label>
					  </div>
					  <div id="div_download">
						<label class="unselectable">Nome file:</label><br>
						<input type="text" id="file_name" name="file_name">
						<label class="unselectable">.jsonld</label>
						<div id="div_download_button" onclick="start_download()">
							<label class="unselectable" id="label_div_download_button">Download</label>
						</div>
                        <div id="div_save_button" onclick="start_save()">
							<label class="unselectable" id="label_div_save_button">Save</label>
						</div>
					  </div>
					</form>
				</div>
			</div>
			<div id="div_right">
				<div id="div_view_main">
					<div id="div_top_right">
						<titolo class="unselectable">VIEW</titolo>
						<div id="div_select_view_mode">
							<label class="unselectable" id="label_select_view_mode">Select view mode:</label>
							<select id="view_mode" onchange="change_view_mode(this.value)">
								<option value="text">Text</option>
								<option value="grafic">Grafic</option>
							</select>
						</div>
					</div>
					<div id="div_view_scroll">					
					</div>
				</div>
			</div>
		</div>
	</body>
</html>