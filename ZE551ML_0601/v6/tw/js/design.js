var _run_on = false;
setTimeout(function () {
    if (!_run_on) {
    	_run_on = true;
    	_run();
    }
}, 5000);

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


window.onload = function () {
    if (!_run_on) {
    	_run_on = true;
    	_run();
    }
}


function _run(){
	var winWidth =  $(window).width();

	if(isMobile.any()){
		$('#section-intro .right').css({top:0,'opacity':1});
		return;
	}
    //透明
	if(winWidth > 767){
		$('#pattern .left.hidden-xs,#color-frame-group li,#colorful h4').css({
			'opacity':0,
			'position':'relative'
		})

		$('#thin-item-1,#thin-item-2,#thin-item-3').css({
			'opacity':0,
		})

		$('#section-intro .right').css({'opacity':0,top:50,'position':'relative'}).delay(500).animate({top:0,'opacity':1},1500)
	} if(winWidth < 481){
		$('#pattern .left.hidden-xs,#color-frame-group li,#colorful h4').css({
			'opacity':1
		})

		$('#thin-item-1,#thin-item-2,#thin-item-3').css({
			'opacity':1,
		})
	}

	
    new Waypoint({
		element: document.getElementById('pattern'),
		handler: 
		function(direction) {
			$('#pattern .left.hidden-xs').css({top:-25}).animate({top:0,'opacity':1},1000)		
			this.destroy()	
		},
		offset: '50%'
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
		element: document.getElementById('thin'),
		handler: 
		function(direction) {
			var stage = new TimelineMax();
			    stage.add([ 
			    	TweenMax.fromTo($('#thin-item-1'),1,{y:-25,x:-25,opacity:0},{y:0,x:0,opacity:1}),
			    	TweenMax.fromTo($('#thin-item-2'),1,{bottom:-25,left:25,opacity:0},{bottom:0,left:0,opacity:1})
			    ]);			 
			    stage.add( TweenMax.fromTo($('#thin-item-3'),1,{opacity:0},{opacity:1}));
			this.destroy()
		},
		offset: '50%'
    })
}