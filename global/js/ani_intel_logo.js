var _positonX;

$(function(){
	/*-------------------------------------------------

						intel logo

	--------------------------------------------------*/
	TweenMax.set('.fix_intel' ,{autoAlpha:0 ,bottom:-20});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if(scroll > $('.prod_list').offset().top){
			TweenMax.to('.fix_intel' ,.5 ,{autoAlpha:1 ,bottom:20 ,ease:Quart.easeOut});
		}else if(scroll < $('.prod_list').offset().top-100){
			TweenMax.to('.fix_intel' ,.5 ,{autoAlpha:0 ,bottom:-20 ,ease:Quart.easeOut});
		}
	});


	var intervalImg;
	var repeatImg;
	var _ButtonOver = [false,false,false,false];
	var _thisPlay = true;

	$('.plus_txt_box').on('mouseenter mouseleave',function(e){
		var _mouse = e.type;
			_positonX = 0;

		var $this = $(this).parent(),
			_thisIndex = $this.index(),
			_thisAni = $this.find('.point_ani'),
			_thisframes = $this.find('.point_frames'),
			_framWidth = _thisframes.width(),
			_thisWidth = _thisAni.width();

		if(_mouse == 'mouseenter'){
			_ButtonOver[_thisIndex] = true;
	    }else if(_mouse == 'mouseleave'){
	    	_ButtonOver[_thisIndex] = false;
	    }

	    checkAni(_ButtonOver[_thisIndex] ,_thisIndex ,_thisWidth ,_framWidth ,_thisframes);
	});

	function checkAni( Onthis ,_thisIndex ,_thisWidth ,_framWidth ,_thisframes){
		switch(Onthis){
			case true :
				var _thisFrames = Math.floor(_framWidth/_thisWidth);

				if(_thisPlay){
					_thisPlay = false;
					intervalImg = setInterval(function(){
						_x = (_thisWidth*_positonX)*-1;
						_positonX++;

						if(_positonX >= _thisFrames){
							_positonX = 0;
							if(Onthis){
								clearInterval(repeatImg);
								clearInterval(intervalImg);
								repeatImg = setTimeout(function(){
									_thisPlay = true;
									checkAni( Onthis ,_thisIndex ,_thisWidth ,_framWidth ,_thisframes);
								},1500);
							}
						}

						_thisframes.css({
							'left' :  _x
						});
					} ,50);
				}

				break;
			

			case false:
				clearInterval(repeatImg);
				clearInterval(intervalImg);
				_thisframes.css({
					'left' :  0
				});
				_thisPlay = true;

				break;
			
		}
	}

	// $('.plus_txt_box').on('mouseenter mouseleave',function(e){
	// 	var _mouse = e.type;
	// 	_positonX = 0;

	// 	var $this = $(this).parent(),
	// 		_thisIndex = $this.index(),
	// 		_thisAni = $this.find('.point_ani'),
	// 		_thisframes = $this.find('.point_frames'),
	// 		_framWidth = _thisframes.width(),
	// 		_thisWidth = _thisAni.width();

	// 	if(!_IE8){
	// 	    if(_mouse == 'mouseenter' && _playOn){
	// 	    	_playOn = true
	// 	    	_ButtonOver[_thisIndex] = true;
	// 	    }else if(_mouse == 'mouseleave'){
	// 	    	_ButtonOver[_thisIndex] = false;
	// 	    }

	// 	    over(_thisIndex ,_thisWidth ,_framWidth ,_thisframes);
	// 	}
	// });

	// function over(ind ,_thisWidth ,_framWidth ,_thisframes){
	// 	if(_ButtonOver[ind] && _playOn){
	// 		_playOn = false;
	// 		repeat(ind ,_thisWidth ,_framWidth ,_thisframes);
	// 	}else if(!_ButtonOver[ind]){
	// 		_playOn = true;
	// 		clearInterval(intervalImg);
	// 		_thisframes.css({
	// 			'left' :  0
	// 		});
	// 	}
	// }

	// function repeat(_thisIndex ,_thisWidth ,_framWidth ,_thisframes){
	// 	var _thisFrames = Math.floor(_framWidth/_thisWidth);

	// 	repeatImg = function(){
	// 		_x = (_thisWidth*_positonX)*-1;
	// 		_positonX++;

	// 		if(_positonX >= _thisFrames){
	// 			_positonX = 0;
	// 			if(!_playOn){
	// 				clearInterval(intervalImg);
	// 				setTimeout(function(){
	// 					_playOn = true;
	// 					 over(_thisIndex ,_thisWidth ,_framWidth ,_thisframes);
	// 				},1000);
	// 			}
	// 		}

	// 		_thisframes.css({
	// 			'left' :  _x
	// 		});
	// 	}		

	// 	intervalImg = setInterval(repeatImg ,50);
	// }


	


});

