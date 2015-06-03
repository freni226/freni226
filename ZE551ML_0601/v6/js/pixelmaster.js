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
	//透明
	if(winWidth > 767){
		$('#section-intro .logo-pixelmaster,#hdr .box,#lowlight .box,#see .photo-1 li,#see .photo-1 p,#see .photo-3 li,#see .photo-3 p').css({
			'opacity':0,
			'position':'relative'
		})
		$('#clarity .scenario img').css({
			'opacity':0,
		})
	} if(winWidth < 481){
		$('#section-intro .logo-pixelmaster,#hdr .box,#lowlight .box,#see .photo-1 li,#see .photo-1 p,#see .photo-3 li,#see .photo-3 p').css({
			'opacity':1,
			'position':'static'
		})
		$('#.scenario img').css({
			'opacity':1,
		})
		$('#clarity').css({
			'opacity':1,
			'position':'static'
		})
	}

	new Waypoint({
		element: document.getElementById('section-intro'),
		handler: 
		function(direction) {
			$('#section-intro .logo-pixelmaster').css({left:-25}).animate({left:0,'opacity':1},1000)		
			this.destroy()	
		},
		offset: '50%'
    })

	if(winWidth < 1367){
	    new Waypoint({
				element: document.getElementById('see'),
				handler: 
				function(direction) {
					$('#see .photo-1 p').delay(300).css({left:-50}).animate({left:0,'opacity':1},1000)
					$('#see .photo-1 li').css({left:-50}).animate({left:0,'opacity':1},1000)
					this.destroy()
				},
				offset: '49%'
		    })
	    new Waypoint({
			element: document.getElementById('see'),
			handler: 
			function(direction) {
				$('#see .photo-3 p').delay(300).css({left:-50}).animate({left:0,'opacity':1},1000)
				$('#see .photo-3 li').css({left:-50}).animate({left:0,'opacity':1},1000)
				this.destroy()
			},
			offset: '-9%'
	    })
	} if(winWidth > 1367){
		new Waypoint({
				element: document.getElementById('see'),
				handler: 
				function(direction) {
					$('#see .photo-1 p').delay(300).css({left:-50}).animate({left:0,'opacity':1},1000)
					$('#see .photo-1 li').css({left:-50}).animate({left:0,'opacity':1},1000)
					this.destroy()
				},
				offset: '67%'
		    })
	    new Waypoint({
			element: document.getElementById('see'),
			handler: 
			function(direction) {
				$('#see .photo-3 p').delay(300).css({left:-50}).animate({left:0,'opacity':1},1000)
				$('#see .photo-3 li').css({left:-50}).animate({left:0,'opacity':1},1000)
				this.destroy()
			},
			offset: '25%'
	    })
	}

    new Waypoint({
		element: document.getElementById('hdr'),
		handler: 
		function(direction) {
			$('#hdr .box').css({left:-25}).animate({left:0,'opacity':1},1000)		
			this.destroy()	
		}
    })

    new Waypoint({
		element: document.getElementById('lowlight'),
		handler: 
		function(direction) {
			$('#lowlight .box').css({left:-25}).animate({left:0,'opacity':1},1000)		
			this.destroy()	
		}
    })

    if(winWidth > 1367){ 
	    new Waypoint({
			element: document.getElementById('clarity'),
			handler: 
			function(direction) {
				$('#clarity .scenario img').css({
					height:159,width:159,left: '62%',bottom: 225			
				}).animate({
					width:209,height:209,'opacity':1,left: '65%',bottom: 247
				},750)		
				this.destroy()	
			},
			offset: '50%'
	    })
	} if(winWidth < 1367){
	    new Waypoint({
			element: document.getElementById('clarity'),
			handler: 
			function(direction) {
				$('#clarity .scenario img').css({
					height:159,width:159,left: '62%',bottom: 225			
				}).animate({
					width:209,height:209,'opacity':1,left: '65%',bottom: 247
				},750)		
				this.destroy()	
			},
			offset: '50%'
	    })
	} 
}