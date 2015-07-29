/**
 * @Authors Tsai Cheng-Peng (service@canboo.tw)
 * @Date    2015-07-28
 */
(function($) {
	$.canboo = {
		init:function(){
			$('.start').on('click',function(){
				$.canboo.startPlay();
			});
		},
		startPlay:function() {
			document.getElementById('video1').play();
			document.getElementById('video2').play();
		}
	}

	$(function () {
		$.canboo.init();
	});
})(jQuery);
