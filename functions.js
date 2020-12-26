function menu_click(option){
	$("#div_main").empty();
	switch(option) {
		case 1:	
			$("#div_main").append("<div id=\"div_center\">\
				<div id=\"div_form\">\
					<titolo class=\"unselectable\">COMPILE THE FORM BELOW</titolo>\
					<form id=\"form_create\">\
					  <label class=\"unselectable\" for=\"prefix\">Add a prefix (optional):</label><br>\
					  <div id=\"div_prefix\">\
						<input type=\"text\" id=\"prefix\" class=\"input_create\" onchange=\"prefix_change()\">\
					  </div>\
					  <br><br>\
					  <label class=\"unselectable\" for=\"context\">Context:</label><br>\
					  <div id=\"div_context_ext\">\
						  <div id=\"div_context_1\" name=\"div_context\" class=\"div_context\">\
							<input type=\"text\" id=\"context_1\" name=\"context\" value=\"http://www.w3.org/ns/odrl.jsonld\" class=\"input_create\">\
							<div id=\"div_buttons_context_1\" class=\"div_buttons_context\">\
								<div onclick=\"plus_click(\'context\',1,0)\" id=\"div_button_context_plus_1\" name=\"div_button_context_plus\" class=\"div_button_context_plus\">\
									<div id=\"div_img_plus_1\" name=\"div_img_plus\" class=\"div_img_plus\">\
										<plus class=\"unselectable\" style=\"cursor: pointer\">+</plus>\
									</div>\
								</div>\
								<div id=\"div_button_context_minus_1\" name=\"div_button_context_minus\" class=\"div_button_context_minus\">\
									<div onclick=\"minus_click(\'context\',1,0)\" id=\"div_img_minus_1\" name=\"div_img_minus\" class=\"div_img_minus\">\
										<minus class=\"unselectable\" style=\"cursor: pointer\">-</minus>\
									</div>\
								</div>\
							</div>\
						  </div>\
					  </div>\
					  <br><br>\
					  <div id=\"div_uid_ext\" class=\"scroll_context\">\
						<label class=\"unselectable\" for=\"uid\">UID:</label><br>\
						<input type=\"text\" id=\"uid_ext\" name=\"uid_ext\" class=\"input_create add_prefix\">\
					  </div>\
					  <br><br><br><br>\
					  <div id=\"div_type_ext\" class=\"scroll_context\">\
						<label class=\"unselectable\" for=\"type_ext\">Type:</label><br>\
						<input type=\"text\" id=\"type_ext\" name=\"type_ext\" class=\"input_create\" value=\"Set\">\
					  </div>\
					  <br><br>\
					  <div id=\"div_rule_ext\">\
						<div id=\"div_rule_1\" name=\"div_rule\" class=\"div_rule\">\
							<label class=\"unselectable label_rule\" for=\"rule_1\">RULE 1</label>\
							<div id=\"div_button_delete_rule_1\" name=\"div_button_delete_rule\" class=\"div_button_delete_rule\">\
								<div onclick=\"delete_rule_click(1)\" id=\"div_img_delete_rule_1\" name=\"div_img_delete_rule\" class=\"div_img_delete_rule\">\
									<delete class=\"unselectable\" style=\"cursor: pointer\">X</delete>\
								</div>\
							</div>\
							<br>\
							<div id=\"div_rule_type_1\" name=\"div_rule_type\" class=\"div_rule_type\">\
								<br>\
								<label class=\"unselectable\" for=\"type\">Rule type:</label><br>\
								<select name=\"rule_type\" id=\"rule_type_1\" class=\"input_create\">\
								  <option value=\"permission\">Permission</option>\
								  <option value=\"obligation\">Obligation</option>\
								  <option value=\"prohibition\">Prohibition</option>\
								</select>\
							</div>\
							<br><br><br><br>\
							<div id=\"div_rule_uid_1\" name=\"div_rule_uid\" class=\"div_rule_uid\">\
								<label class=\"unselectable\" for=\"uid\">UID:</label><br>\
								<input type=\"text\" id=\"uid_1\" name=\"uid\" class=\"input_create add_prefix\">\
							</div>\
							<br><br><br>\
							<div id=\"div_rule_assegnee_1\" name=\"div_rule_assegnee\" class=\"div_rule_assegnee\">\
								<label class=\"unselectable\" for=\"assegnee\">Assegnee:</label><br>\
								<input type=\"text\" id=\"assegnee_1\" name=\"assegnee\" class=\"input_create add_prefix\">\
							</div>\
							<label class=\"unselectable\" for=\"target\">Target:</label><br>"
							+"<div id=\"div_rule_target_ext_1\" name=\"div_rule_target_ext\" class=\"div_rule_target_ext\">"+							
								"<div id=\"div_rule_target_1_1\" name=\"div_rule_target_1\" class=\"div_rule_target\">\
									<input type=\"text\" id=\"target_1_1\" name=\"target_1\" class=\"input_create add_prefix\">\
									<div id=\"div_buttons_target_1_1\" class=\"div_buttons_target\">\
										<div onclick=\"plus_click(\'target\',1,1)\" id=\"div_button_target_plus_1_1\" name=\"div_button_target_plus\" class=\"div_button_target_plus\">\
											<div id=\"div_img_plus_1_1\" name=\"div_img_plus\" class=\"div_img_plus\">\
												<plus class=\"unselectable\" style=\"cursor: pointer\">+</plus>\
											</div>\
										</div>\
										<div id=\"div_button_target_minus_1_1\" name=\"div_button_target_minus\" class=\"div_button_target_minus\">\
											<div onclick=\"minus_click(\'target\',1,1)\" id=\"div_img_minus_1_1\" name=\"div_img_minus\" class=\"div_img_minus\">\
												<minus class=\"unselectable\" style=\"cursor: pointer\">-</minus>\
											</div>\
										</div>\
									</div>\
								</div>\
							</div>\
							<br>\
							<div id=\"div_rule_action_1\" name=\"div_rule_action\" class=\"div_rule_action scroll_target\">\
								<label class=\"unselectable\" for=\"action\">Action:</label><br>\
								<input type=\"text\" id=\"action_1\" name=\"action\" class=\"input_create\">\
							</div>\
							<div id=\"div_rule_purpose_1\" name=\"div_rule_purpose\" class=\"div_rule_purpose scroll_target\">\
								<label class=\"unselectable\" for=\"purpose\">Purpose:</label><br>\
								<input type=\"text\" id=\"purpose_1\" name=\"purpose\" class=\"input_create\">\
							</div>\
							<br>\
						</div>\
					  </div>\
					  <br>\
					  <div id=\"div_add_rule\" onclick=\"add_new_rule()\">\
						<label class=\"unselectable\" id=\"label_add_rule\">Add new rule</label>\
					  </div>\
					</form>\
				</div>");
		break;
		case 2:
			// code block
		break;
		case 3:
			// code block
		break;
	}
}

