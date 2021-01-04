var string_main_page = "<div id=\"div_center\">\
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
								<label class=\"unselectable\" for=\"assegnee\">Assignee:</label><br>\
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
					  <div id=\"div_add_rule\" class=\"scroll_bottom\" onclick=\"add_new_rule()\">\
						<label class=\"unselectable\" id=\"label_add_rule\">Add new rule</label>\
					  </div>\
					  <div id=\"div_show\" name=\"div_show\" class=\"scroll_bottom\" onclick=\"show_policy()\">\
						<label class=\"unselectable\" id=\"label_div_show\">Show policy</label>\
					  </div>\
					  <div id=\"div_download\">\
						<label class=\"unselectable\">Nome file:</label><br>\
						<input type=\"text\" id=\"file_name\" name=\"file_name\">\
						<label class=\"unselectable\">.jsonld</label>\
						<div id=\"div_download_button\" onclick=\"start_download()\">\
							<label class=\"unselectable\" id=\"label_div_download_button\">Download</label>\
						</div>\
					  </div>\
					</form>\
				</div>";
var string_main_page_2 = "<div id=\"div_right\">\
				<div id=\"div_view_main\">\
					<div id=\"div_top_right\">\
						<titolo class=\"unselectable\">VIEW</titolo>\
						<div id=\"div_select_view_mode\">\
							<label class=\"unselectable\" id=\"label_select_view_mode\">Select view mode:</label>\
							<select id=\"view_mode\" onchange=\"change_view_mode(this.value)\">\
								<option value=\"text\">Text</option>\
								<option value=\"grafic\">Grafic</option>\
							</select>\
						</div>\
					</div>"
					+"<div id=\"div_view_scroll\">"				
					+"</div>\
				</div>\
			</div>";
			
function menu_click(option){
	switch(option) {
		case 1: //Create new file
			$("#div_main").empty();
			$("#div_main").append(string_main_page);
			$("#div_main").append(string_main_page_2);
			$("#div_form").css("overflow-y", "auto");
			policy_showed[0] = false;
			rule_number = 1;
		break;
		case 2: //Modify
			rule_number = 1;
			open_upload_div("modify");
		break;
		case 3: //View
			open_upload_div("view");
			$("#div_form").css("overflow-y", "hidden");
		break;
	}
}

function show_alert(text_alert){    	
    $("#div_main").append("<div class=\"alert unselectable\"> <span class=\"closebtn\" onclick=\"close_alert(this.parentElement)\">&times;</span>" + text_alert +" </div>");
    }

function close_alert(element_div){
	$(element_div).remove();
}

function plus_click(type,number,rule){
	switch(type) {
		case "context":
			$("#div_buttons_context_"+$('div[name ="div_context"]').length).hide();
			$(".scroll_context").css("margin-top",(($('div[name ="div_context"]').length)*35)+"px");
			$(".scroll_bottom").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10) + 35) + "px");
			$("#div_download").css("margin-top",(parseInt($("#div_download").css("margin-top"),10) + 35) + "px");
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
			$(".scroll_bottom").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10) + 41) + "px");
			$("#div_download").css("margin-top",(parseInt($("#div_download").css("margin-top"),10) + 41) + "px");
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
				$(".scroll_bottom").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10) - 35) + "px");
				$("#div_download").css("margin-top",(parseInt($("#div_download").css("margin-top"),10) - 35) + "px");
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
				$(".scroll_bottom").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10) - 41) + "px");
				$("#div_download").css("margin-top",(parseInt($("#div_download").css("margin-top"),10) - 41) + "px");
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
	$(".scroll_bottom").css("margin-top",((len * 385) + (len_target * 41) + ((len_context - 1) * 35))+"px");
	$("#div_download").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10)) + "px");
}

function delete_rule_click(rule){
	if($('div[name ="div_rule"]').length > 1){
		var height = parseInt($("#div_rule_"+rule).css("height"),10);
		$("#div_rule_"+rule).remove();
		$(".scroll_bottom").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10) - (height + 47)) + "px");
		$("#div_download").css("margin-top",(parseInt($("#div_add_rule").css("margin-top"),10)) + "px");
		for (var i = rule_number; i > rule; i--) {				
			$("#div_rule_"+i).css("margin-top",(parseInt($("#div_rule_"+i).css("margin-top"),10) - (height + 47)) + "px");
		}
	}
}

function prefix_change(){
	var prefix = $("#prefix").val();
	$(".add_prefix").val(prefix);
}

