var _IE = BROWSER.versions.trident,
    _IE8 = _IE && parseFloat($.browser.version) < 9;
    
var sectionReisze;
var _showNavWidth = 259;
var $win = $(window);

var loaded = false;
var loadOK;
var loading;

$(function () {
    
    loading = function(){
        var loading = '<div id="loading-box"><div class="circle"> <div id="loading"> <span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span> </div> <div class="rodny"></div> </div></div>';
        $('body').append(loading);
        $('#wrapper').imagesLoaded(function(){
        	loaded = true;
        	if(loaded && !_IE8){
            	TweenMax.to('#loading-box' ,.8 ,{autoAlpha:0 ,ease:Quart.easeOut ,onComplete:function(){
            		initAnimation.play();
	                $('#loading-box').remove();
	            }});
            }else if(loaded && _IE8){
            	$('#loading-box').remove();
            }
        });

    }

    loading();

    

	// not ie8 不顯示 lang 的 selector 效果
	if(_IE8 == false){
		[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {    
	        new SelectFx(el);
	    });
	}


	// logo click 跳至 asus 官網
	$('.logo a').click(function(e){
		e.preventDefault();
		window.open('https://www.asus.com/au/');
	});

	// 漢堡選單 click 後 sub menu 展開效果
	$('.burger_nav').click(function(e){
		e.preventDefault();
		var _s = 0.5;
		$('#navigation').toggleClass('open_show');
		if($('#navigation').hasClass('open_show')){
			for (var i = 0; i<$('.side_nav li').length;i++) {
				TweenMax.to($('.navi').eq(i) ,_s+0.3 ,{marginLeft:'+=10px' ,autoAlpha:0 ,ease:Quart.easeOut});
			};
		}else{
			TweenMax.to($('.navi') ,_s ,{marginLeft:'0' ,autoAlpha:1 ,ease:Quart.easeOut});
		}
	});

	// navi click 後跳頁的動作
	$('.navi a ,.btn_learn_small a').click(function(e){
		e.preventDefault();
		var _ind = $(this).attr('href').slice(1);
		navClick(_ind);
	});


	var _spaceHeight = $('.ani_specs').height();
		TweenMax.set('.ani_specs' ,{height:0 ,overflow:'hidden'});

		$('.btn_spec').click(function(e){
			e.preventDefault();
			$(this).toggleClass('active');
			if($(this).hasClass('active')){
				TweenMax.to('.ani_specs' ,.5 ,{height:_spaceHeight ,ease:Quart.easeOut ,onComplete:function(){
					TweenMax.to('body,html' ,.8 ,{scrollTop: $('.ani_specs').offset().top ,ease:Quart.easeOut});
				}});
			}else{
				TweenMax.to('.ani_specs' ,.8 ,{height:0 ,ease:Quart.easeOut ,onComplete:function(){
					TweenMax.to('body,html' ,.8 ,{scrollTop: $('.prod_info').offset().top ,ease:Quart.easeOut});
				}});
			}
		});


	// product point click
	var _prodOffset = [];

	$('.prod_list .row').each(function(i,obj){
		_prodOffset.push($(obj).offset().top);
	});

	$('.point_area .point').click(function(e){
		e.preventDefault();
		var _ind = $(this).index();
		TweenMax.to('body,html' ,.8 ,{scrollTop:_prodOffset[_ind] ,ease:Quart.easeOut});
	});



	// nav 第一個加上line
	$('.show_nav .navi').eq(0).addClass('first');
	$('.side_nav .navi').eq(0).addClass('first');




	/*-------------------------------------------------

						index

	--------------------------------------------------*/

	// 幫3台電腦加上class
	$('.ind_prod_show .row').each(function(i ,obj){
		$(obj).addClass('computer_'+(i+1));
	});

	// 將電腦垂直置中
	$(window).resize(function(){
		sectionReisze('.ind_show' ,105 ,true ,'.ind_prod_show');
		intelLogoFixed();
	}).resize();

	var _computerLength = $('.ind_prod_show .row').length;
	var _computerCenter = Math.round(_computerLength/2);

	var computerHover = false;

	//#1 IE8以上執行進場動態
	if(!_IE8){
		TweenMax.set('.illustrator' ,{autoAlpha:0 ,scale:.5});
		TweenMax.set('.screen' ,{autoAlpha:0});
		TweenMax.set('.ani_scale' ,{scale:.8 ,transformOrigin:'center bottom'});

		
		var initAnimation = new TimelineMax({paused:true});
			initAnimation.from('.computer_2' ,.5 ,{scale:0 ,autoAlpha:0 ,ease:Back.ease ,transformOrigin:'center' ,onComplete:function(){
						  	scaleAni (2);
						 }})
						  .from('.computer_1 .ani_box' ,.5 ,{left:'+=80px' ,autoAlpha:0 ,ease:Back.easeOut})
						  .from('.computer_3 .ani_box' ,.5 ,{left:'-=80px' ,autoAlpha:0 ,ease:Back.easeOut},'-=.5')
						  .from('.fixed_footer' ,.5 ,{bottom:'-=5%' ,autoAlpha:0 ,ease:Quart.easeOut ,onComplete:function(){
						  	computerHover = true;
						  }} ,'-=.3');
			initAnimation.seek(0);
			
		

		$('.ind_prod_show .row').hover(function(){
			var _this = $(this);
			var _index = _this.index()+1;
			if(computerHover){
				computerHover = false;
				resetAni();
				scaleAni(_index);
			}
		},function(){
			computerHover = true;
			resetAni();
		});


	}else{
		//#2 IE8以下執行縮放效果
		var _boxWidth = $('.ind_prod_show .ind_prod').eq(0).width();
		var _boxHeight = $('.ind_prod_show .ind_prod').eq(0).height();
		var _scale = 0.8;
		var _scaleWidth = Math.floor(_boxWidth*_scale);
		var _scaleHeight = Math.floor(_boxHeight*_scale);

		TweenMax.set($('.ind_prod_show .row').find('.computer') ,{width:_scaleWidth  ,marginLeft:(_scaleWidth/2)*-1+'px' ,marginTop:(_scaleHeight/2)*-1+'px'});
		TweenMax.set($('.ind_prod_show .row').find('.screen') ,{width:_scaleWidth  ,marginLeft:(_scaleWidth/2)*-1+'px' ,marginTop:(_scaleHeight/2)*-1+'px' ,autoAlpha:0});
		TweenMax.set($('.ind_prod_show .row').find('.illustrator') ,{width:0  ,marginLeft:(_scaleWidth/2)*-1+'px' ,marginTop:(_scaleHeight/2)*-1+'px'});

		TweenMax.set($('.computer_'+_computerCenter).find('.computer') ,{width:_boxWidth  ,marginLeft:(_boxWidth/2)*-1+'px' ,marginTop:(_boxHeight/2)*-1+'px'});
		TweenMax.set($('.computer_'+_computerCenter).find('.screen') ,{width:_boxWidth  ,marginLeft:(_boxWidth/2)*-1+'px' ,marginTop:(_boxHeight/2)*-1+'px' ,autoAlpha:1});	
		TweenMax.set($('.computer_'+_computerCenter).find('.illustrator') ,{width:_boxWidth  ,marginLeft:(_boxWidth/2)*-1+'px' ,marginBottom:(_boxHeight/2)*-1+'px' ,onComplete:function(){
			computerHover = true;
		}});

		$('.ind_prod_show .row').hover(function(){
			var _this = $(this);
			var _index = _this.index()+1;

			if(computerHover){
				computerHover = false;
				TweenMax.to($('.computer') ,.5 ,{width:_scaleWidth  ,marginLeft:(_scaleWidth/2)*-1+'px' ,marginTop:(_scaleHeight/2)*-1+'px' ,ease:Back.easeOut});
				TweenMax.to($('.screen') ,.5 ,{width:_scaleWidth  ,marginLeft:(_scaleWidth/2)*-1+'px' ,marginTop:(_scaleHeight/2)*-1+'px' ,autoAlpha:0 ,ease:Quart.easeOut});
				TweenMax.to($('.illustrator') ,.5 ,{width:0 ,autoAlpha:0 ,marginLeft:(_scaleWidth/2)*-1+'px' ,marginBottom:(_scaleHeight/2)*-1+'px' ,ease:Quart.easeOut});
				
				TweenMax.to($(this).find('.computer') ,.5 ,{width:_boxWidth ,marginLeft:(_boxWidth/2)*-1 ,marginTop:(_boxHeight/2)*-1 ,ease:Back.easeOut});
				TweenMax.to($(this).find('.screen') ,.5 ,{width:_boxWidth ,marginLeft:(_boxWidth/2)*-1 ,marginTop:(_boxHeight/2)*-1 ,autoAlpha:1 ,ease:Back.easeOut});
				TweenMax.to($(this).find('.illustrator') ,.5 ,{autoAlpha:1 ,width:_boxWidth ,marginLeft:(_boxWidth/2)*-1 ,marginBottom:(_boxHeight/2)*-1 ,ease:Quart.easeOut});
			}

		},function(){
			computerHover = true;
			TweenMax.to($(this).find('.computer') ,.5 ,{width:_scaleWidth ,marginLeft:(_scaleWidth/2)*-1+'px' ,marginTop:(_scaleHeight/2)*-1+'px' ,ease:Back.easeOut});
			TweenMax.to($(this).find('.screen') ,.5 ,{autoAlpha:0 ,width:_scaleWidth ,marginLeft:(_scaleWidth/2)*-1+'px' ,marginTop:(_scaleHeight/2)*-1+'px' ,ease:Back.easeOut});
			TweenMax.to($(this).find('.illustrator') ,.5 ,{width:0 ,autoAlpha:0 ,marginLeft:(_scaleWidth/2)*-1+'px' ,marginBottom:(_scaleHeight/2)*-1+'px' ,ease:Quart.easeOut});
		});

	}
	

	//各台電腦button link
	$('._chi').click(function(e){
		e.preventDefault();
		navClick('chi');
	});

	$('._t100ha').click(function(e){
		e.preventDefault();
		navClick('t100ha');
	});

	$('._flip').click(function(e){
		e.preventDefault();
		navClick('flip');
	});



	/*-------------------------------------------------

					 product intel

	--------------------------------------------------*/
	function intelLogoFixed(){
		if($('.page_button').length == 1 && $(window).height() <= 768 && $(window).scrollTop() == 0){
			$('.page_button').css({
				position:'fixed'
			});

			$(window).scroll(function(){
				var scroll = $(window).scrollTop()+$(window).height();
				var _prodHeight = $('.prod_kv').height();
				console.log(scroll);
				if(scroll > _prodHeight){
					$('.page_button').css({
						position:'absolute'
					});				
				}else if(scroll <= _prodHeight){
					$('.page_button').css({
					position:'fixed'
				});
				}
			});
		}else{
			$('.page_button').css({
				position:'absolute'
			});

		}
	}

});


