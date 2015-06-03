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

	if(isMobile.any()){
		return;
	}
	var winWidth =  $(window).width();
	var destopEdge = 1366;
	var mobileEdge = 768;
	var position;
		if(winWidth > mobileEdge){
			position = 'relative'
		} else {
			position = 'static'
		}
	var bgPosition;
		if(winWidth > mobileEdge){
			bgPosition = '150%'
		} else {
			bgPosition = '100%'
		}
	var opacity;
		if(winWidth > mobileEdge){
			opacity = 0
		} else {
			opacity = 1
		}

	//透明
	$('#section-intro .detail,#trigate .square span,#trigate .square,#doubsim figure').css({
		'opacity':opacity,
		'position':position
	})
	$('.retina-level').css({
		'opacity':opacity,
		bottom:0
	})
	$('#retina-1,#retina-7').css({
		'opacity':opacity
	})
	$('#section-download').css({'background-position-y': bgPosition})

	$('#gpu .chart figure').css({height:54,top:222})
	$('#cpu .chart figure').css({height:34,top:301})	


	var introOffset;
		if( winWidth > destopEdge ){
			introOffset = '0';
		}else{
			introOffset = '-51%';
		}
    new Waypoint({
		element: document.getElementById('section-intro'),
		handler: 
		function(direction) {
			$('#section-intro .detail').each(function(i) {
	    		$(this).css({top:25}).delay(150*i).animate({top:0,opacity:1},500);
			});
			this.destroy()
		},
		offset: introOffset
    })

    var cpuOffset;
		if( winWidth > destopEdge ){
			cpuOffset = '27%';
		}else{
			cpuOffset = '3%';
		}
    new Waypoint({
		element: document.getElementById('cpu'),
		handler: 
		function(direction) {
			$('#cpu .chart figure').animate({height:335,top:0,opacity:1},1000)
			this.destroy()
		},
		offset: cpuOffset
    })


    var gpuOffset;
		if( winWidth > destopEdge ){
			gpuOffset = '41%';
		}else{
			gpuOffset = '16%';
		}
    new Waypoint({
		element: document.getElementById('gpu'),
		handler: 
		function(direction) {
			$('#gpu .chart figure').delay(500).animate({height:275,top:0,opacity:1},1000)
			this.destroy()
		},
		offset: gpuOffset
    })

    var trigateOffset;
		if( winWidth > destopEdge ){
			trigateOffset = '50%';
		}else{
			trigateOffset = '27%';
		}
    new Waypoint({
		element: document.getElementById('trigate'),
		handler: 
		function(direction) {
			$('#trigate .square span').delay(300).css({left:-50}).animate({left:0,'opacity':1},1000)
			$('#trigate .square').css({left:-50}).animate({left:0,'opacity':1},1000)
			this.destroy()
		},
		offset: trigateOffset
    })

    var downloadOffset;
		if( winWidth > destopEdge ){
			downloadOffset = '50%';
		}else{
			downloadOffset = '21%';
		}
    new Waypoint({
		element: document.getElementById('section-download'),
		handler: 
		function(direction) {
			$('#section-download').animate({'background-position-y': '100%'},1000)
			this.destroy()
		},
		offset: downloadOffset
    })

    var doubsimOffset;
		if( winWidth > destopEdge ){
			doubsimOffset = '72%';
		}else{
			doubsimOffset = '68%';
		}
    new Waypoint({
		element: document.getElementById('doubsim'),
		handler: 
		function(direction) {
			$('#doubsim figure').css({top:-50}).animate({top:0,opacity:1},1500,function(){
				$('#doubsim-3').animate({top:-50,opacity:0},1000,function(){
					$('#doubsim-2').fadeIn(1000)
				})
			})
			this.destroy()
		},
		offset: doubsimOffset
    })

	var retinaOffset;
		if( winWidth > destopEdge ){
			retinaOffset = '34%';
		}else{
			retinaOffset = '17%';
		}
    new Waypoint({
		element: document.getElementById('retina'),
		handler: 
		function(direction) {
			$('#retina-1').show().css({width:1020});
			$('#retina-2').css({left:12});
			var stage = new TimelineMax();
		    stage.add( TweenMax.fromTo($('#retina-1'),2,{scale:.7549,opacity:0},{scale:1,opacity:1,bottom:0}) );
            stage.add( TweenMax.to($('#retina-1'),1.5,{scale:.5098,bottom:-63,left:5}) );
            stage.add( TweenMax.to($('#retina-2'),.5,{opacity:1}) );
             stage.add([ 
             	TweenMax.to($('#retina-3'),1,{bottom:64,opacity:1}),
             	TweenMax.to($('#retina-4'),1,{bottom:111,opacity:1}),
             	TweenMax.to($('#retina-5'),1,{bottom:149,opacity:1}),
             	TweenMax.to($('#retina-6'),1,{bottom:190,opacity:1})
             ]);
            stage.add( TweenMax.to($('#retina-7'),1,{opacity:1}) );
			this.destroy()
		},
		offset: retinaOffset
    })


	var videoZf2 = document.getElementById("videozf2");
	var video1 = document.getElementById("video1");
	var video2 = document.getElementById("video2");
	  videoZf2.play();
	  video1.play();
	  video2.play();

}

$(function(){
	var videoZf2Loaded = false;
	var video1Loaded = false;
	var video2Loaded = false;
	//
	var videoZf2 = document.getElementById("videozf2");
	var video1 = document.getElementById("video1");
	var video2 = document.getElementById("video2");

	
	var videoAry = [videoZf2,video1,video2]

	videoZf2.onloadeddata =function(){
	 videoZf2Loaded = true;
	 allVideoLoaded();
	 
	}

	videoZf2.onended = function(){
		for(var i in videoAry){
			videoAry[i].currentTime = 0;
			videoAry[i].play();
		}
	}

	video1.onloadeddata =function(){
	 video1Loaded = true;
	 allVideoLoaded();
	}


	video2.onloadeddata =function(){
	 video2Loaded = true;
	 allVideoLoaded();
	}


	var allVideoLoaded = function(){
	 if(videoZf2Loaded && video1Loaded && video2Loaded){
	 }
	}

	var playAllVideo = function(){
	}

})