function plus_click(type,number,rule){
	switch(type) {
		case "context":
			$("#div_buttons_context_"+$('div[name ="div_context"]').length).hide();
			$(".scroll_context").css("margin-top",(($('div[name ="div_context"]').length)*35)+"px");
			$("#div_add_rule").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10) + 35) + "px");
			$("#div_context_ext").append("<div id=\"div_context_"+($('div[name ="div_context"]').length + 1)+"\" name=\"div_context\" class=\"div_context\" style=\"margin-top:"+(($('div[name ="div_context"]').length)*35)+"\px\">\
							<input type=\"text\" id=\"context_"+($('div[name ="div_context"]').length + 1)+"\" name=\"context\" class=\"input_create\">\
							<div id=\"div_buttons_context_"+($('div[name ="div_context"]').length + 1)+"\" class=\"div_buttons_context\">\
								<div onclick=\"plus_click(\'context\',"+($('div[name ="div_context"]').length + 1)+",0)\" id=\"div_button_context_plus_"+($('div[name ="div_context"]').length + 1)+"\" name=\"div_button_context_plus\" class=\"div_button_context_plus\">\
									<div id=\"div_img_plus_"+($('div[name ="div_context"]').length + 1)+"\" name=\"div_img_plus\" class=\"div_img_plus\">\
										<plus class=\"unselectable\" style=\"cursor: pointer\">+</plus>\
									</div>\
								</div>\
								<div id=\"div_button_context_minus_"+($('div[name ="div_context"]').length + 1)+"\" name=\"div_button_context_minus\" class=\"div_button_context_minus\">\
									<div onclick=\"minus_click(\'context\',"+($('div[name ="div_context"]').length + 1)+",0)\" id=\"div_img_minus_"+($('div[name ="div_context"]').length + 1)+"\" name=\"div_img_minus\" class=\"div_img_minus\">\
										<minus class=\"unselectable\" style=\"cursor: pointer\">-</minus>\
									</div>\
								</div>\
							</div>\
						  </div>");
		break;
		case "target":
			var string_id = "div[name =\"div_rule_target_"+rule+"\"]";
			$("#div_buttons_target_"+rule+"_"+$(string_id).length).hide();			
			$("#div_rule_action_"+rule).css("top",(($(string_id).length)*41)+"px");
			$("#div_rule_purpose_"+rule).css("top",(($(string_id).length)*41)+"px");
			$("#div_rule_"+rule).css("height",($("#div_rule_"+rule).height() +41)+"px");
			$("#div_add_rule").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10) + 41) + "px");
			for (var i = rule_number; i > rule; i--) {				
				$("#div_rule_"+i).css("margin-top",(parseInt($("#div_rule_"+i).css("margin-top"),10) + 41) + "px");
			}
			$("#div_rule_target_ext_"+rule).append("<div id=\"div_rule_target_"+rule+"_"+(($(string_id).length)+ 1)+"\" name=\"div_rule_target_"+rule+"\" class=\"div_rule_target\" style=\"margin-top:20px\">\
									<input type=\"text\" id=\"target_"+rule+"_"+(($(string_id).length)+ 1)+"\" name=\"target_"+rule+"\" class=\"input_create add_prefix\" value=\""+$("#prefix").val()+"\">\
									<div id=\"div_buttons_target_"+rule+"_"+(($(string_id).length)+ 1)+"\" class=\"div_buttons_target\" style=\"top:"+(($(string_id).length)*41)+"px\">\
										<div onclick=\"plus_click(\'target\',"+(($(string_id).length)+ 1)+","+rule+")\" id=\"div_button_target_plus_"+rule+"_"+(($(string_id).length)+ 1)+"\" name=\"div_button_target_plus\" class=\"div_button_target_plus\">\
											<div id=\"div_img_plus_"+rule+"_"+(($(string_id).length)+ 1)+"\" name=\"div_img_plus\" class=\"div_img_plus\">\
												<plus class=\"unselectable\" style=\"cursor: pointer\">+</plus>\
											</div>\
										</div>\
										<div id=\"div_button_target_minus_"+rule+"_"+(($(string_id).length)+ 1)+"\" name=\"div_button_target_minus\" class=\"div_button_target_minus\">\
											<div onclick=\"minus_click(\'target\',"+(($(string_id).length)+ 1)+","+rule+")\" id=\"div_img_minus_"+rule+"_"+(($(string_id).length)+ 1)+"\" name=\"div_img_minus\" class=\"div_img_minus\">\
												<minus class=\"unselectable\" style=\"cursor: pointer\">-</minus>\
											</div>\
										</div>\
									</div>\
								</div>");
		break;
	}
}