function check_form(){
	var valid = true;
	if($("#uid_ext").val() == "" || $("#type_ext").val() == ""){
		valid = false;
		return valid;
	}
	for (var i = $('div[name ="div_context"]').length; i > 0; i--) {
		if($("#context_"+i).val() == ""){
			valid = false;
			return valid;
		}
	}
	for (var i = rule_number; i > 0; i--) {
		if($("#uid_"+i).val() == "" || $("#assegnee_"+i).val() == "" || $("#action_"+i).val() == "" || $("#purpose_"+i).val() == ""){
			valid = false;
			return valid;
		}	
		for (var j = $("div[name =\"div_rule_target_"+i+"\"]").length; j > 0; j--) {
			if($("#target_"+i+"_"+j).val() == ""){
				valid = false;
				return valid;
			}
		}
	}
	return valid;
}

function get_policy(){
	var rules = [];
	for (var i = 1; i <= rule_number; i++) {
		if($("#div_rule_"+i).html() != ""){
			var target = [];
			for(var j = 1; j <= $("div[name =\"div_rule_target_"+i+"\"]").length; j++){
				var t = $("#target_"+i+"_"+j).val();
				target.push(t);
			}
			var r = {
				"type": $("#rule_type_"+i).val(),
				"uid": $("#uid_"+i).val(),
				"assignee": $("#assegnee_"+i).val(),
				"target": target,
				"action": $("#action_"+i).val(),
				"purpose": $("#purpose_"+i).val()
			}
			rules.push(r);
		}
	}
	var context = [];
	for(var k = 1; k <= $("div[name =\"div_context\"]").length; k++){
		var c = $("#context_"+k).val();
		context.push(c);
	}
	var permission = [];
	var prohibition = [];
	var obligation = [];
	
	for(var i = 0; i < rules.length; i++) {
		switch(rules[i]["type"]) {
			case "permission":
				var per = {
					"uid": rules[i]["uid"],
					"assignee": rules[i]["assignee"],
					"target": rules[i]["target"],
					"action": rules[i]["action"],
					"purpose": rules[i]["purpose"]
				};
				permission.push(per);
			break;
			case "prohibition":
				var proh = {
					"uid": rules[i]["uid"],
					"assignee": rules[i]["assignee"],
					"target": rules[i]["target"],
					"action": rules[i]["action"],
					"purpose": rules[i]["purpose"]
				};
				prohibition.push(proh);
			break;
			case "obligation":
				var obli = {
					"uid": rules[i]["uid"],
					"assignee": rules[i]["assignee"],
					"target": rules[i]["target"],
					"action": rules[i]["action"],
					"purpose": rules[i]["purpose"]
				};
				obligation.push(obli);
			break;
		}
	}
	var policy = {
		"@context": context,
		"@type": $("#type_ext").val(),
		"uid": $("#uid_ext").val(),
		"permission": permission,
		"prohibition": prohibition,
		"obligation": obligation
	};
	if(permission.length == 0)
		delete policy.permission;
	if(prohibition.length == 0)
		delete policy.prohibition;
	if(obligation.length == 0)
		delete policy.obligation;
	return policy;
}

function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}		

function start_download(){
	if($("#file_name").val() == ""){
		show_alert("ERROR: Insert a file name!");
	}
	else{
		if(!check_form())
			show_alert("ERROR: Empty text input!");
		else{
			var policy = get_policy();
			var myJSON = JSON.stringify(policy, null, 2);
			myJSON = "[\n" + myJSON + "\n]";
			var file_name = ($("#file_name").val() + ".jsonld");
			download(file_name, myJSON);
		}
	}
}

var policy_showed = [false, undefined];
function show_policy(){
	if(!check_form())
			show_alert("ERROR: Empty text input!");
	else{
		var policy = get_policy();
		policy_showed = [true, policy];
		if($("#view_mode").val() == "text"){
			var myJSON_raw = JSON.stringify(policy, null, 2);
			myJSON_raw = "[\n" + myJSON_raw + "\n]";
			var myJSON = myJSON_raw.replace(/\n/g, "<br>");
			$("#div_view_scroll").html("<a>"+myJSON+"</a>");
		}
		else{
			policy = [policy, ""];
			open_grafic_view(policy);
		}
	}
}
function open_upload_div(type){
	$("#div_form").empty();
	$("#div_view_main").empty();
	$("#div_form").html("<div id = \"div_upload\" class=\"unselectable\">\
		<label for=\"upload\">Upload a file:</label><br><br>\
		<input type=\"file\" id=\"file_selector\">\
		<div id=\"div_box\">\
		</div>\
	</div>");
	$("#div_box").hide();
	$("#div_box").html(type);
	const fileSelector = document.getElementById("file_selector");
	fileSelector.addEventListener('change', (event) => {
		const fileList = event.target.files;
		read_file(fileList[0]);		
	  });
}

