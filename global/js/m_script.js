var TouchMove;


$(function(){

    loading();
    
    function loading(){
        var loading = '<div id="loading-box"><div class="circle"> <div id="loading"> <span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span> </div> <div class="rodny"></div> </div></div>';
        $('body').append(loading);
        $('#wrapper').imagesLoaded(function(){
            TweenMax.to('#loading-box' ,.8 ,{autoAlpha:0 ,ease:Quart.easeOut ,onComplete:function(){
                $('#loading-box').remove();
            }});
        });
    }


    var _navHeight = $('.show_nav_box .inner').height();
    var _specsHeight;
    
    $(window).resize(function(){
        TweenMax.set('.ani_specs' ,{height:0 ,overflow:'hidden'});
    }).resize();


    // 漢堡選單 click 後 sub menu 展開效果
    $('.burger_nav').click(function(e){
        e.preventDefault();
        $('#navi').toggleClass('open_show');
        if($('#navi').hasClass('open_show')){
            TweenMax.to('.show_nav_box' ,.8 ,{height:_navHeight ,ease:Quart.easeOut});
        }else{
            TweenMax.to('.show_nav_box' ,.5 ,{height:0 ,ease:Quart.easeOut});
        }
    });

    //產品頁detail展開
    $('.btn_spec').click(function(e){
        e.preventDefault();
        TweenMax.to('.ani_specs' ,.8 ,{height:$(this).closest('.prod_info').next().find('.prod_specs').outerHeight() ,overflow:'none' ,ease:Quart.easeOut});
        TweenMax.to('body,html' ,.5 ,{scrollTop:$(this).closest('.prod_info').next().offset().top ,ease:Quart.easeOut});
    });


    var _rowLenght = $('.ind_slider .row').length-1;
    var _cur = 0;

    TweenMax.set($('.ind_slider .row').eq(_cur),{zIndex:10});

    var _touch = false;
    


    TouchMove = function (dire){
        switch(dire){
            case 'left':{
                _origin = '100%';
                _left = '-100%';

                _cur = _cur+1;
                _next = _cur-1;
                
                if(_cur > _rowLenght){
                    _cur = 0;
                }

                if(_next ==_rowLenght){
                    _next = _cur+1;
                }

                _touch = true;
                break;
            }

            case 'right':{
                _origin = '-100%';
                _left = '100%';

                _cur = _cur-1;
                _next = _cur+1;
                
                if(_cur < 0){
                    _cur = _rowLenght;
                }

                if(_next == 0){
                    _next = _cur-1;
                }

                _touch = true;
                break;
            }
          }

        TweenMax.set($('.ind_slider .row'),{left:0});
        TweenMax.set($('.ind_slider .row').eq(_next).siblings() ,{left:_origin,onComplete:function(){
            TweenMax.to($('.ind_slider .row').eq(_cur) ,.5 ,{left:0});
            TweenMax.to($('.ind_slider .row').eq(_next) ,.5 ,{left:_left});
            
        }});

        $('.dot_nav li').removeClass('active').eq(_cur).addClass('active');
    }


    // navi click 後跳頁的動作
    $('.navi a').click(function(e){
        e.preventDefault();
        var _ind = $(this).attr('href').slice(1);
        navClick(_ind);
    });


    $('.btn_back_top').click(function(e){
        e.preventDefault();
        TweenMax.to('body,html' ,.8 ,{scrollTop:0 ,ease:Quart.easeOut});
    });

    $('.ind_prod_1 a').click(function(e){
        e.preventDefault();
        navClick('t100ha');
    });

    $('.ind_prod_2 a').click(function(e){
        e.preventDefault();
        navClick('chi');
    });

    $('.ind_prod_3 a').click(function(e){
        e.preventDefault();
        navClick('flip');
    });

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

        default:{
            window.location = 'index.html';
            break;
        }
    }
}