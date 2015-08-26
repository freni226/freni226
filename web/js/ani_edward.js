$(function(){

	var helloInit = new TimelineMax();
		helloInit.from($('.hello_title span').eq(0) ,.5 ,{autoAlpha:0 ,marginLeft:'+=80px' ,ease:Back.easeOut})
				.from($('.hello_title span').eq(1) ,.5 ,{autoAlpha:0 ,marginLeft:'-=80px' ,ease:Back.easeOut} ,'-=.5')
				.from($('.hello_kv_1') ,.5 ,{autoAlpha:0 ,left:'+=30px' ,ease:Quart.easeOut} ,'-=.3')
				.from($('.hello_kv_2') ,.5 ,{autoAlpha:0 ,left:'+=30px' ,ease:Quart.easeOut} ,'-=.3')
				.from($('.hello_kv_3') ,.45 ,{autoAlpha:0 ,top:'-=100px' ,scale:1.5 ,ease:Back.easeOut} ,'-=.4')
				.from($('.hello_kv_4') ,.5 ,{autoAlpha:0 ,left:'+=30px' ,rotation:10 ,ease:Quart.easeOut} ,'-=.4')
				.from($('.hello_kv_txt_box') ,.5 ,{autoAlpha:0 ,left:'+=30px' ,ease:Quart.easeOut} ,'-=.4')
				.from($('.hello_kv_title') ,.5 ,{autoAlpha:0 ,left:'+=30px' ,ease:Quart.easeOut} ,'-=.4')
				.from($('.hello_kv_txt') ,.5 ,{autoAlpha:0 ,left:'+=30px' ,ease:Quart.easeOut} ,'-=.4')
				.from($('.hello_txt_arrow') ,.5 ,{autoAlpha:0 ,rotation:30 ,transformOrigin:'80% 50%' ,ease:Quart.easeOut} ,'-=.4')
				.staggerFrom(['.hello_init .app_ios','.hello_init .app_android','.hello_init .app_wp'] ,.5 ,{autoAlpha:0 ,marginLeft:'+=10px' ,ease:Back.easeOut} ,.1 ,'-=.4' )
				.staggerFrom([$('.hello_txt').eq(0),$('.hello_txt').eq(1)] ,.5 ,{autoAlpha:0 ,marginTop:'-=10px' ,ease:Quart.easeOut} ,.2 ,'-=.4' )
				.from('.btn_hello_next' ,.5 ,{scale:1.2 ,autoAlpha:0 ,ease:Linear.easeNone} ,'-=.5');



	var helloDownload = new TimelineMax({paused:true});
		helloDownload.from('.hello_unit_title' ,.5 ,{autoAlpha:0 ,scale:0 ,ease:Back.easeOut})
		 			 .from('.hell_unit_title.ani_txt1' ,.5 ,{autoAlpha:0 ,left:-30 ,ease:Quart.easeOut} ,'-=.5')
		 			 .from('.hell_unit_title.ani_txt2' ,.5 ,{autoAlpha:0 ,left:30 ,ease:Quart.easeOut} ,'-=.5')
		 			 .from('.hello_phone' ,.5 ,{autoAlpha:0 ,scale:0 ,ease:Back.easeOut} ,'-=.4')
		 			 .from('.hello_point_1' ,.5 ,{autoAlpha:0 ,scale:0 ,ease:Back.easeOut} ,'-=.4')
		 			 .from('.hello_arrow_1' ,.5 ,{autoAlpha:0 ,scale:0 ,ease:Back.easeOut} ,'-=.5')
		 			 .from('.hello_point_4' ,.5 ,{autoAlpha:0 ,scale:0 ,ease:Back.easeOut} ,'-=.4')
		 			 .from('.hello_arrow_4' ,.5 ,{autoAlpha:0 ,scale:0 ,ease:Back.easeOut} ,'-=.5')
		 			 .from('.hello_point_2' ,.5 ,{autoAlpha:0 ,scale:0 ,ease:Back.easeOut} ,'-=.4')
		 			 .from('.hello_arrow_2' ,.5 ,{autoAlpha:0 ,scale:0 ,ease:Back.easeOut} ,'-=.5')
		 			 .from('.hello_point_3' ,.5 ,{autoAlpha:0 ,scale:0 ,ease:Back.easeOut} ,'-=.4')
		 			 .from('.hello_arrow_3' ,.5 ,{autoAlpha:0 ,scale:0 ,ease:Back.easeOut} ,'-=.5')
		 			 .from('.hell_unit_title.ani_txt3' ,.5 ,{autoAlpha:0 ,ease:Linear.easeNone} ,'-=.5');
		

	var helloFace = new TimelineMax({paused:true});
		helloFace.from('.face_icon' ,.5 ,{autoAlpha:0 ,scale:0 ,ease:Back.easeOut})
		 			 .from('.face_title' ,.5 ,{autoAlpha:0 ,top:-10 ,ease:Quart.easeOut} ,'-=.5')
		 			 .from('.face_txt' ,.5 ,{autoAlpha:0 ,top:-10 ,ease:Quart.easeOut} ,'-=.3')
		 			 .from('.footer_bird' ,.5 ,{autoAlpha:0 ,scale:1.2 ,ease:Back.easeOut} ,'-=.4')
		 			 .from('.footer_hello_logo' ,.5 ,{autoAlpha:0 ,ease:Linear.easeNone} ,'-=.4');

		helloDownload.seek(0);
		helloFace.seek(0);

		if(_IE8){
			helloInit.seek(100);
			helloDownload.seek(100);
			helloFace.seek(100);
		}


	
	//hello edward
	$(window).resize(function(){
		$('.hello_box .box').css({ 
			position: 'relative',
			height: $win.outerHeight(),
			overflow:'hidden'
		});

		$('.hello_inner').each(function(i,obj){
			$(obj).css({
				marginTop: Math.floor($(obj).outerHeight()/2)*-1
			})
		});
		TweenMax.set('.slider_next' ,{height:$('.next_inner').outerHeight()});
	}).resize();

	var _height = $('.next_inner').outerHeight();
	TweenMax.set('.slider_next' ,{height:0 ,overflow:'hidden'});

	var _next = true;
	var _nextPage;

	$('body,html').mousewheel(function(event) {
	    var _mouse = event.deltaY;
	    if(_mouse > 0){
	    	_nextPage = 'up';
	    }else if(_mouse < 0){
	    	_nextPage = 'down';
	    }

	    if(_next){
	    	$('.btn_hello_next a').click();
	    }
	});

	$('.btn_hello_next a').click(function(e){
		e.preventDefault();
		_next = false;
		TweenMax.set('.slider_next' ,{height:_height ,onComplete:function(){
			TweenMax.to('body,html' ,.8 ,{scrollTop:$(window).height() ,ease:Quart.easeOut ,onComplete:function(){
				if(!_IE8){
					helloDownload.play();
				}
			}});
		}});
	});

	$(window).scroll(function(){
		var _thisScroll = $(window).scrollTop();
		if(!_IE8 && _thisScroll > $('.hello_facemarker').offset().top-300){
			helloFace.play();
		}
	});






});