function read_file(file){
	const reader = new FileReader();
	reader.addEventListener('load', (event) => {
		const result = event.target.result;
		// Do something with result
		try{
			var file_json = JSON.parse(result);
			if($("#div_box").html() == "modify"){
				open_modify_mode(file_json);
			}
			else if($("#div_box").html() == "view"){
				open_view_mode(file_json);
			}
		}
		catch(err) {
			show_alert("ERROR: " + err);
		}
	});
	reader.readAsText(file);
}

function open_view_mode(file_json){
	//Text
	$("#div_form").html("<div id=\"div_top_left\">\
						<titolo class=\"unselectable\">TEXT</titolo>\
					</div>"
					+"<div id=\"div_view_scroll_left\" style=\"height: 94%;\">"				
					+"</div>");
	var myJSON_raw = JSON.stringify(file_json, null, 2);
	var myJSON = myJSON_raw.replace(/\n/g, "<br>");
	$("#div_view_scroll_left").html("<a>"+myJSON+"</a>");
	
	//Grafic
	$("#div_view_main").html("<div id=\"div_top_right\">\
						<titolo class=\"unselectable\">GRAFIC</titolo>\
					</div>"
					+"<div id=\"div_view_scroll\">"				
					+"</div>");
	open_grafic_view(file_json);
}

var p_global;
function open_grafic_view(policy){
	p_global = policy;
	$("#div_view_scroll").html("<div id = \"div_grafic_base\"></div>");
	$("#div_grafic_base").html("<div id = \"div_base_left\"></div>");
	$("#div_grafic_base").append("<div id = \"div_base_right\"></div>");
	$("#div_base_left").html("<div id=\"div_label_base_context\" name=\"div_label_base\" class=\"div_label_base\" style=\"margin-top: 10px\"><label class=\"unselectable\" for=\"context\">Context:</label></div>");
	$("#div_base_right").html("<div id=\"div_base_context\"></div>");
	for (var i = 0; i < policy[0]["@context"].length; i++) {
		if(policy[0]["@context"][i].length == 1){
			$("#div_base_context").append("<label class=\"label_grafic\">" + policy[0]["@context"] + "</label><br>");
			$("#div_label_base_context").append("<br>");
			break;
		}
		$("#div_base_context").append("<label class=\"label_grafic\">" + policy[0]["@context"][i] + "</label><br>");
		$("#div_label_base_context").append("<br>");
	}
	$("#div_base_left").append("<div id=\"div_label_base_uid\" name=\"div_label_base\" class=\"div_label_base\" style=\"margin-top: 10px\"><label class=\"unselectable\" for=\"uid\">UID:</label></div><br>");
	var pos = $("#div_label_base_uid").position();
	$("#div_base_right").append("<div id=\"div_base_uid\" style=\"top: "+ pos.top +"px\"><label class=\"label_grafic\">"+ policy[0]["uid"] +"</label></div>");
	$("#div_base_left").append("<div id=\"div_label_base_type\" name=\"div_label_base\" class=\"div_label_base\" style=\"margin-top: -5px\"><label class=\"unselectable\" for=\"type\">Type:</label></div>");
	pos = $("#div_label_base_type").position();
	$("#div_base_right").append("<div id=\"div_base_type\" style=\"top: "+ pos.top +"px; margin-top: -5px\"><label class=\"label_grafic\">"+ policy[0]["@type"] +"</label></div>");
	
	//Prohibition
	var prohibition_len = 0;
	$("#div_view_scroll").append("<div id=\"div_grafic_prohibition\" onclick=\"open_prohibition()\"></div>");
	if(policy[0]["prohibition"] != undefined)
		prohibition_len = policy[0]["prohibition"].length;
	else
		$("#div_grafic_prohibition").css("cursor", "default");
	$("#div_grafic_prohibition").html("<label style=\"position: absolute; left: 6%; top: 30%\" class=\"unselectable\" for=\"prohibition\">Prohibition</label>");
	$("#div_grafic_prohibition").append("<label style=\"position: absolute; right: 5%; top: 30%; color: black\" class=\"unselectable\" for=\"prohibition\">"+ prohibition_len +" Rules</label>");
	$("#div_view_scroll").append("<div id=\"div_prohibition_list\"></div>");
	$("#div_prohibition_list").hide();
	
	//Obligation
	var obligation_len = 0;
	$("#div_view_scroll").append("<div id=\"div_grafic_obligation\" onclick=\"open_obligation()\"></div>");
	if(policy[0]["obligation"] != undefined)
		obligation_len = policy[0]["obligation"].length;
	else
		$("#div_grafic_obligation").css("cursor", "default");
	$("#div_grafic_obligation").html("<label style=\"position: absolute; left: 6%; top: 30%\" class=\"unselectable\" for=\"obligation\">Obligation</label>");
	$("#div_grafic_obligation").append("<label style=\"position: absolute; right: 5%; top: 30%; color: black\" class=\"unselectable\" for=\"obligation\">"+ obligation_len +" Rules</label>");
	$("#div_view_scroll").append("<div id=\"div_obligation_list\"></div>");
	$("#div_obligation_list").hide();
	
	//Permission
	var permission_len = 0;
	$("#div_view_scroll").append("<div id=\"div_grafic_permission\" onclick=\"open_permission()\"></div>");
	if(policy[0]["permission"] != undefined)
		permission_len = policy[0]["permission"].length;
	else
		$("#div_grafic_permission").css("cursor", "default");
	$("#div_grafic_permission").html("<label style=\"position: absolute; left: 6%; top: 30%\" class=\"unselectable\" for=\"permission\">Permission</label>");
	$("#div_grafic_permission").append("<label style=\"position: absolute; right: 5%; top: 30%; color: black\" class=\"unselectable\" for=\"permission\">"+ permission_len +" Rules</label>");
	$("#div_view_scroll").append("<div id=\"div_permission_list\"></div>");
	$("#div_permission_list").hide();
}