function minus_click(type,number,rule){		
	switch(type) {
		case "context":
			if($('div[name ="div_context"]').length > 1){
				$("#div_context_"+$('div[name ="div_context"]').length).remove();
				$("#div_buttons_context_"+($('div[name ="div_context"]').length)).show();
				$(".scroll_context").css("margin-top",(($('div[name ="div_context"]').length - 1)*35)+"px");
				$("#div_add_rule").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10) - 35) + "px");
			}
		break;
		case "target":
			var string_id = "div[name =\"div_rule_target_"+rule+"\"]";
			if($(string_id).length > 1){
				$("#div_rule_target_"+rule+"_"+$(string_id).length).remove();				
				$("#div_buttons_target_"+rule+"_"+($(string_id).length)).show();
				$("#div_rule_action_"+rule).css("top",(($(string_id).length - 1)*41)+"px");
				$("#div_rule_purpose_"+rule).css("top",(($(string_id).length - 1)*41)+"px");
				$("#div_rule_"+rule).css("height",($("#div_rule_"+rule).height() -41)+"px");
				$("#div_add_rule").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10) - 41) + "px");
				for (var i = rule_number; i > rule; i--) {				
					$("#div_rule_"+i).css("margin-top",(parseInt($("#div_rule_"+i).css("margin-top"),10) - 41) + "px");
				}
			}
		break;
	}
}

var rule_number = 1;