function navClick (i){
	switch(i){
		case't100ha':{
			window.location = 'prod_t100ha.html';
			break;	
		}

		case'chi':{
			window.location = 'prod_chi.html';
			break;	
		}

		case'flip':{
			window.location = 'prod_flip.html';
			break;	
		}

		case'overview':{
			window.location = 'overview.html';
			break;	
		}

		case'helpme':{
			window.location = 'help_me.html';
			break;	
		}

		case'hello':{
			window.location = 'hello_edward.html';
			break;	
		}

		case'index':{
			window.location = 'index.html';
			break;	
		}

		default:{
			break;
			window.location = 'index.html';
		}
	}
}


function scaleAni (_computerCenter){
	var scaleAnimation = new TimelineMax();
		scaleAnimation.to($('.computer_'+_computerCenter).find('.ani_scale') ,.5 ,{scale:1 ,ease:Back.easeOut})
	    	          .to($('.computer_'+_computerCenter).find('.illustrator') ,.5 ,{scale:1 ,autoAlpha:1 ,ease:Back.easeOut} ,'-=.5')
	    	          .to($('.computer_'+_computerCenter).find('.screen') ,.5 ,{autoAlpha:1 ,ease:Quart.easeOut ,onComplete:function(){
	    	          	computerHover = true;
	    	          }} ,'-=.5');
}

function resetAni (){
	var resetAni = new TimelineMax();
		resetAni.to($('.ind_prod_show .row').find('.ani_scale') ,.5 ,{scale:.8 ,ease:Back.easeOut})
	    	    .to($('.ind_prod_show .row').find('.illustrator') ,.5 ,{scale:.8 ,autoAlpha:0 ,ease:Back.easeOut} ,'-=.5')
	    	    .to($('.ind_prod_show .row').find('.screen') ,.5 ,{autoAlpha:0 ,ease:Quart.easeOut} ,'-=.5');
}





sectionReisze = function(id ,val ,center ,centerId){
	var _windHeight = $win.height();

	if(val == ''){
		val = 0;
	}
	var result = _windHeight+val;

	if(center && _windHeight > 768){
		$(id).css({height:_windHeight});
		$(centerId).css({  marginTop: $(centerId).height()*0.15  });
	}else if(_windHeight <= 768){
		$(id).css({height:result});
		$(centerId).css({  marginTop: 0  });
	}
}