function open_prohibition(){
	if(p_global[0]["prohibition"] != undefined){
		if($("#div_prohibition_list").is(":hidden")){
			for (var i = 0; i < p_global[0]["prohibition"].length; i++) {
				$("#div_prohibition_list").append("<div id=\"div_prohibition_"+ (i+1) +"\" class=\"div_prohibition\"></div>");
				$("#div_prohibition_" + (i+1)).html("<label class=\"unselectable rules_list\" style=\"position: absolute\">UID:</label>");
				$("#div_prohibition_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"position: absolute; padding-left: 77px\">"+ p_global[0]["prohibition"][i]["uid"] +"</label><br><br>");
				$("#div_prohibition_" + (i+1)).append("<label class=\"unselectable rules_list\">Assignee:</label>");
				$("#div_prohibition_" + (i+1)).append("<label class=\"label_grafic_rules\">"+ p_global[0]["prohibition"][i]["assignee"] +"</label><br>");
				$("#div_prohibition_" + (i+1)).append("<label class=\"unselectable rules_list\">Target:</label>");
				for (var j = 0; j < p_global[0]["prohibition"][i]["target"].length; j++) {
					var offset = 0;
					if(j > 0)
						offset = 60;
					if(p_global[0]["prohibition"][i]["target"][j].length == 1){
						$("#div_prohibition_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: "+ (36 + offset) +"px\">"+ p_global[0]["prohibition"][i]["target"] +"</label><br>");
						break;
					}
					$("#div_prohibition_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: "+ (36 + offset) +"px\">"+ p_global[0]["prohibition"][i]["target"][j] +"</label><br>");
				}
				$("#div_prohibition_" + (i+1)).append("<label class=\"unselectable rules_list\">Action:</label>");
				$("#div_prohibition_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: 35px\">"+ p_global[0]["prohibition"][i]["action"] +"</label><br>");
				$("#div_prohibition_" + (i+1)).append("<label class=\"unselectable rules_list\">Purpose:</label>");
				$("#div_prohibition_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: 24px\">"+ p_global[0]["prohibition"][i]["purpose"] +"</label><br>");
			}
			$("#div_prohibition_list").show();
		}
		else{
			$("#div_prohibition_list").empty();
			$("#div_prohibition_list").hide();
		}
	}
}

