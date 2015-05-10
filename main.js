var active_tools;

$().ready(function(){
	
	active_tools = get_active_tools_atlas();
	display_active_tools(active_tools);

});

//展示主动道具的图片
function display_active_tools(all){
	for(var i=0;i<all.length;i++){
		var photo = "<img class='active_tools'  id='img"+all[i].id+"' src='graphics/active_tools/"+(all[i].id+1)+".png' />";
		$("#active").append(photo);
	}
};

//设置监听，显示查询的主动道具的内容
$(document).delegate(".active_tools","click",function(){
	var click_id=this.id;
	click_id = click_id.replace("img","");

	var str = "<p>中文名："+active_tools[click_id].ch_name+"<br />"+
	"英文名："+active_tools[click_id].en_name+"<br />"
	+"充能时间："+active_tools[click_id].charge_time+"<br />"+
	"效果："+active_tools[click_id].effect+"</p>";
	
	$("#display > p").detach();  //先移除之前的元素，在添加新的
	$("#display").append(str);
});

