$(document).ready(function(){
		$(window).resize(function(){
			checkBg($('.ind_show') ,$('.ind_show .ie8Bg') ,true);
			checkBg($('.prod_info') ,$('.prod_info .ie8Bg') ,false);
		});


		function checkBg(obj ,img ,outerBox ,isWidth){

			switch(outerBox){
				case true:{
					var _boxWidth = $(window).width();
					var _boxHeight = $(window).height();

					if(_boxWidth < 1024 || _boxHeight < 768){
						_boxWidth = obj.width();
						_boxHeight = obj.height();
					}

					break;
				}

				case false:{
					var _boxWidth = obj.width();
					var _boxHeight = obj.height();

					break;
				}
			}

			var _picWidth = parseInt(img.attr('width'),10);
			var _picHeight = parseInt(img.attr('height'),10);
			var _r1 = _boxWidth / _picWidth;
			var _r2 = _boxHeight / _picHeight;
			var _r = _r1 > _r2 ? _r1: _r2;

			img.css({
				width : Math.floor(_picWidth * _r),
				height : Math.floor(_picHeight * _r),
				marginTop :  -Math.floor((_picHeight * _r))/2,
				marginLeft :  -Math.floor((_picWidth * _r))/2,
			});
		}
});