function open_obligation(){
	if(p_global[0]["obligation"] != undefined){
		if($("#div_obligation_list").is(":hidden")){
			for (var i = 0; i < p_global[0]["obligation"].length; i++) {
				$("#div_obligation_list").append("<div id=\"div_obligation_"+ (i+1) +"\" class=\"div_obligation\"></div>");
				$("#div_obligation_" + (i+1)).html("<label class=\"unselectable rules_list\" style=\"position: absolute\">UID:</label>");
				$("#div_obligation_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"position: absolute; padding-left: 77px\">"+ p_global[0]["obligation"][i]["uid"] +"</label><br><br>");
				$("#div_obligation_" + (i+1)).append("<label class=\"unselectable rules_list\">Assignee:</label>");
				$("#div_obligation_" + (i+1)).append("<label class=\"label_grafic_rules\">"+ p_global[0]["obligation"][i]["assignee"] +"</label><br>");
				$("#div_obligation_" + (i+1)).append("<label class=\"unselectable rules_list\">Target:</label>");
				for (var j = 0; j < p_global[0]["obligation"][i]["target"].length; j++) {
					var offset = 0;
					if(j > 0)
						offset = 60;
					if(p_global[0]["obligation"][i]["target"][j].length == 1){
						$("#div_obligation_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: "+ (36 + offset) +"px\">"+ p_global[0]["obligation"][i]["target"] +"</label><br>");
						break;
					}
					$("#div_obligation_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: "+ (36 + offset) +"px\">"+ p_global[0]["obligation"][i]["target"][j] +"</label><br>");
				}
				$("#div_obligation_" + (i+1)).append("<label class=\"unselectable rules_list\">Action:</label>");
				$("#div_obligation_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: 35px\">"+ p_global[0]["obligation"][i]["action"] +"</label><br>");
				$("#div_obligation_" + (i+1)).append("<label class=\"unselectable rules_list\">Purpose:</label>");
				$("#div_obligation_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: 24px\">"+ p_global[0]["obligation"][i]["purpose"] +"</label><br>");
			}
			$("#div_obligation_list").show();
		}
		else{
			$("#div_obligation_list").empty();
			$("#div_obligation_list").hide();
		}
	}
}

function open_permission(){
	if(p_global[0]["permission"] != undefined){
		if($("#div_permission_list").is(":hidden")){
			for (var i = 0; i < p_global[0]["permission"].length; i++) {
				$("#div_permission_list").append("<div id=\"div_permission_"+ (i+1) +"\" class=\"div_permission\"></div>");
				$("#div_permission_" + (i+1)).html("<label class=\"unselectable rules_list\" style=\"position: absolute\">UID:</label>");
				$("#div_permission_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"position: absolute; padding-left: 77px\">"+ p_global[0]["permission"][i]["uid"] +"</label><br><br>");
				$("#div_permission_" + (i+1)).append("<label class=\"unselectable rules_list\">Assignee:</label>");
				$("#div_permission_" + (i+1)).append("<label class=\"label_grafic_rules\">"+ p_global[0]["permission"][i]["assignee"] +"</label><br>");
				$("#div_permission_" + (i+1)).append("<label class=\"unselectable rules_list\">Target:</label>");
				for (var j = 0; j < p_global[0]["permission"][i]["target"].length; j++) {
					var offset = 0;
					if(j > 0)
						offset = 60;
					if(p_global[0]["permission"][i]["target"][j].length == 1){
						$("#div_permission_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: "+ (36 + offset) +"px\">"+ p_global[0]["permission"][i]["target"] +"</label><br>");
						break;
					}
					$("#div_permission_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: "+ (36 + offset) +"px\">"+ p_global[0]["permission"][i]["target"][j] +"</label><br>");
				}
				$("#div_permission_" + (i+1)).append("<label class=\"unselectable rules_list\">Action:</label>");
				$("#div_permission_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: 35px\">"+ p_global[0]["permission"][i]["action"] +"</label><br>");
				$("#div_permission_" + (i+1)).append("<label class=\"unselectable rules_list\">Purpose:</label>");
				$("#div_permission_" + (i+1)).append("<label class=\"label_grafic_rules\" style=\"left: 24px\">"+ p_global[0]["permission"][i]["purpose"] +"</label><br>");
			}
			$("#div_permission_list").show();
		}
		else{
			$("#div_permission_list").empty();
			$("#div_permission_list").hide();
		}
	}
}

function change_view_mode(value){
	if(policy_showed[0]){
		if(value == "text"){
			var myJSON_raw = JSON.stringify(policy_showed[1], null, 2);
			var myJSON = myJSON_raw.replace(/\n/g, "<br>");
			$("#div_view_scroll").html("<a>"+myJSON+"</a>");
		}
		else{
			policy = [policy_showed[1], ""];
			open_grafic_view(policy);
		}
	}
}

