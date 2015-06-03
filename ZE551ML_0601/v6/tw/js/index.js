var _run_on = false;

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

setTimeout(function () {
    if (!_run_on) {
    	_run_on = true;
    	_run();
    }
}, 5000);

window.onload = function () {
    if (!_run_on) {
    	_run_on = true;
    	_run();
    }
}


function _run(){

	var winWidth =  $(window).width();

	if(isMobile.any()){
		var stage = new TimelineMax();
		stage.add([ 
	    	TweenMax.fromTo($('#intro .banner'),2,{opacity:0},{opacity:1}),
	    	TweenMax.fromTo($('#intro header'),2,{y:25,opacity:0},{y:0,opacity:1}),
	    	TweenMax.fromTo($('#intro .content'),1,{opacity:0},{opacity:1}),
	    	TweenMax.fromTo($('#intro-bg'),1,{opacity:0},{opacity:1,delay:.5})
	    ]);

    	// TweenMax.set($('#intro .banner'),{opacity:1}),
    	// TweenMax.set($('#intro header'),{y:0,opacity:1}),
    	// TweenMax.set($('#intro .content'),{opacity:1})
    	// TweenMax.set($('#intro-bg'),{opacity:1})  

		return;	
	}
	//透明
	if(winWidth > 767){
		$('#thin .banner,#thin .square_small,#thin .square_main,#color-frame-group li,#colorful h4,#performance .detail,#see .product_logo.hidden-xs,#hdr .box,#lowlight .box,#secretary .product-logo.hidden-xs,#charging .product_logo,#charging .square_small,#charging .square_main,#see .photo-1 li,#see .photo-1 p,#see .photo-3 li,#see .photo-3 p').css({
			'opacity':0,
			'position':'relative'
		})
	} if(winWidth < 481){
		$('#thin .banner,#thin .square_small,#thin .square_main,#color-frame-group li,#colorful h4,#performance .detail,#see .product_logo.hidden-xs,#hdr .box,#lowlight .box,#secretary .product-logo.hidden-xs,#charging .product_logo,#charging .square_small,#charging .square_main,#see .photo-1 li,#see .photo-1 p,#see .photo-3 li,#see .photo-3 p').css({
			'opacity':1,
			'position':'static'
		})
	}

	if(winWidth > 767){
		var stage = new TimelineMax();
	    stage.add([ 
	    	TweenMax.fromTo($('#intro .banner'),2,{opacity:0},{opacity:1}),
	    	TweenMax.fromTo($('#intro header'),2,{y:25,opacity:0},{y:0,opacity:1,delay:.5}),
	    	TweenMax.fromTo($('#intro .content'),1,{opacity:0},{opacity:1,delay:1}),
	    	TweenMax.fromTo($('#intro-bg'),1,{opacity:0},{opacity:1,delay:1})   	
	    ]);
	} if(winWidth < 481){
		var stage = new TimelineMax();
		stage.add([ 
	    	TweenMax.fromTo($('#intro .banner'),2,{opacity:0},{opacity:1,delay:2}),
	    	TweenMax.fromTo($('#intro header'),2,{y:25,opacity:0},{y:0,opacity:1,delay:2}),
	    	TweenMax.fromTo($('#intro .content'),1,{opacity:0},{opacity:1,delay:2}),
	    	TweenMax.fromTo($('#intro-bg'),1,{opacity:0},{opacity:1,delay:2.5})
	    ]);
	}	

	$('#battery-3').css({height:0})
	$('#battery-1').css({bottom:-445})


	$('#charging .square_small_14').css('position','relative');
	$('#charging .square_main_larger').css('position','relative');
	$('#charging .square_unit').css('position','relative');


	$('#charging .square_small_14,#charging .square_small').css({left:-50,'opacity':0});
	$('#charging .square_main_larger,#charging .square_main,#charging .product_logo').css({left:-50,'opacity':0});
	$('#charging .square_unit').css({left:-50,'opacity':0});
	if(winWidth > 1367){
		new Waypoint({
			element: document.getElementById('thin'),
			handler: 
			function(direction) {
				$('#thin .banner').css({top:-25}).animate({top:0,'opacity':1},1000)
				this.destroy()	
			},
			offset: '70%'
	    })
	    new Waypoint({
			element: document.getElementById('thin'),
			handler: 
			function(direction) {
				$('#thin .square_small').delay(300).css({left:-50}).animate({left:0,'opacity':1},1000)
				$('#thin .square_main').css({left:-50}).animate({left:0,'opacity':1},1000)
				this.destroy()	
			},
			offset: '25%'
	    })
	    new Waypoint({
			element: document.getElementById('colorful'),
			handler: 
			function(direction) {
				$('#colorful h4').delay(750).animate({opacity:1},750);
				$('#color-frame-group li').each(function(i) {
		    		$(this).css({left:25}).delay(200*i).animate({left:0,opacity:1},500);
				});
				this.destroy()
			},
			offset: '50%'
	    })
	    new Waypoint({
			element: document.getElementById('performance'),
			handler: 
			function(direction) {
				$('#performance .detail').each(function(i) {
		    		$(this).css({top:25}).delay(150*i).animate({top:0,opacity:1},500);
				});
				this.destroy()
			},
			offset: '17%'
	    })
	    new Waypoint({
			element: document.getElementById('see'),
			handler: 
			function(direction) {
				$('#see .product_logo.hidden-xs').each(function(i) {
		    		$(this).css({right:25,'position':'absolute'}).animate({right:0,opacity:1},1000);
				});
				this.destroy()
			},
			offset: '68%'
	    })
	    new Waypoint({
			element: document.getElementById('see'),
			handler: 
			function(direction) {
				$('#see .photo-1 p').delay(300).css({left:-50}).animate({left:0,'opacity':1},1000)
				$('#see .photo-1 li').css({left:-50}).animate({left:0,'opacity':1},1000)
				this.destroy()
			},
			offset: '17%'
	    })
	    new Waypoint({
			element: document.getElementById('see'),
			handler: 
			function(direction) {
				$('#see .photo-3 p').delay(300).css({left:-50}).animate({left:0,'opacity':1},1000)
				$('#see .photo-3 li').css({left:-50}).animate({left:0,'opacity':1},1000)
				this.destroy()
			},
			offset: '-20%'
	    })
	    new Waypoint({
			element: document.getElementById('hdr'),
			handler: 
			function(direction) {
				$('#hdr .box').each(function(i) {
		    		$(this).css({right:25}).animate({right:0,opacity:1},1000);
				});
				this.destroy()
			},
			offset: '7%'
	    })
	    new Waypoint({
			element: document.getElementById('lowlight'),
			handler: 
			function(direction) {
				$('#lowlight .box').each(function(i) {
		    		$(this).css({right:25}).animate({right:0,opacity:1},1000);
				});
				this.destroy()
			},
			offset: '7%'
	    })
		//
	    new Waypoint({
			element: document.getElementById('charging'),
			handler: 
			function(direction) {

				TweenMax.to($('#battery-1'),1,{bottom:-270});
				TweenMax.to($('#battery-3'),.7,{height:428,delay:1});
				TweenMax.to($('#charging .product_logo'),1,{left:0,opacity:1});
				TweenMax.to($('#charging .square_small_14,#charging .square_small'),1,{left:0,opacity:1,delay:.2});
				TweenMax.to($('#charging .square_main_larger,#charging .square_main'),1,{left:0,opacity:1,delay:.3});
				TweenMax.to($('#charging .square_unit'),.7,{left:0,opacity:1,delay:.5});
				
				// $('#battery-1').animate({bottom:-272},1000)
				// $('#battery-3').delay(500).animate({height:428},500);

				// $('#charging .square_small_14,#charging .square_small').delay(300).css({left:-50,'opacity':0}).animate({left:0,'opacity':1},1000)
				// $('#charging .square_main_larger,#charging .square_main,#charging .product_logo').css({left:-50,'opacity':0}).animate({left:0,'opacity':1},1000)
				// $('#charging .square_unit').css({left:-50,'opacity':0}).animate({left:0,'opacity':1},1200)
				this.destroy()
			},
			offset: "360"
	    })
	    new Waypoint({
			element: document.getElementById('secretary'),
			handler: 
			function(direction) {
				$('#secretary .product-logo.hidden-xs').each(function(i) {
		    		$(this).css({right:25}).animate({right:0,opacity:1},1000);
				});
				this.destroy()
			},
			offset: '50%'
	    })	
	} 
	if(winWidth < 1367){
		new Waypoint({
			element: document.getElementById('thin'),
			handler: 
			function(direction) {
				$('#thin .banner').css({top:-25}).animate({top:0,'opacity':1},1000)
				this.destroy()	
			},
			offset: '70%'
	    })
	    new Waypoint({
			element: document.getElementById('thin'),
			handler: 
			function(direction) {
				$('#thin .square_small').delay(300).css({left:-50}).animate({left:0,'opacity':1},1000)
				$('#thin .square_main').css({left:-50}).animate({left:0,'opacity':1},1000)
				this.destroy()	
			},
			offset: '0'
	    })
	    new Waypoint({
			element: document.getElementById('colorful'),
			handler: 
			function(direction) {
				$('#colorful h4').delay(750).animate({opacity:1},750);
				$('#color-frame-group li').each(function(i) {
		    		$(this).css({left:25}).delay(200*i).animate({left:0,opacity:1},500);
				});
				this.destroy()
			},
			offset: '30%'
	    })
	    new Waypoint({
			element: document.getElementById('performance'),
			handler: 
			function(direction) {
				$('#performance .detail').each(function(i) {
		    		$(this).css({top:25}).delay(150*i).animate({top:0,opacity:1},500);
				});
				this.destroy()
			},
			offset: '0'
	    })
	    new Waypoint({
			element: document.getElementById('see'),
			handler: 
			function(direction) {
				$('#see .product_logo.hidden-xs').each(function(i) {
		    		$(this).css({right:25,'position':'absolute'}).animate({right:0,opacity:1},1000);
				});
				this.destroy()
			},
			offset: '72%'
	    })
	    new Waypoint({
			element: document.getElementById('see'),
			handler: 
			function(direction) {
				$('#see .photo-1 p').delay(300).css({left:-50}).animate({left:0,'opacity':1},1000)
				$('#see .photo-1 li').css({left:-50}).animate({left:0,'opacity':1},1000)
				this.destroy()
			},
			offset: '-100px'
	    })
	    new Waypoint({
			element: document.getElementById('see'),
			handler: 
			function(direction) {
				$('#see .photo-3 p').delay(300).css({left:-50}).animate({left:0,'opacity':1},1000)
				$('#see .photo-3 li').css({left:-50}).animate({left:0,'opacity':1},1000)
				this.destroy()
			},
			offset: '-500px'
	    })
	    new Waypoint({
			element: document.getElementById('hdr'),
			handler: 
			function(direction) {
				$('#hdr .box').each(function(i) {
		    		$(this).css({right:25}).animate({right:0,opacity:1},1000);
				});
				this.destroy()
			},
			offset: '-160px'
	    })
	    new Waypoint({
			element: document.getElementById('lowlight'),
			handler: 
			function(direction) {
				$('#lowlight .box').each(function(i) {
		    		$(this).css({right:25}).animate({right:0,opacity:1},1000);
				});
				this.destroy()
			},
			offset: '-160px'
	    })
	    new Waypoint({
			element: document.getElementById('charging'),
			handler: 
			function(direction) {


				TweenMax.to($('#battery-1'),1,{bottom:-270});
				TweenMax.to($('#battery-3'),.7,{height:428,delay:1});
				TweenMax.to($('#charging .product_logo'),1,{left:0,opacity:1});
				TweenMax.to($('#charging .square_small_14,#charging .square_small'),1,{left:0,opacity:1,delay:.2});
				TweenMax.to($('#charging .square_main_larger,#charging .square_main'),1,{left:0,opacity:1,delay:.3});
				TweenMax.to($('#charging .square_unit'),.7,{left:0,opacity:1,delay:.5});
				//$('#battery-1').animate({bottom:-270},1000)
				//$('#battery-3').delay(1100).animate({height:428},500)
				//$('#charging .square_small_14,#charging .square_small').delay(1500).css({left:-50,'opacity':0}).animate({left:0,'opacity':1},1000)
				//$('#charging .square_main_larger,#charging .square_main,#charging .product_logo').css({left:-50,'opacity':0}).animate({left:0,'opacity':1},1000)
				//$('#charging .square_unit').css({left:-50,'opacity':0}).animate({left:0,'opacity':1},1200)
				this.destroy()
			},
			offset: '50'
	    })
	    new Waypoint({
			element: document.getElementById('secretary'),
			handler: 
			function(direction) {
				$('#secretary .product-logo.hidden-xs').each(function(i) {
		    		$(this).css({right:25}).animate({right:0,opacity:1},1000);
				});
				this.destroy()
			},
			offset: '-19%'
	    })
	}
}