function add_new_rule(){
	var len = $('div[name ="div_rule"]').length;
	var len_target = $(".div_rule_target").length;
	var len_context = $('div[name ="div_context"]').length;
	rule_number++;
	$("#div_rule_ext").append("<div id=\"div_rule_"+rule_number+"\" name=\"div_rule\" class=\"div_rule\">\
							<label class=\"unselectable label_rule\" for=\"rule_"+rule_number+"\">RULE "+rule_number+"</label>\
							<div id=\"div_button_delete_rule_"+rule_number+"\" name=\"div_button_delete_rule\" class=\"div_button_delete_rule\">\
								<div onclick=\"delete_rule_click("+rule_number+")\" id=\"div_img_delete_rule_"+rule_number+"\" name=\"div_img_delete_rule\" class=\"div_img_delete_rule\">\
									<delete class=\"unselectable\" style=\"cursor: pointer\">X</delete>\
								</div>\
							</div>\
							<br>\
							<div id=\"div_rule_type_"+rule_number+"\" name=\"div_rule_type\" class=\"div_rule_type\">\
								<br>\
								<label class=\"unselectable\" for=\"type\">Rule type:</label><br>\
								<select name=\"rule_type\" id=\"rule_type_"+rule_number+"\" class=\"input_create\">\
								  <option value=\"permission\">Permission</option>\
								  <option value=\"obligation\">Obligation</option>\
								  <option value=\"prohibition\">Prohibition</option>\
								</select>\
							</div>\
							<br><br><br><br>\
							<div id=\"div_rule_uid_"+rule_number+"\" name=\"div_rule_uid\" class=\"div_rule_uid\">\
								<label class=\"unselectable\" for=\"uid\">UID:</label><br>\
								<input type=\"text\" id=\"uid_"+rule_number+"\" name=\"uid\" class=\"input_create add_prefix\" value=\""+$("#prefix").val()+"\">\
							</div>\
							<br><br><br>\
							<div id=\"div_rule_assegnee_"+rule_number+"\" name=\"div_rule_assegnee\" class=\"div_rule_assegnee\">\
								<label class=\"unselectable\" for=\"assegnee\">Assegnee:</label><br>\
								<input type=\"text\" id=\"assegnee_"+rule_number+"\" name=\"assegnee\" class=\"input_create add_prefix\" value=\""+$("#prefix").val()+"\">\
							</div>\
							<label class=\"unselectable\" for=\"target\">Target:</label><br>\
							<div id=\"div_rule_target_ext_"+rule_number+"\" name=\"div_rule_target_ext\" class=\"div_rule_target_ext\">\n"+								
								"<div id=\"div_rule_target_"+rule_number+"_1\" name=\"div_rule_target_"+rule_number+"\" class=\"div_rule_target\">\
									<input type=\"text\" id=\"target_"+rule_number+"_1\" name=\"target_"+rule_number+"\" class=\"input_create add_prefix\" value=\""+$("#prefix").val()+"\">\
									<div id=\"div_buttons_target_"+rule_number+"_1\" class=\"div_buttons_target\">\
										<div onclick=\"plus_click(\'target\',1,"+rule_number+")\" id=\"div_button_target_plus_"+rule_number+"_1\" name=\"div_button_target_plus\" class=\"div_button_target_plus\">\
											<div id=\"div_img_plus_"+rule_number+"_1\" name=\"div_img_plus\" class=\"div_img_plus\">\
												<plus class=\"unselectable\" style=\"cursor: pointer\">+</plus>\
											</div>\
										</div>\
										<div id=\"div_button_target_minus_"+rule_number+"_1\" name=\"div_button_target_minus\" class=\"div_button_target_minus\">\
											<div onclick=\"minus_click(\'target\',1,"+rule_number+")\" id=\"div_img_minus_"+rule_number+"_1\" name=\"div_img_minus\" class=\"div_img_minus\">\
												<minus class=\"unselectable\" style=\"cursor: pointer\">-</minus>\
											</div>\
										</div>\
									</div>\
								</div>\
							</div>\
							<br>\
							<div id=\"div_rule_action_"+rule_number+"\" name=\"div_rule_action\" class=\"div_rule_action scroll_target\">\
								<label class=\"unselectable\" for=\"action\">Action:</label><br>\
								<input type=\"text\" id=\"action_"+rule_number+"\" name=\"action\" class=\"input_create\">\
							</div>\
							<div id=\"div_rule_purpose_"+rule_number+"\" name=\"div_rule_purpose\" class=\"div_rule_purpose scroll_target\">\
								<label class=\"unselectable\" for=\"purpose\">Purpose:</label><br>\
								<input type=\"text\" id=\"purpose_"+rule_number+"\" name=\"purpose\" class=\"input_create\">\
							</div>\
							<br>\
						</div>");	
	$("#div_rule_"+rule_number).css("margin-top",((len * 385) + len_target * 41)+"px");
	$("#div_add_rule").css("margin-top",((len * 385) + (len_target * 41) + ((len_context - 1) * 35))+"px");
}

function delete_rule_click(rule){
	if($('div[name ="div_rule"]').length > 1){
		var height = parseInt($("#div_rule_"+rule).css("height"),10);
		$("#div_rule_"+rule).remove();
		$("#div_add_rule").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10) - (height + 47)) + "px");
		for (var i = rule_number; i > rule; i--) {				
			$("#div_rule_"+i).css("margin-top",(parseInt($("#div_rule_"+i).css("margin-top"),10) - (height + 47)) + "px");
		}
	}
}

function prefix_change(){
	var prefix = $("#prefix").val();
	$(".add_prefix").val(prefix);
}