function open_modify_mode(file_json){
	$("#div_main").html(string_main_page);
	$("#div_main").append(string_main_page_2);
	$("#prefix").prop( "disabled", true );
	for (var i = 0; i < file_json[0]["@context"].length; i++) {
		if(file_json[0]["@context"][i].length == 1){
			$("#context_1").val(file_json[0]["@context"]);
			break;
		}
		if(i == 0)
			$("#context_" + (i+1)).val(file_json[0]["@context"][i]);
		else{
			plus_click('context',i,0);
			$("#context_" + (i+1)).val(file_json[0]["@context"][i]);
		}
	}
	$("#uid_ext").val(file_json[0]["uid"]);
	$("#type_ext").val(file_json[0]["@type"]);
	if(file_json[0]["prohibition"] != undefined){
		for (var i = 0; i < file_json[0]["prohibition"].length; i++) {
			if($("#uid_1").val() != "")
				add_new_rule();
			$("#rule_type_" + rule_number).val("prohibition");
			$("#uid_" + rule_number).val(file_json[0]["prohibition"][i]["uid"]);
			$("#assegnee_" + rule_number).val(file_json[0]["prohibition"][i]["assignee"]);
			for (var j = 0; j < file_json[0]["prohibition"][i]["target"].length; j++) {
				if(file_json[0]["prohibition"][i]["target"][j].length == 1){
					$("#target_" + rule_number + "_1").val(file_json[0]["prohibition"][i]["target"]);
					break;
				}
				if(j == 0)
					$("#target_" + rule_number + "_" + (j + 1)).val(file_json[0]["prohibition"][i]["target"][j]);
				else{
					plus_click('target',j,rule_number);
					$("#target_" + rule_number + "_" + (j + 1)).val(file_json[0]["prohibition"][i]["target"][j]);
				}
			}
			$("#action_" + rule_number).val(file_json[0]["prohibition"][i]["action"]);
			$("#purpose_" + rule_number).val(file_json[0]["prohibition"][i]["purpose"]);
		}
	}
	if(file_json[0]["obligation"] != undefined){
		for (var i = 0; i < file_json[0]["obligation"].length; i++) {
			if($("#uid_1").val() != "")
				add_new_rule();
			$("#rule_type_" + rule_number).val("obligation");
			$("#uid_" + rule_number).val(file_json[0]["obligation"][i]["uid"]);
			$("#assegnee_" + rule_number).val(file_json[0]["obligation"][i]["assignee"]);
			for (var j = 0; j < file_json[0]["obligation"][i]["target"].length; j++) {
				if(file_json[0]["obligation"][i]["target"][j].length == 1){
					$("#target_" + rule_number + "_1").val(file_json[0]["obligation"][i]["target"]);
					break;
				}
				if(j == 0)
					$("#target_" + rule_number + "_" + (j + 1)).val(file_json[0]["obligation"][i]["target"][j]);
				else{
					plus_click('target',j,rule_number);
					$("#target_" + rule_number + "_" + (j + 1)).val(file_json[0]["obligation"][i]["target"][j]);
				}
			}
			$("#action_" + rule_number).val(file_json[0]["obligation"][i]["action"]);
			$("#purpose_" + rule_number).val(file_json[0]["obligation"][i]["purpose"]);
		}
	}
	if(file_json[0]["permission"] != undefined){
		for (var i = 0; i < file_json[0]["permission"].length; i++) {
			if($("#uid_1").val() != "")
				add_new_rule();
			$("#rule_type_" + rule_number).val("permission");
			$("#uid_" + rule_number).val(file_json[0]["permission"][i]["uid"]);
			$("#assegnee_" + rule_number).val(file_json[0]["permission"][i]["assignee"]);
			for (var j = 0; j < file_json[0]["permission"][i]["target"].length; j++) {
				if(file_json[0]["permission"][i]["target"][j].length == 1){
					$("#target_" + rule_number + "_1").val(file_json[0]["permission"][i]["target"]);
					break;
				}
				if(j == 0)
					$("#target_" + rule_number + "_" + (j + 1)).val(file_json[0]["permission"][i]["target"][j]);
				else{
					plus_click('target',j,rule_number);
					$("#target_" + rule_number + "_" + (j + 1)).val(file_json[0]["permission"][i]["target"][j]);
				}
			}
			$("#action_" + rule_number).val(file_json[0]["permission"][i]["action"]);
			$("#purpose_" + rule_number).val(file_json[0]["permission"][i]["purpose"]);
		}
	}
	show_policy();
}