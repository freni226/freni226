/**
 * @Authors Tsai Cheng-Peng (service@canboo.tw)
 * @Date    2015-07-29
 */
(function($) {
	$.canboo = {
		init:function(){
			// 確認元素存在才執行startPlay
			if ( $('#BLUR').length )
			{
				$.canboo.startPlay();
			};
		},
		startPlay:function() {
			var video1 = document.getElementById('BLUR'),
				video2 = document.getElementById('NOBLUR');
			video1.load();
			video2.load();
			// 確認兩隻影片都讀取完後，才開始執行播放
			video1.addEventListener('loadeddata', function() {
				video2.addEventListener('loadeddata', function() {
					video1.currentTime = 0.5;
					video2.currentTime = 0.5;
					video1.play();
					video2.play();
				}, false);
			}, false);
			// 因為兩隻影片影格數有稍稍不同，所以要播完後歸零，再次啟動play
			video1.onended = function(e) {
				video1.currentTime = 0.5;
				video2.currentTime = 0.5;
				video1.play();
				video2.play();
		    };
		    // 如果是行動載具，會因為無法執行自動播放程序所以要增加controls
		    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
		    {
		    	video1.controls = true;
		    	video2.controls = true;
		    };
		}
	}

	$(function () {
		$.canboo.init();
	});
})(jQuery);
