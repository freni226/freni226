var _run_on = false;
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

function _run(){
	var winWidth =  $(window).width();

	if(isMobile.any()){
		return;
	}
	var destopEdge = 1366;
	var mobileEdge = 768;

	//透明
	if(winWidth > 767){
	    $('#section-intro .tall,#section-intro .short,#section-intro .logo-boostmaster,#fast .spec_box').css({
			'opacity':0,
			'position':'relative'
		})
	} if(winWidth < 481){
		$('#section-intro .tall,#section-intro .short,#section-intro .logo-boostmaster,#fast .spec_box').css({
			'opacity':1,
			'position':'static'
		})
	}

    $('#battery-3').css({height:0})
	$('#battery-1').css({bottom:-445})

	TweenMax.set($('#section-intro .tall'),{x:-50,'opacity':0});
	TweenMax.set($('#section-intro .short'),{x:-50,'opacity':0});
	//
	var introOffset;
	if(winWidth < 1367){
		introOffset = '100';
	}
	else{
		introOffset = '220';
	}
	new Waypoint({
		element: $("#battery-2"),
		handler: 
		function(direction) {
			TweenMax.to($('#battery-1'),1,{bottom:-270});
			TweenMax.to($('#battery-3'),.5,{height:428,delay:1});
			TweenMax.set($('#section-intro .square-box'),{overflow:'visible'})
			TweenMax.fromTo($('#section-intro .tall'),.75,{x:-50,'opacity':0},{x:0,'opacity':1,delay:1.2});
			TweenMax.fromTo($('#section-intro .short'),.75,{x:-50,'opacity':0},{x:0,'opacity':1,delay:1.3});
			TweenMax.fromTo($('#section-intro .logo-boostmaster'),.5,{x:-50,'opacity':0},{x:0,'opacity':1,delay:1});


			//$('#battery-1').animate({bottom:-270},1000)
			//$('#battery-3').delay(1000).animate({height:428},500)
			//$('#section-intro .short').delay(1300).css({left:-50}).animate({left:0,'opacity':1},750)
			//$('#section-intro .tall,#section-intro .logo-boostmaster').delay(1000).css({left:-50}).animate({left:0,'opacity':1},500)
			this.destroy()
		},
		offset: introOffset
    })
	//
	var fastOffset;
		if( winWidth > destopEdge ){
			fastOffset = '39%';
		}else{
			fastOffset = '180';
		}
	TweenMax.set($('#fast .spec_box'),{y:50,opacity:0})
    new Waypoint({
		element: document.getElementById('fast'),
		handler: 
		function(direction) {

			TweenMax.fromTo($('#fast .spec_box'),1,{y:50,opacity:0},{y:0,opacity:1})
			this.destroy()
		},
		offset: fastOffset
    })
}