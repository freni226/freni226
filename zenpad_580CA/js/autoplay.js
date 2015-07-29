/**
 * @Authors Tsai Cheng-Peng (service@canboo.tw)
 * @Date    2015-07-29
 */
(function($) {
	$.canboo = {
		init:function(){
			// autoplay
			if ( $('#BLUR').length )
			{
				$.canboo.startPlay();
			};
		},
		startPlay:function() {
			document.getElementById('BLUR').play();
			document.getElementById('NOBLUR').play();
		}
	}

	$(function () {
		$.canboo.init();
	});
})(jQuery);
