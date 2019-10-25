<script type="text/javascript">
$(function(){
	
	var getParameters = function (paramName) {
		var returnValue;
		var url = location.href;
		var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');
			for (var i = 0; i < parameters.length; i++) {
			var varName = parameters[i].split('=')[0];

			if (varName.toUpperCase() == paramName.toUpperCase()) {
				returnValue = parameters[i].split('=')[1];
				return decodeURIComponent(returnValue);
			}
		}
	};

	
		

	hisScroll = function(){
		$(window).scroll(function(){
			$('.historyList .hBox').each(function(i){
				var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 70; //구역의총높이
				var bottom_of_window = $(window).scrollTop() + $(window).height(); //
				if (bottom_of_window > bottom_of_object) {
					$(this).animate({'opacity':'1'},2000);
				}
			});
			$('.historyList .centerLine').stop().animate({'opacity':'1'},100);
		});
	}


	$('.historyTab li a').each(function(){
		$(this).bind('click', function(e){
			 e.preventDefault();

			var target = $(this).parent().attr('data-tab');
			$('.historyTab li').removeClass('on');
			$('.hisWrap').css({'display':'none'},800);
			$(''+target+'').focus();
			$(this).parent().addClass('on');
			$(''+target+'').fadeIn(300);
			hisScroll();		
			//$(hisScroll).removeAttr('style','');
			$('.busiTv ul li .box').matchHeight();
		});
	});
	
	var busiM = getParameters('buiM');
	
	if (busiM == undefined) {
		$('.historyTab li:eq(0) a').click();
	}else{
		$('.historyTab li:eq('+busiM+') a').click();
	}
		
	
	
	
});
</script>
