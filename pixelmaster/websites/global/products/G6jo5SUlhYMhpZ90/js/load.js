var prdID = 'G6jo5SUlhYMhpZ90';

//***** css  ****//
document.write('<link href="websites/global/products/'+prdID+'/css/pixelmaster.css" rel="stylesheet"/>');
document.write('<link href="websites/global/products/'+prdID+'/css/reset.css" rel="stylesheet"/>');
document.write('<link href="websites/global/products/'+prdID+'/css/fonts.css" rel="stylesheet"/>');

//****js****//
document.write('<script type="text/javascript" src="websites/global/products/'+prdID+'/js/pixelmaster.js"></script>');




//滿版置中
$(document).ready(function() {
	var productName = 'pixelmaster';   //以產品名作命名
	var product;
	
	var windowW, windowH;
	
	var Main = function() {
		var init = function() {
			product = $('#' + productName);
			windowResizeInit();
		}
	
		function windowResizeInit() {
			$(window).resize(function() {
				windowW = $(window).width();
				windowH = $(window).height();
	
				product.css({
					width: windowW,
					marginLeft: -windowW / 2
				})
			}).resize();
		}
	
		return {
			init: init
		};
	}();
}); 