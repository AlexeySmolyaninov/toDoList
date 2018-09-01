//Check Off Specific Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(key){
	if (key.which === 13) {
		var todoText = $(this).val();
		$("input[type='text']").val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText +"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
