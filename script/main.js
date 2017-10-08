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
$( document ).ready(function() {
	tips();
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

function tips(){
	var checker = 0;
	$('.units').hover(function() {
		if($(this).hasClass('active')){
			$(this).addClass('visib');
		}
		else{
			$('.visib').removeClass('active visib');
			$('.visib').removeClass('active visib');
			$(this).addClass('active visib');

			if($(this).hasClass('act_1')){
				$('.active_tip').removeClass('active_tip');
				$('.active_tip_1').addClass('active_tip');
			}
			else if($(this).hasClass('act_2')){
				$('.active_tip').removeClass('active_tip');
				$('.active_tip_2').addClass('active_tip');
			}
			else{
				$('.active_tip').removeClass('active_tip');
				$('.active_tip_3').addClass('active_tip');
			}
		}
	});
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



