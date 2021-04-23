$(function(){

	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3);

	var movementStrength = 50;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	
	$(".photo").mousemove(function(e){
		if ($(window).width() > 960){
			var pageX = e.pageX - ($(window).width() / 2);
			var pageY = e.pageY - ($(window).height() / 2);
			var newvalueX = width * pageX * -1 - 25;
			var newvalueY = height * pageY * -1 - 25;
			
			$(this).css("transform","translate3d("+ newvalueX+"px, " +newvalueY+"px, 0)");

			$(this).css("background-size", "cover");
		};
	});
})