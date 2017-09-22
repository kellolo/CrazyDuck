$(window).bind('scroll',function(e){
	var scr = false;
	if($(this).scrollTop()<900){
		parallaxScroll();
	}
	/*if(scr==false){
		if($(this).scrollTop()>500){
			$('body').animate({
				scrollTop: '1000px'},
				1000);
			scr = true;
			return false;
		}
	}
	if(scr==true){
		if($('body').scrollTop()==1000){
			$('body').animate({
				scrollTop: '0px'},
				1000);
			scr = false;
			return false;
		}
	}*/
});


function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('.c-front').css('top',(200+(scrolled*1.7))+'px');
	$('.c-mid').css('top',(350+(scrolled*1.3))+'px');
	$('.c-back').css('top',(500+(scrolled*0.8))+'px');
	$('.g-front').css('bottom',(0-(scrolled*0.4))+'px');
	$('.g-mid').css('bottom',(0-(scrolled*0.3))+'px');
	$('.g-back').css('bottom',(0-(scrolled*0.6))+'px');
	//$('.brick').css('height',(50+(scrolled*0.05))+'px');
}
/*$(function(){
	$(window).ready(function() {
			for(let i=0; i<15; i++){
				if(i>=14){
					i=0;
				}
				else{
					$('.wheel-left').css({
						transform: 'rotate('+i+')',
						transform: 'scale(0.25)'
					});
				}				
			}
	});
});*/



/*$(function(){
	let ang = 0;
		for(ang; ang<=180; ang+=20){
			setInterval(function(){
				if($('.wheel-left').hasClass('rotated')){
					$('.wheel-left').css({
							transform: 'rotate('+ang+') scale(0.25)'
						});
					$('.wheel-left').removeClass('rotated');
				}
				else{
					$('.wheel-left').css({
							transform: 'rotate('+ang+20+'deg) scale(0.25)'
						});
					$('.wheel-left').addClass('rotated');
				}

			}, 2000);
			console.log(ang);
		}
});

*/



