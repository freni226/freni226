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

		$('#lolliflash .magnifier.slow').css({width:177,height:235,right:106,bottom:97,'opacity':1})
		$('#lolliflash .magnifier.quick').css({width:177,height:235,right:106,bottom:117,'opacity':1})
			
		return;
	}
	if(winWidth > 767){
	    $('#zenflash .short,#zenflash .tall,#zenpower .figure').css({
			'opacity':0,
			'position':'relative'
		})
		$('#zenflash-flash,#clairty .magnifier,#lolliflash .magnifier').css({
			'opacity':0,
		})
	} if(winWidth < 481){
		$('#zenpower .figure').css({
			'opacity':1,
			'position':'relative'
		})
		$('#zenflash .short,#zenflash .tall').css({
			'opacity':1,
			'position':'static'
		})
		$('#zenflash-flash,#clairty .magnifier,#lolliflash .magnifier').css({
			'opacity':1,
		})
	}
	if(winWidth > 767){
	    new Waypoint({
			element: document.getElementById('zenflash'),
			handler: 
			function(direction) {
				$('#zenflash-flash').animate({'opacity':1},150)
				$('#zenflash-phone').delay(150).animate({'opacity':.3},200).animate({'opacity':1},400)
				$('#zenflash h1,#zenflash .left').delay(150).animate({'opacity':.3},200).animate({'opacity':1},400)
				$('#zenflash .short').delay(1300).css({left:-50}).animate({left:0,'opacity':1},750)
				$('#zenflash .tall').delay(1000).css({left:-50}).animate({left:0,'opacity':1},500)
				this.destroy()	
			}
	    })
	} if(winWidth < 481){
		new Waypoint({
			element: document.getElementById('zenflash'),
			handler: 
			function(direction) {
				$('#zenflash h1,#zenflash .left').animate({'opacity':1},400)
				this.destroy()	
			}
	    })
    }
    if(winWidth < 1367){
	    new Waypoint({
			element: document.getElementById('clairty'),
			handler: 
			function(direction) {
				$('#clairty .magnifier.slow').css({width:89,height:117,right:0,bottom:157}).animate({width:177,height:235,right:66,bottom:82,'opacity':1},1500)
				$('#clairty .magnifier.quick').css({width:89,height:117,right:0,bottom:177}).animate({width:177,height:235,right:66,bottom:102,'opacity':1},500)
				this.destroy()	
			},
			offset: '10%'
	    })
	} if(winWidth > 1367){
		new Waypoint({
			element: document.getElementById('clairty'),
			handler: 
			function(direction) {
				$('#clairty .magnifier.slow').css({width:89,height:117,right:0,bottom:157}).animate({width:177,height:235,right:66,bottom:82,'opacity':1},1500)
				$('#clairty .magnifier.quick').css({width:89,height:117,right:0,bottom:177}).animate({width:177,height:235,right:66,bottom:102,'opacity':1},500)
				this.destroy()	
			},
			offset: '17%'
	    })
	}

    new Waypoint({
		element: document.getElementById('lolliflash_bottom'),
		handler: 
		function(direction) {
			$('#lolliflash .magnifier.slow').css({width:89,height:117,right:0,bottom:247}).animate({width:177,height:235,right:106,bottom:97,'opacity':1},1500)
			$('#lolliflash .magnifier.quick').css({width:89,height:117,right:0,bottom:267}).animate({width:177,height:235,right:106,bottom:117,'opacity':1},500)
			this.destroy()	
		},
		offset: '50%'
    })

    if(winWidth > 767){
	    new Waypoint({
			element: document.getElementById('zenpower'),
			handler: 
			function(direction) {
				$('#zenpower .figure').css({top:50}).animate({top:0,'opacity':1},1500)
				this.destroy()	
			},
			offset: '50%'
	    })
	} if(winWidth < 481){
		new Waypoint({
			element: document.getElementById('zenpower'),
			handler: 
			function(direction) {
				$('#zenpower .figure').css({top:0,'opacity':1})
				this.destroy()	
			},
			offset: '50%'
	    })
	}
}