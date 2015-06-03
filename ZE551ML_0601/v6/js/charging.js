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

	if(winWidth > 1367){
		new Waypoint({
			element: document.getElementById('section-intro'),
			handler: 
			function(direction) {
				$('#battery-1').animate({bottom:-270},1000)
				$('#battery-3').delay(1000).animate({height:428},500)
				$('#section-intro .short').delay(1300).css({left:-50}).animate({left:0,'opacity':1},750)
				$('#section-intro .tall,#section-intro .logo-boostmaster').delay(1000).css({left:-50}).animate({left:0,'opacity':1},500)
				this.destroy()
			},
			offset: '50%'
	    })
	} if(winWidth < 1367){
		new Waypoint({
			element: document.getElementById('section-intro'),
			handler: 
			function(direction) {
				$('#battery-1').animate({bottom:-270},1000)
				$('#battery-3').delay(1000).animate({height:428},500)
				$('#section-intro .short').delay(1300).css({left:-50}).animate({left:0,'opacity':1},750)
				$('#section-intro .tall,#section-intro .logo-boostmaster').delay(1000).css({left:-50}).animate({left:0,'opacity':1},500)
				this.destroy()
			},
			offset: '0'
	    })
	}

	var fastOffset;
		if( winWidth > destopEdge ){
			fastOffset = '39%';
		}else{
			fastOffset = '17%';
		}
    new Waypoint({
		element: document.getElementById('fast'),
		handler: 
		function(direction) {
			$('#fast .spec_box').css({top:25}).animate({top:0,'opacity':1},1000)
			this.destroy()
		},
		offset: fastOffset
    })
}