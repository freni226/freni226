var winWidth =  $(window).width();
var winHeight = $(window).height();
var isIE=navigator.appName.indexOf("Internet Explorer")!=-1;var ie_version;var ie_renderVersion;var ie_compatibilityMode=false;if(isIE){var ua=navigator.userAgent;var ieRegex=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(ieRegex.exec(ua)==null)this.exception="The user agent detected does not contai Internet Explorer.";ie_renderVersion=parseFloat(RegExp.$1);ie_version=ie_renderVersion;if(ua.indexOf("Trident/7.0")>-1){if(ua.indexOf("MSIE 8.0")>-1){ie_compatibilityMode=true;ie_version=11}}else if(ua.indexOf("Trident/6.0")>-1){if(ua.indexOf("MSIE 7.0")>-1){ie_compatibilityMode=true;ie_version=10}}else if(ua.indexOf("Trident/5.0")>-1){if(ua.indexOf("MSIE 7.0")>-1){ie_compatibilityMode=true;ie_version=9}}else if(ua.indexOf("Trident/4.0")>-1){if(ua.indexOf("MSIE 7.0")>-1){ie_compatibilityMode=true;ie_version=8}}else if(ua.indexOf("MSIE 7.0")>-1)ie_version=7;else ie_version=6}
if (!window.console) console = {log: function() {}};
//////
$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}



//
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


var Zenui = function () {
    var runAnimation = !isMobile.any();   
    var breakS = 480;
    var breakM = 720;
    var screenSize = 'l';

    // 
    if($(window).width()<breakM){
        screenSize = 'm';
    }

    if($(window).width()<=breakS){
        screenSize = 's';
    } 
    //screenSize = 's';    

    if(isIE && ie_version<10){
        runAnimation = false;
    }

    var intro = function(){

        var scope = $("#special-sectionOverview #section-intro");
        var isReady = false; //確認是否載入完成
        var isPlayed = false; //控制是否只播一次
        var target = $(".logo img",scope);
        //
        var init = function(){
            imagesLoaded( scope, function( instance ) {
                prepare();
                isReady = true;

                if(isMobile.any()){
                    display();
                }else
                {
                    //如果一進來就看得到zenui，就執行動態,500 可依你們的需求調整
                    if($(window).height() > (scope.position().top + 500)){
                        display();
                        isPlayed = true;                    
                    }
                }
            });

            var introOffset;

            //當滑到畫面高度的50%時，zenui 會執行動態
            if( winWidth > 1367 ){
                introOffset = $(window).height()/2
            }else{
                introOffset = $(window).height()/2
            }

            var waypoints = scope.waypoint({
              handler: function(direction) {
                if(!isReady)
                    return;

                if(!isPlayed){
                    switch(direction){
                        case "up":
                            display();
                        break;

                        case "down":
                            display();
                        break;
                    }
                }
              },
              offset:introOffset
            })
        }

        var prepare = function(){
            var target = $(".logo.hidden-xs",scope);
            TweenMax.set(target,{opacity:0});
        }

        var display = function(){

            var tl = new TimelineMax();

            if(isMobile.any()){
                if(!isPlayed){
                    
                    var targetH1 = $("h1",scope);
                    var targetH2 = $("h2",scope);
                    var targetp = $("p",scope);
                    tl.add( [TweenMax.fromTo(targetH1,.7,{y:0,opacity:1,display:"block"},{ease: Sine.easeOut, y:0,opacity:1})
                        ,TweenMax.fromTo(targetH2,.7,{y:0,opacity:1,display:"block"},{ease: Sine.easeOut, y:0,opacity:1,delay:.2})
                        ,TweenMax.fromTo(targetp,.7,{y:0,opacity:1,display:"block"},{ease: Sine.easeOut, y:0,opacity:1,delay:.4})
                        ]);
                 isPlayed = true;
                }
            }else{
                prepare();
                var target = $(".logo.hidden-xs",scope);
                tl.add( TweenMax.fromTo(target,.5,{x:-50,opacity:0,display:"block"},{ease: Sine.easeOut, x:0,opacity:1}));
                 isPlayed = true;
            }
            //
            tl.play();
        }


        init();
    } 
    var banner = function(){

        var scope = $("#special-sectionOverview #banner");
        var isReady = false;
        var init = function(){
        }


        init();
    } 


    var ui = function(){

        var scope = $("#special-sectionOverview #ui");

        var deviceNum = 18000000;
        var appsDownloadedNum = 150000000;
            var played = false;
        //
        var init = function(){
            imagesLoaded( scope, function( instance ) {
                display();
            });


            var uiOffset;
            if( winWidth > 1367 ){
                uiOffset = '50%';
            }else{
                uiOffset = '30%';
            }
            var waypoints = scope.waypoint({
              handler: function(direction) {
                switch(direction){
                    case "up":
                        display('up');
                    break;

                    case "down":
                        display('down');
                    break;
                }
              },
                offset: uiOffset
            })
        }
        //
        var display = function(a_str){
            //
            if(!runAnimation){
                var target = $(".img-responsive",scope);
                TweenMax.set(target,{y:0});
                return;
            }

            destory();
            var target = $(".img-responsive",scope);

            var square1 = $(".square span",scope);
            var square2 = $(".square b",scope);
            var tl = new TimelineMax();
            switch(a_str){
                case 'up':
                    tl.add( TweenMax.fromTo(target,1,{y:0},{ ease: Expo.easeOut, y:50}));
                break;

                case 'down':

                    if(!played){
                        var obj = {};
                        obj.start = 0;

                        var time = 2;
                        TweenMax.to(obj,time,{start:deviceNum,ease: Expo.easeIn,onUpdate:function(){

                            $(".square",scope).eq(0).find("b").html(Math.round(obj.start)).digits();

                            var html = $(".square",scope).eq(0).find("b").html();
                            html += " <small>+</small>";
                            $(".square",scope).eq(0).find("b").html(html);
                        }});
                        var obj2 = {};
                        obj2.start = 0;
                        TweenMax.to(obj2,time+2,{start:appsDownloadedNum,ease: Expo.easeInOut,onUpdate:function(){
                            $(".square",scope).eq(1).find("b").html(Math.round(obj2.start)).digits();

                            var html = $(".square",scope).eq(1).find("b").html();
                            html += " <small>+</small>";
                            $(".square",scope).eq(1).find("b").html(html);
                            //$(".square",scope).eq(1).find("b span").html(Math.round(obj2.start)+" <small>+</small>");
                        }});

                        played = true;
                    }

                    tl.add( [TweenMax.fromTo(target,1,{y:50},{ ease: Expo.easeOut, y:0})
                        ]);
                break;
            }
            tl.play();
        }
        //
        var destory = function(){
            var target = $(".img-responsive",scope);
            TweenMax.set(target,{y:100});
        }
        //
        init();
    }

    var realtime = function(){
        //
        var scope = $("#special-sectionOverview #realtime");
        var isReady = false;
        //
        var init = function(){
            //
            imagesLoaded( scope, function( instance ) {
                //console.log("realtime imagesLoaded");
                prepare();
                display();
            });
            //
            // var waypoints = scope.waypoint({
            //   handler: function(direction) {
            //         switch(direction){
            //             case "up":
            //             break;

            //             case "down":
            //                 prepare();
            //                 isReady = true; 
            //                 display();
            //             break;
            //         }
            //   }
            // })
        }
        //
        //
        var display = function(){

            if(!runAnimation){
                var target = $("li",scope);
                TweenMax.set(target,{opacity:1});
                return;
            }
            var target = $("li",scope);
            TweenMax.set(target,{opacity:1});
            return;
            prepare();
            //
            var target1 = $("li",scope).eq(0);
            var target2 = $("li",scope).eq(1);
            var target3 = $("li",scope).eq(2);
            var target4 = $("li",scope).eq(3);
            var target5 = $("li",scope).eq(4);
            //
            var tl = new TimelineMax();
            tl.add( TweenMax.fromTo(target1,.3,{x:50,opacity:0},{ease: Sine.easeOut, x:0,opacity:1}));
            tl.add( TweenMax.fromTo(target2,.3,{x:50,opacity:0},{ease: Sine.easeOut, x:0,opacity:1}));
            tl.add( TweenMax.fromTo(target3,.3,{x:50,opacity:0},{ease: Sine.easeOut, x:0,opacity:1}));
            tl.add( TweenMax.fromTo(target4,.3,{x:50,opacity:0},{ease: Sine.easeOut, x:0,opacity:1}));
            tl.add( TweenMax.fromTo(target5,.3,{x:50,opacity:0},{ease: Sine.easeOut, x:0,opacity:1}));
            //
            tl.play();
        }
        //
        var prepare = function(){
            var target = $("li",scope);
            TweenMax.set(target,{opacity:0});
        }
        //
        init();
    }

    ///
    var new_zenui = function(){
        var scope = $("#zenui-func");
        var targetGallery = $(".gallery",scope);
        var total = $("li",targetGallery).length;
        //
        var swiffyobject = {"internedStrings":["::::31n861c","PACKAGE",":::a:860ia660e:a:860Ic","::::::6Y:","methods","::::::1X:"],"tags":[{"frames":[],"scenes":[{"name":"Scene 1","offset":0}],"type":23},{"bounds":[{"ymin":0,"ymax":9860,"xmin":0,"xmax":5660}],"id":1,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":["#2"]}],"flat":true,"type":1},{"id":1,"matrix":0,"type":3,"depth":1},{"classes":[{"ns":3,"cinit":0,"ctraits":[],"name":1,"init":3,"traits":[{"writable":true,"name":3,"value":0,"type":4,"kind":"specials"},{"name":5,"value":1,"kind":"#4"},{"name":6,"value":2,"kind":"#4"}],"supertype":2}],"methods":[{"exceptions":[],"locals":1,"traits":[],"params":[],"code":"0DBH","type":0,"optionals":[]},{"exceptions":[],"locals":1,"traits":[],"params":[],"code":"0DDQYAdoA9BmA2AIZglhCkc\u003d","type":0,"optionals":[]},{"exceptions":[],"locals":1,"traits":[],"params":[],"code":"0DBdC08LAEc\u003d","type":0,"optionals":[]},{"exceptions":[],"locals":1,"traits":[],"params":[],"code":"0DDQSQBdDCQA0GYFJDzQZgZPDARH","type":0,"optionals":[]},{"exceptions":[],"locals":1,"traits":[],"params":[],"code":"0DBlAGANMGAOMGAPMGAQMGARMGASMGACMGACWAAdHR0dHR0daAFH","type":0,"optionals":[]}],"scripts":[{"init":4,"traits":[{"writable":true,"name":1,"value":0,"slot":1,"kind":"classes"}]}],"multinames":[{"ns":1,"name":2,"kind":7},{"ns":2,"name":4,"kind":7},{"ns":4,"name":7,"kind":7},{"ns":2,"name":8,"kind":7},{"ns":5,"name":9,"kind":7},{"ns":5,"name":10,"kind":7},{"ns":4,"name":11,"kind":7},{"ns":2,"name":12,"kind":7},{"ns":4,"name":13,"kind":7},{"ns":4,"name":14,"kind":7},{"ns":4,"name":15,"kind":7},{"ns":4,"name":16,"kind":7},{"ns":4,"name":17,"kind":7},{"ns":6,"name":19,"kind":7},{"ns":2,"name":20,"kind":7},{"ns":2,"name":21,"kind":7},{"ns":2,"name":22,"kind":7},{"ns":2,"name":23,"kind":7}],"namespacesets":[],"strings":["","draw_fla","MainTimeline","flash.display","MovieClip","draw_fla:MainTimeline","","swfStage","Stage","frame1","frame61","stage","StageScaleMode","NO_SCALE","scaleMode","stop","addFrameScript","Object","flash.events","EventDispatcher","DisplayObject","InteractiveObject","DisplayObjectContainer","Sprite"],"type":18,"uints":[0],"ints":[0],"namespaces":[{"name":1,"kind":"#1"},{"name":3,"kind":"#1"},{"name":5,"kind":"PROTECTED"},{"name":6,"kind":"#1"},{"name":1,"kind":"PACKAGE_INTERNAL"},{"name":18,"kind":"#1"}]},{"references":[{"id":0,"name":"draw_fla.MainTimeline"}],"type":19},{"type":2},{"type":2},{"type":2},{"type":2},{"type":2},{"type":2},{"type":2},{"type":2},{"id":2,"height":771,"width":329,"data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAMDAUkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5/ooooAKKKKACiiigAruvAPwx1XxncQ3MitaaNubfdnGX29VRepOeN33Rg9SNpyPA/hWXxh4ot9LQskA/e3MikApECNxGe5yAODyR2zX1vptha6PpkFlZwrFbwII4oxnhQOOTyfqeTWcp20NIwurnO6N8LvBmh2/lpoltdOyqry3q+ezEd8NkKTnnaAPyFdbvRRhVAHbAxUJLMxPU0bGx1rFybN1TS3OX8X/D7w/4xtJxcWsdtqLr+7v4owJFYDgt03jjGD26YOCPmbxh4UvfBviCTSr10k+USQzJ0ljJIDY7Hggj1B6jBP1+QR1rjviL4Ti8X+Fri3WFG1K2Uy2UmBu3jkoDkYDAbeTjoewq4TtoyZ076o+U6KKK3OYKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiitLw/pL674h0/S0En+lXCRM0abiik/M2PYZJ9hQ9BpXdj6C+CPhsaT4Q/tOWNlutUbzTvUqREpIQYPY/MwIAyHHXAr0stvlPovAqGzhitbZIYI0ihhQJHGi4VVAwAAOgApYT0/M1yy1Z1xVkWkSnkcUimlJ4oIbZE44qo/Eq+h4q27DFUpj86Y/vUFxPlf4maUNI+IWrwqsgjml+0ozj73mAMcccgMWH4Y7VyVepfHaCRfF9hcmMiKSxCK+OCyyOSPwDL+deW10Q+FHNUVpMKKKKogKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK9L+B+mrd+OJLySMstlau6PnAV2IQfXKl680r3L4B2Ekem61qLFPKmmjgQZ+YMgLNn2/eL+tRU+E0opc+p7RETgjPXrTYjg1GH2gnqaZG+RuBrBbnY42RfDdKkc4FVFfpU0j/LziqsZNakUj1TdyXXnvUrtVWRtuWzUs0ijxr49ctoB/6+f/AGlXjde0fHa3ke00S5A/dRvNGx92CEf+gGvF63ptOJy1otT1CiiirMgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr6U+DtlFafDi0mjzvu5pZpMn+IOY+PwRa+a6+r/A1pDY+AdChgTYjWUcpGSfmdd7Hn1ZifxrOpsb4de8b7SBRTI3y+1c/NyKilPFQrIY+ucHg1yc1meoqXNE0kYsQAO9W2XAG7rg1nRXAG0Bg4PQg4P41ObkFAdjnsMtWyqROOdKd9hsig9Dz2FUZGVt2OkfzFh3PYfSn3NyoUgkcj7q9D9TVEu7tk8Z7DpisZ1E3ZHTSoO12effGvnwbZH/p/T/0XJXhFfQnxesvtXgCSbdj7JcRzY9ckpj/AMf/AEr57rqov3Tz8SrTCiiitTnCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvsuG2itLWG2gjWOGFFjRFGAqgYAH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","mask":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUkAAAMDCAYAAAAv1ueLAAAr/ElEQVR42u3dCbitY9348a7DMc/zEJmSoZQmQ4QUJRIplQxFmZLm8Dc1KSkpFClTNCgSeTWKlAyFSFHJHJF5ns79/91nLcc5x157r73XetZ6hs/3ur7vdF3v+9b9/NbXXut5nvt+XkrpeRzVucLnh2uGbwzfGm4evqn9378sXDKcZK3I+mkRnuv84YvDd4UHhd8NLw5vC+8PH0zP8kh4c3hB+Plwo3BWa0iKZN2cN9wwPCQ8O/x3mhg5oMeEr7KmpEjWwTnDbcNzwsdT/7gz3MGAkSJZZfNfjj9NxXJk+69Uw0aKZKX8VHhfGgynhosZNlIkq3JT5tg0eE4KFzRwpEiWPZCnpuFxmIEjRbKs5sdyjkvD5YlwN0NHimQZ/XQqB/mu9wYGjxTJMrljKhfnh/MYPlIky+Aq4S2pfBxs+EiRHLazhD9I5eSm1Hof3BCSIjk035XKzYEGkBTJYT7uc3XJI3lNuLghJEVyGH4oVYNdDCEpkoM27+14bUUieaY73aRIDtr9U3W4K1zVIJIiOSiXCP+SqsWOBpEUyUH5iXBKxSJ5SjiHYSRFsmjnDi9N1eOf7d9RDSQpkoX67tTf3cUHxWPh2oaRFMmiPTtVl70MIymSRbp6eHeFI3lCOLuBJEWyKL+Uqs0FnpckRdJjP53JD78vYyBJkSzCHSv42M/M3BNubCBJkey3k8LjU/XJkX+fgSRFst8uH/4j1YN9DSQpkv1281QfvmEgSZHstwfVKJJ5R6BZDCUpkv1y0fCPNYpkfgxoQUNJimS/XCN8skaRvCpcyVCSItkvd0j14o5wLUNJimQ/nC08pmaRfDjc1FCSItkPFwovrlkk825A2xpKUiT74QrhDTWLZN7m7b2GkhTJfvjW9l9edeKJ8P2GkhTJXs3PEn4h1Y+nw48YSlIke3VyeFqqJ/sbSlIke3WB1Hrwuo4cYihJkezVl4c31zSSRxhKUiR79d3tmxx15GhDSYpkr+6X6ssxhpIUyV79Vo0jebyhJEWyF+cNf1HjSJ6SbJdGimQPrlbjmzap/WjTbAaTFMmJ+vrwoRpH8pz2X8uGkxTJCZnfbX68xpHMz38uajBJkezlzvaUGkfyinBpg0mK5ESc1L6xUWfy760rGkxSJCfi/OFFNY/kf8OXGExSJCfiC8Mbax7J/4XrGUxSJCfiK8M7ax7JB8OtDCYpkhNx65o//pN5NLUOODOcpEiO271Ta2PaOpOPyN3NYJIiORGPTs3AxrukSE7IXzQkkl81mKRIjte8G/llDYnkyQaTFMnxmh+w/ldDIvmrZCcgUiQn8PjPfxoSyfxq4uyGkxTJ8bhN+EhDInlduIjhJEVyPO6VmkN+f3t1w0mK5Hj8WoMimd/fXsdwkiI5Hk9tUCTvDd9gOEmR7NbJqbVjd1N4LHyX4SRFslsXC/+UmsXHDCcpkt26SoOekXyGzxpOUiS7daPwvoZF8kjDSYpkt+b9FZ9oWCRPN5ykSHbrnql5/C61zvQxpKRIjul+DYzkleHCBpQUyW48tIGRvD5c1YCSIjmWeTec7zUwkveEGxpQUiTHcq7wZw2M5FPhtgaUFMmxXCq8NDWTjxtQUiS7eZD83w2N5FEGlBTJsVwzNWez3Zk5I7XeWzeopEh2NO+G82RDI3l+svkuKZJjuEVqLleHyxtSUiRH8+0NjuRN4UsMKSmSo7l7gyN5Z7iWISVFcjQ/3OBIPpw8UE6K5BgelJrNFoaUFMnR/GrDI+kYB1IkR/Wohkdyd0NKiuRoHtvwSDrrhhTJjs4afqfhkfykISVFcrRt0r7d8EgeZEhJkexkPr7gWw2P5JcMKSmSbtx0xk5ApEiO6pcbHskT2r/NGlZSJEf00IZH8rRwToNKimQnP9PwSJ4VzmNQSZH07vbI/Dpc0KCSItnJ9zY8kheFixtUUiQ7+baGR/Ly8PkGlRTJTr45Nff4hszfwxUMKimSnXx9+FiDI/nP8IUGlRTJTq4XPtjgSP4rXNmgkiLZySYfKZu5LXyxQSVFspMrhn9rcCQfCl9tUEmR7OQS4R8bHMknwtcYVFIkO5nfNjm3wZF8NNzAoJIiOdp2ad9rcCQfFklSJMfy6w2O5JRwI4NKiuRofi41m80MKimSo7l/wyP5ToNKiuRofqThkdzVoJIiOZq7NDySextUUiRHc/uGR/LjBpUUydFs+p6SnzGopEiO5q4Nj+QRBpUUSb9Jdubb4WTDSopkJ9/T8EjmExPnMqykSI4WySkNjuTZ4XyGlRTJTu7c8L8kfxkuZFhJkezkTg2P5PnhooaVFMlObtfwSF4ZLmNYSZHs5Lbh0w2O5M2ptUO7gSVFckR3aHgk707OuSFF0iNAHclH6m5qWEmR7OQ7EnYyrKRIdnLL1DoQq8l8yrCSIjlaJB9peCTz+9uzGlhSJDtF8vGGRzIfhja3gSVFciQ3F8mpx+ouYGBJkRzJfGf34YZH8rJwSQNLiuRI5iNV7214JG8NX2ZgSZEcyQ3DexoeyUfDNxtYUiRHcv3Ueuuk6exiYEmRHMl1wjs1Mu1jYEmRHMlXh7drpGclSZEc2TXDWzQynZE8K0mK5AjmHXBu1Mh0SfgCQ0uK5MyuFl6vkVMfA3qloSVFcmZXCq/TyKlbpr3B0JIiObP5K+Y1GjmV7Q0tKZIzu0R4hT5OZX9DS4rkzC4WXqyPUzk+nM3gkiI5vYuHl+rjVM4PFza4pEhO73zhH/VxKvku/7IGlxTJ6Z0l/K0+TuV+jwGRIjmS5+jjtMeAtjG4pEhO7+TwdH2cylPhxwwuKZIzR/IsfZzG0QaXFMmZ/ak2TuOX4STDS4rk9J6sjdPIr2guZHhJkZzer2njNP4XvsrwkiI5vV/Vxmk8Er7b8JIi6S/JzjjKgRTJGTxUF2fgm4aXFMnpPUgXn3OH23k3pEhO82O6OAN/C5czwKRIPuMHwynaOMMd7o0MMCmSz7hr+LQ2TiO/nmiXclIkp7lT+KQ2zsB+BpgUyWfctv18IJ7lBANMiuQzbhE+oIsz8IdwfkNMimT29eE9ujgDt4UvN8SkSGbXC/+rizOQN+Dd3BCTIpldO7xdF5/D7oaYFMnntb9W3qqJz+FrhpgUyezKqXVSIGbkN6l1mqRhJhseyWVSa7NZzMi/whcZZFIklwyv1sTn8HC4vkEmRfL54ZWaOCK7GGRSJBfzl2RHjjPIpEjOFl6uhyNynps3pEhmL9TDEck3tFY0zKRInqWHI/Jgsrck2fhITg5/oocd2dMwk/6S/JEWduQww0yK5Mla2JHvh7MbaLLZkTxGCztyWbiUgSabHcnDtLAjeRu5VxhostmRPFgLO5JPknyrgSabHcl9tXBUdjXQZLMj+bHkWNnR+IyBJpsdyd3CJ7SwIyeEcxhqsrmR3C58VAs7kjfgXdxQk82N5NtSa/9EjEzegHdVQ002N5KbhfdrYUfyX9nrGGqy2ZG8TwtH5c2GmmxuJN8Q3quDo7KzoSabG8m1wjt1cMzHgCYZbLKZkcw3JW7TwVH5drLRBdnYSK4U3qyDo/J/4fwGm2zuX5I36uCo5HOA7AZENvgvSZEcnfys5EsMNtnMSC7ZjgA6c0v4GoNNNjOSiyRnb4/FPeEmBptsZiQXCP+gg6PyZPhug002M5Lzhb/UwTHZ22CTzYzkXOE5Gjgm9pUkGxrJ2cLTNXBMjjXYZDMjmV+3O0kDx+THyauJZCMjmf2WBo7Jr8NZDDfZzEh+TQPH5JJwQcNNNjOSh2rgmORXE1cw3GQzI3mIBo7JX8MXGW6ymZE8SAPH5KbwZYabbGYkP5GcvT0W/w03NNxkMyP5odR69Q6dyUdcvMVwk82M5K7hEzo4KvnY3fcYbrKZkdzTX5Jjkv8hspvhJpsZyd39JTkm+TfbjxtuspmRzF8jH9PBUZkS7me4yWZG8u3hIzo4ZiQPNNxkMyO5XfioDo7Jlw032cxI7uzrdlccZ7hJf0miMycYbrKZkdyq/Rwg/CVJiuQIvtONm9JGcuHwheFa4abhu8IPhB8NDwi/GB4Vfjs8MbX2Bv1mau2k/tVw39R6xGvb8HWpdX74Qj6kFMnxuUv4uAaOyfcHdD3WDvcKvxP+Obw5td4dv7f9D7Mn23fbu+Wp9v9ePhr31vCi1NpDdM/2/695fGgpkqO7gxs3XXFmgdcgH+27fXhaeFcazBtQ+f/Hnal1Wua+7b9Y7b5OkezwdduNm7E5O/X/nJs5UmvjjN+m4b4amv8yvb799d3mwhTJmdzRX5JdcUZqnS7Zr3Vfvv1b4pSS/fu8vv1132+XFMnk3e1hfd3ON1H+VvJ/v78K1/eBpki2btyI5Nic26f13r59E6UK/Cd8rw81mx7J9/m63RXn9eHr9vtS9balyz8HHOqDzSZH8oPJfpLdcH6Pv9PtWPG/2L27zsZGMp9x85QGdvWX5Pw9/AZ5fw3W4Cs+4GxiJPf2l2RXXBjON4H1XS28rkbrYMs4Ni6SH/aXZFf8MVxknGs7e/uGT53Iu7Tv6YPOJkVy3+RI2W64LFxqAj9l1JH/hRv5sLMpkTxQ/7oiv0e97DjW9aXhbTVej0vC5/vAswmR3D+V762PMnL5OKKQX1/8bgPW5AQfeDYhkgfrX1dclVqvEnazpps35CeM/O/xLT70rHskD9W/rsivEa7cxXrmTSt+37B1WcIHn3WO5Jf1ryv+Ea7exXq+rYFrc4APPuscycP1ryv+Hb5sjLWcN/x1A9cm36B6kQ8/6xrJb+hfV9wQrjnGWm7d4PU50oefdY3kt/WvK24JX51Gf3D8pAavTz5mYjkBYB0jeaL+dcUd4Xpp9LNp7mr4Gu0nAKxbJPPzfKfoX1eM9ZbJJy1RujpcXARYp0jm/RFP99nuirxR7hs6rGM++vVCSzT11M1tRYB1imR+pu9nPttdR3KTDuuY42mTkBYniADrFMk5RbJrHkitN2lGWscvWZ4ZbuCsIgSsSyTzwfTn+lx3xcPhNmnkZyP/anlmYDshYF0imXfavsBnuiseCd/V4av2Q5ZnBo4SAtYlkguk1pZXGJtHO/yFdIyleQ55Wznvc7MWkcwHW/3BZ7rrr9vvnGn9Fg2vsTTP4b40+oP3FMnK/IvN/7S/zGe6K/KxuzvNtH75v3c+0MhsLwasQyTzg7/X+jx3RX7EZ/qzXWZJHsQfjfwu9yRBYNUjuZhIdk3eYPbDacbjGe6wLB05L/V2TjlFshTm4wiu9nnu+i/JD063dh+yJKOS999cQRBY9Ui+MLzR57kr8m+Pe6RnH506z5KMSn5D6VWCwKpHMm9tdavPc9fs01631yTH8Hbz88Q2gsCqR/IF4U0+z11zYHvdPm8puuITgsCqR/LF/pIc94d+cvLYVLd8PbnDzYpH8hXhf32Wu+KJcKvwJcmOP91yamptoiIMrGwkV0utQ5wwNg+1I7mnpeian4bziQKrHMnVRbJrHgy/76v2uMhPACwsCqxyJNdNzmUZz9fthy3DuLgiXEoUWOVIrp9aZ7cARZDPKl9VFFjlSL7SjRsUyJ3hOqLAKkdyrfYgA0WQf57YVBRY5Ui+PrzXZxkF8nZRYJUjuXFqvWMLFMXOosAqR/JVfpNEwewhCqxyJPNzkv/xOUaB7CUKrHIk8/nIt/gco0A+JQqs+l+SdgFCkXwh2eSCFd8q7QafYxTIt8LZhYFVjeQi4V99jlEgx4dzCAOrGsl8DMEffY5RICcn26WxwpGcO/yFzzEK5IxwHmFgVSM5W/gjn2MUyK+So2VZ4Ug+r/2bEVAUFyXbpbHikTzK5xgF8pdwJWFglSN5qM8xCuSG1DoXSBxY2UjuH07xWUZB5NdeXyUMrHIkPxw+6bOMgsgbqKwvDKxyJPNWVo/7LKMgHgk3EgZWOZLvCh/1WUaBbCYMrHIkt23/0x4oim2EgVWO5JbhQz7HKJD3CwOrHMkNwwd8jlEgHxEGVjmSa4f3+RyjQD4qDKxyJF+W7E6OYvl/wsAqR/JF4TU+xygQu5Oz0pFcNvyTzzEK5MhwVnFgVSO5eHihzzEKJG+8O5c4sKqRXDD8pc8xCuQnqbULvkCwkpHMG++e4XOMAsm73y86ygwuEa4bvifcJ/x8+OXw2PZfoUe3/2cHhbuk1rO9+YajHc9FcmCe7HOMArkgXGaE38LfF54YXhbeHj7Wxf+tvBlLfq73xvDy8LTw0+EW4crhvCIkkkV4jM8xCiTHbOH2rK3c/qvwli6j2C0PhjeHZ4UfCtfxFV8k++kRPscokHxs8ZLh9mkw57w/Hd4f/jT8YGrtjO4RJJHsycN9jlEgz/yFNyxymD8XripQIukIB6Azt6bW2z+LCZVIjtcDfH7QIH4XvlGsRHI87p2cc4Nm8URqPVIkWiLZlR8QSTSU03z9Fslu3F0k0WB+Hy4vXiI5mnnn6Kd9VtBgLk2tR4VETCRHdHuRBNKvwqVETCRH8h3J2dtA5vvhfEImkiMdBvawzwcwlS8ImUjO7FtEEphGPj10EzETyenNO6g4ext4litT631zURPJqW6WWruoAHiWQwRNJJ8xv6J1r88EMAN3hKuLmkj6TRLozA9ETSSz2yXPSQIjkXdBX0/YRHInkQQ6crKwieSHk3e3gU78L7UOKhO4BkfyIJ8DYFQOFbdmR/IzPgPAqOTTGV8ocM2N5Dd9BoAx2VPgmhnJfIrcaeYfGJNzw7lErnmRXDC1togCMDr5yIfXilzzIpk3Gv2r+Qe64rMi17xIrhHeZPaBrrgwXEjomhXJ/PXhf2Yf6Ir7wlcLXbMi+ebU2j8PQHfsJ3TNiuTbk70kgfHwf+G8YtecSOZXEp1vA3TP7eFqYtecSB5s5oFxs7PYNSeSR5l3YNzkz80kwat/JGcLf2begXHzh3Bxwat/JPPbNheZd2DcPBa+TvDqH8nlw+vNOzAh9hC8+kcyv5J4q1kHJsRx4WTRq3ck1w7vMuvAhLgqXFr06h3JrZLztoGJkt9Ue43o1TuS7w0fN+vAhMiH5+0uevWO5KfNOdATxyfPS9Y6kkebcaAn/pI8L1nbSM4anm3GgZ64O1xH+OobycvMONAT+UiH9wpfPSOZd1e+yowDPfMN4atnJB3bAPSH3wlfPSOZj22403wDPZNf7V1R/OoXyXen1kv6AHojv5DxFvGrXyQ/araBvvFh8atfJL9groG+4eZNDSP5Q3MN9I18HvfcAlivSJ5jroG+kQ8He6UA1ieSi4QXm2ugb+TNLrYVwPpE8kXhP8010Ff2EcD6RHL91HrnFED/OEEA6xPJrcMpZhroK/knrEVFsB6R3NU8A30n37x5hQjWI5JfNM9A38nfzrYQwXpE0ma7QDHsJYLVj+Sc4VlmGSiE40Sw+pHMR2D+2SwDhfDbcD4hrHYkXxreapaBQsjPH68shNWO5OuSY2SBosjbpq0rhNWO5JbmGCgUZ95UPJJ7mGGgUA4TwmpH8tNmGCiUU8LJYljNSM6e7CMJFM0FqbXTliBWMJL5wl1ohoFCuS7N+A53/q9fEm4abhduH+4Yvr/9nzdPrYP5XiCSw/eFqXWyG4DiuDfcsx3Ek8OLwhvDh1Nr38mZyU+b3Bf+JTw9/GA7qiI5BNdoXwwAxfJwj//7OarHhxuI5GDdIHlGEqgS/0utfSpfKpKDcRczB1SS/JZc3uJwkkgW6+fMGlBZ8rfA/HjRCiJZjHOF3zdnQOW5PNxIJPvvQuEvzRdQC+4J3yOS/XXJ8GqzBdSG/DjR/uGsItkfXxbeZa6A2nFsam2mLZI9ur1ZAmrLD8IFRLI3DzZHQK35abiwSE58Y4vjzRBQe84OlxLJ8Zv/DHdnG2hOKBcXyfG5evhvswM0hh+X+at3Gf9FvSV8zNwAjSL/xFbKx4PKGMndzQvQSL4kkt35ebMCNJZ9RHJ080HpZ5oToNG8XSQ7u2pqbeAJoLnkd71fK5IjmxdmihkBGs/fw2VF8rnuKJIA2pyWWi+XiOR0ftZcAJiOQ0TyWecOzzETAKbj0dQ6yVEkwyXCf5kJADPxz3AVkUxp3fBu8wBgBM4NZ2t6JPMekl5HBNCJ/ZoeyS+bAQCjcH/7G2cjI5nP5/2JGQAwBpeE8zYxkvl0xCtdfwBd8OkmRnKd5OAvAN2R712s1bRI5u3RnnLtAXTJL8L5mxTJr7jmAMbJ7k2K5BmuN4Bxkh8yX7UJkVwyvNz1BjABjmhCJDdMrf3jAGC83JcKfnayDJHcOXzatQYwQfJpi5PrHMmDXWMAPbJZXSOZN9Q83fUF0CO/CuepYyRXTLZHA9AfdqpjJDdNrU01AaBXLg4XrVskd3RdAfSRD9Qtkoe7pgD6yF/DZeoSybzd0S9dUwBl/mtymJFcKfyH6wmgz/wtXLwOkVwvfND1BFAAe9Uhkh9xHQEUxLXhUlWO5Kzhqa4jgALZo8qRXCD8rWsIoECuSK1dxioZybwH3A2uIYCC2bGqkdzGtQMwAC4NF65iJA9y7QAMiC2qFsm879uJrhuAAfGz1MMOQcM6ruES1w3AgHgi3LxKkcwPkT/gugEYIPmRw0lVieQOrheAAXN3muBZOIMOZC7551wvAEPg8CpEcsHwHNcKwBC4IXxR2SOZ/wXe7loBGBL7lT2SmyTHxwIYHpeHS5Q5knu7RgCGyJRw27JGMu/8c4prBGDI/CCcpYyRzO9PXun6ABgy+XGgdcoYyZeHd7g+AErAZ8sYyZ2TmzYAysFV4SJli+Q3XRcAJWKHMkVyzmQncgDl4rvhbGWJ5Grhja4JgBKRX2xZqyyR3CV83DUBUDIOLEskv+xaACghF6TWnhJDjWT+zn+uawGghDwYvnbYkdwwvMu1AFBSjkqjbMg7iEh+0jUAUGL+GS4wrEjOF57nGgAoMU+mUU5ULDqSG4SPugYASs5xw4rkl6w9gApwRWqd5DrQSC6a7PoDoBo8Er510JHM70VOsfYAKsJhg4zk5PDn1hxAhTg/tfaZGEgk81k2D1tzABUib8a74SAimbdFP9l6A6gY+efBTw4ikq8JH7LeACrI6Wmmt2+K+C3yeOsMoKL8I3x+kZFcI3zMOgOoKA+EbygqkvnI2COsMYCKs39RkXxFam07BABV5qz2H319jWT+P+i3SAB14Jpw6X5HMt/RvsfaAqgBef/bdfsZyfxX5A+tK4Ca8HS4Uz8juVVq7ccGAHXhkH5FMr9d8xvrCaBm5G/Hk/oRye2SnX4A1I98iuI8vUZy/vByawmghvw5tTfh7SWSH7WOAGrK9eGqvURyufA66wigpuRt0zboJZKHWkMANSbvQbH1RCP58vBOawig5mw/0UgeZ+0ANIA9JhLJjVPraXQAqDsHjjeSsycPjgNoDkePN5JbWTMADeKkcFK3gVw4vNCaAWgQ+UDDyd1GcifrBaBhnBbO1k0gF0itQ7sBoEmcHc7VTSR3DJ+yXgAaxi/C+ccKZN4F4zJrBaCB/DZceKxIvi983FoBaCD5ZvViowVyjvAq6wSgoeQ9JRcZ6472E9YJQEP53WiRnC38lTUC0GB+P9rX7Tcnv0UC8HW741+Sx1gfAA3nl6nDI0B5y/KbrA+AhvOzcO6RIrm3tQGAdGYa4Y2b/Arib60NAEzdBWiWmSO5bvigtQGA9I00wn6S+1gXAJjKkTNHcs7w59YFAKay/8yRXDm82boAwFQ+NHMk32dNAGAaO08fyUnt798AgJQeCjedPpILptbT5QCAlG4PXz19JF+cvGUDAM9wTbj89JHc0poAwDTyNmnzTh/J3awJAEzjJ+Gsz0Qy37T5kjUBgGl8o/0H5NRIzh2eYk0AYBr7TR/J54eXWhMAmMqj4Zumj2TeP/Jf1gUApvLv8EXTR3Lt1HomCADQ+mY91/SRXC+cYl0AYCo/TtPtjpb/w/oiCQDT2G/mSG6ebLQLAKndwjfPHMltwqetDQBMvWmz4syR3MS6AMBUfhpOTiP8JukvSQBNJ9+b+VSa6QTZZyJ5j/UB0HDyQ+RbjhTJ/AjQbdYHQMP5a7jMSJFcM7zR+gBoON+ZOZDPRHK58ErrA6DBPBXu3imSCydHyQJoNtem1mY/I0Yyn7d9vDUC0GBOGimQabpNdz9njQA0lCfDd48WyewHrBOAhpLfsll8rEhullo/XAJA0zgxtc+zGS2Sq4T/tFYAGshmnQI5fSQXCM+1VgAaRn6RZsluIplv3hxrvQA0jKNG+6o9fSSze1svAA3jnaMFcuZI5o0uHrBmABpCPtvrpeOJZH7a/ArrBqAhnBnOM55IzhGebt0ANISDxwrkzJHMfsa6AWgAj4VvnEgkt7R2ABrAJam1uc+4I5l/xLzT+gGoOT8KZ5lIJBcJL7J+AGrOx7oJ5EiRzB5n/QDUmPvCtXuJ5EesIYAa86dwsV4imW/eOGIWQF35XreB7BTJNcJbrSOAmrJ7r5GcLzzPOgKoIQ+Gb+g1ktkjrSWAGpL3zV2xH5Hcw1oCqCE/DmfrRyQ3TXYEAlA/9hlPIEeL5ErhddYTQI14Ity2X5HMO/X+3JoCqBH/CV/Vr0hmv2JNAdSIC8K5+hnJfPPGMbMA6sJx4w3kWJF8fXiPdQVQE/brdySXCK+3rgBqQH6I/G39jmT2N9YWQA34R7hyEZH8urUFUAPyTZu5i4jkbuGT1hdAxfnBRALZTSQ3bn+XB4CqMiX8VFGRXC680RoDqDD3hpsVFcn84OW51hhAhcl/6K1QVCSzX7TGACrMleH8RUZy5/Z3egCoIqeGsxcZyTeFD1lnABXlwIkGsttIrhpea50BVJQti47knOGZ1hlABXk0XLfoSGa/YK0BVJC/hasMIpK7WGsAFeTs1MOd7fFEMr9587D1BlAx8rfgWQYRyfwg5jXWG0DF2KuXQI4nkvOF/2e9AVSMrQYVyXxO7TesN4AKkU9WWGdQkcx+1JoDqBAXh0sOMpKvCx+x7gAqwg/TBE5H7CWSedu0m607gIqQ72xPGmQkFw8vsu4AKsJHeg3keCOZd9E40boDqABPhFsMOpLZ/aw9gAqQfxp8yTAimZ85srckgLKTfxpcYhiRfFlqPXsEAGUm71w2zzAiuXT4F+sPoOQc3o9ATiSSeW/JH1l/ACVnj2FFMnuQ9QdQYvKd7dcOM5LvcQ0AlJhbw9WGGckNk70lAZSXS1Kf7mxPNJIvDP/pOgAoKfmd7VmHGck5kr0lAZSXT/UrkBONZPZw1wFASXlrGSL5IdcBQAm5L/Vho91+RHLr8DHXA0DJuCpcpgyRfHlq3WYHgDJxSj8D2UskFwkvdz0AlIz/V5ZIZn/qegAoGduXKZJHuB4ASsRdqc83bXqN5MddEwAl4nfhvGWK5Dbho64LgJLwrX4HstdIvjq83XUBUBIOKFsk87NI17ouAEpA3nTnbWWL5PzhH1wbACXgpnD1skUy77JxumsDoARcFk4qWySzX3BtAJSAk4sIZD8imR/c9A43gGHyVOrjmTb9juQG4d2uEYAhko+5fk1ZI7lqeKNrBGCI5EcRly5rJPNGF793jQAMkfNS67jrUkYy3006wTUCMES+WFQg+xHJ7H7hFNcJwBDIN463KXsk35G8ww1gONwbrlv2SOatie5yrQAMgSvCZcseyee3/4UCwKA5IfXxjO2iIjk5/LFrBWAI9PWM7aIimf2yawVgwOQ3bd5elUju6XoBGDDXp9YLLZWI5BtS61BwABgU54bzVCWSS4R/cc0ADJCjUsE3bfoZydnCc1wzAANkt6ID2c9IzhJ+3TUDMCD+l1rnbFUmks9rVx0ABsHVqfUzX6Ui+dp23QGgaH4Wzle1SObTE//u2gEYAJ9JrZ/5KhXJuZObNwAGw8aDCGS/IzmpXXcAKJI7wxWqGMnsluHTriGAAsk7kS9c1Ujmw8Fvdw0BFMhhqaAztgcRycXDP7qGAApkp0EFsohI5jdvvu0aAiiIR8L1qxzJ7IdcRwAFcVVqPW5Y6UjmHYHcvAFQBCcOMpBFRXLF8FrXEkAB7FuHSM4enulaAugz+RvqW+oQScc5ACiC68KV6hLJd7ueAPrML9KA3tceRCRXCW90TQH0kSMGHcgiIzln+CvXFECfmJIG/BB50ZHMHu26AugTN4cvrlskd2jXHwB65fI0oE12BxnJNcJbXFsAfeC0YQSy6EjmTXgvdW0B9Eh+PnLPOkYye6zrC6BH7g43rGsktwufdI0B9EB+nHDZukbyFeF/XWMAPXBWGuAmu4OOZP5d8reuMYAeOGBYgRxEJLOHuMYAJsjD4VZ1j+T24ROuNYAJcFtqnZ1V60jmp+RvcK0BTIBzU+s151pHcnL4Q9cawAT46jADOahIZvdzrQGMk/xa8webEsl8utk9rjmAcZAfH3xNUyKZv3I7jxvAeLggtY6DaUQks4e55gDGwXHDDuSgI7lxar2DCQBjMdRNLYYVyfnD37j2ALrgjnDNpkUye4BrD6ALLm7/YdW4SL42tV4zAoDRyId+TW5iJOdNHiwHMDYblSGQw4jkM3tMAkAnrguXbHIkVwxvNQcAOvDVsnzVHlYks4ebAwAdeFtZAjnMSG4SPmYWAMxEPqphFZFMaeHw9+YBwEzkt2xmEcmWHzYPAGZilzIFctiRXC25gQPgWf4WLi+Sz5pPPzvRXABoc2rZAjnsSGbflFovsgPAbiL5XBdI9pkEkNJNqfUMtUiO4L7mA2g8Z6bWT3AiOYL5majbzAjQWPJPbu8vYyDLEsns98wJ0Fj+k1pPu4jkKL4jfMSsAI0kP+Uyq0iObj7s51KzAjSSUt7VLlsks/ubFaBx3By+VCS78yXhLWYGaBT5rnap3tUucyTz/nEnmRmgUXyyzIEsWySz25gZoDHkB8hXFcnxuWh4idkBGsHPyh7IMkYy+3GzA9Se/AD5J0Ry4luo3WGGgFqTP+Ori+TEzHe6vmOGgFrz63AukZy4bw2fMkdAbfloFQJZ5kguEv7BHAG15PHw1SLZu58wS0AtuSBcQiT7cwPnPvME1I4DqhLIskdytvBY8wTUji1Esn++0TwBteLv4XIi2T/nCy80V0BtOLpKgaxCJLN7mCugNnxAJIs5A8cWakD1ycc0rCGS/TefoPZt8wVUnvPCBUWyGDdMHgcCqs43U0mPja1DJPP73N7AAarNDlULZJUi+cwNnCnmDKgkd6UK/h5ZtUjm15huNGtAJbk8XFoki/c4swZUkrPCOUWyeF8XPmDegMpxaBUDWcVI5hMVzzVvQOXYWSQH557JDRygSuQNtN8kkoMz//h7jbkDKsOD4QYiOdg3cI4yd0BluCG19ocVyQG6UXiv2QMqQf7m9wKRHKxzhGebPaAS/D5cWCQH7/vNHlAJfhTOKpKDd9nwX+YPKD0nVLgzlY5k9mDzB5Seo0RyeK4VPmIGgVLzaZEcnvl3jjPMIFBqDhbJ4bqdGQRKzQFJJIf+Bs5fzCFQWj4iksP3C+YQKC17i+TwfXlyBg5QVvYRyXK8z/0TswiUkn1FshxuHT5pHgFft0VyZOcOLzGPQOlw46ZE5t8+bMgLlIv9RbI8vjT8j5kESsVhIlmuGzinmkmgVBwhkuXyHeGj5hIoDUeLZLmcJ7zSXAKl4WSRLJ8HmkugNORTBOYQyXK5Qnin2QRKwe/ChUSyfP7QbAKlIP/8tbRIlvMNnMfNJzB0/h2uKpLlc5HwIvMJDJ27w3VFspzubz6BoZMfydtYJMvpmskbOMCweSrcQiTL6eTUOs4SwHDZVSTL63uSTS+AYfM5kSyviyVv4ADD5qTU2ltBJEvqV8woMFR+Hs4rkuX19ckzk8Aw+XOq6APlTYnknOFvzCkwNG4LVxfJcruHOQWGxhPhRiJZbldv/9MMwHB4n0iWf9fy480pMDQ+LZLl953tP/sBDJ5jRLL8LhNeY1aBofCD1LqJKpIl90izCgyF81Jrdy6RLLkbhA+ZV2DgXN3+NieSFfCP5hUYODelCj4r2dRI7pNsegEMmnvD9UWyGq6W7DMJDJr8h8nbRLI6+0z+xMwCA2cPkayOu5tXYODsI5LV8cXhjWYWGCgHi2S1vnIfY2aBgfK1cFaRrI5bmVlgoJwaziWS1XHJ8HJzCwyMc8L5RbJaft7cAgPj4nApkayWeSPQh80uMBD+kVrPKYtkhVww/L3ZBQbCneFaIlk9P2F2gYGQv7VtIpLVc83Ueq8UQLHkTa+3FsnqOU94lvkFBsJ2IllN32t2gYGwq0hW0xXDf5tfoHA+JZLV9bvmFyicw1KFXk0UxhndMdmMFyiafLTzHCJZTRdITlMEiubscCGRrK7fMMNAofwhtfZNEMmKuln4gDkGCiOfmriySFbXecPfmWOgMK4PXy6S1fYgcwwUxh2pQu9vC+LIbhDeb5aBQng8fJ1IVtv5wvPNMlAY24hk9d3THAOFsZtI1mNnoHvMMlAI+4tk9Z09PMMsA4WQT02cJJLVd2ezDBTCaal1rLNIVtxVwhvNM9B3zksVOTVRCMf+yv1D8wz0nT+Fy4lkPXyPeQb6Tt5IZnWRrIfLhjeZaaCv3BauLZL1MO97ZzNeoL/kUxO3Fsn6uFWyGS/QT54K9xLJ+rhU+HdzDfSVz4tkfZwlPNJMA33leJGsl1uYaaCv/CZV4IFy8RvfV+6rzDXQN64LVxLJenmouQb6xr3hm0WyXm4cPmq2gb5QiTvcwjc+8zGYF5ttoG8cKpL18zBzDfSNn6TW0yMiWSNf2/4tBUDv5OePlxPJ+r2meLnZBvrCfeHrRbJ+Hm62gb6QX/f9gEjW8yv3feYb6AtfEsn6OW94kdkG+sK57Z+xRLJmerAc6A/5zZvlRbKe73I/aL6Bnrk/3Egk6+ci4SXmG+gL7xXJenq02Qb6wtEiWU/fFT5uvoGe+XUq6bZpQtebS6fWqW8AeuPacAWRrKenmG+gZx4LNxHJerpnam35BKA3PiGS9fTF4Z3mG+iZk0Syvm/fXGq+gZ45P1xAJOvnrMmGF0A/uKX9zUwka+jW7R+eAfTGO0Synq6YPAoE9INDRLKe5odgjzPfQM+clkq2I5DA9c/tzTfQM1eEy4pkPV0jeRQI6JX8mu96Zfps/39zuHRLbmxGUgAAAABJRU5ErkJggg\u003d\u003d","type":8},{"bounds":[{"ymin":-380,"ymax":15040,"xmin":-1560,"xmax":5020}],"id":3,"fillstyles":[{"transform":"45184l::45184l60O80C","bitmap":2,"type":6}],"paths":[{"fill":0,"data":[":60O80Ca:420oa580f:a:420Oc"]}],"flat":true,"type":1},{"tags":[{"id":3,"matrix":0,"type":3,"depth":1},{"type":2}],"id":4,"frameCount":1,"type":7},{"id":4,"ratio":8,"matrix":"::::81y621k","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::81y971i","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::81y574h","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::81y431g","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::81y543f","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::81y908e","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::81y527e","type":3,"depth":8},{"type":2},{"bounds":[{"ymin":3564,"ymax":3720,"xmin":4140,"xmax":4300}],"id":5,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":210d564cb0G:0G7gb:sm1dbu8c7f8cb9c:3f2CbqXq6Db:3G0H8GbE:J:c"]}],"flat":true,"type":1},{"clip":5,"id":5,"matrix":0,"type":3,"depth":2},{"id":6,"height":146,"width":149,"data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVGOUY4NzM4RUM0NDExRTRBMUIzRkE2MjExNTg0Q0NEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGOUY4NzM5RUM0NDExRTRBMUIzRkE2MjExNTg0Q0NEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUY5Rjg3MzZFQzQ0MTFFNEExQjNGQTYyMTE1ODRDQ0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUY5Rjg3MzdFQzQ0MTFFNEExQjNGQTYyMTE1ODRDQ0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB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","type":8},{"bounds":[{"ymin":0,"ymax":2920,"xmin":0,"xmax":2980}],"id":7,"fillstyles":[{"bitmap":6,"type":6}],"paths":[{"fill":0,"data":[":::a:920ba980b:a:920Bc"]}],"flat":true,"type":1},{"tags":[{"id":7,"matrix":0,"type":3,"depth":1},{"type":2}],"id":8,"frameCount":1,"type":7},{"id":8,"ratio":15,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::81y400e","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3564,"ymax":5721,"xmin":2366,"xmax":4300}],"id":9,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":210d564cb0G:0G7gb:sm1dbu8c7f8cb9c:3f2CbqXq6Db:3G0H8GbE:J:c:77N98pa8Ngb9Hx8N7gb7F1f7F0naD8dbA5dr9gb7e8j86b8jb4h:9k7Ebu6Cu7Hb:ZW3JaX3Gb:Ks4CbrVr4Cb:4E7F1Gc"]}],"flat":true,"type":1},{"clip":5,"id":9,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":16,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::253c145e","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":4801,"ymax":5640,"xmin":2380,"xmax":3949}],"id":10,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":288c801db5I2m9L0ua3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb74b:19e94Ca85D0Ha6Q5Dc"]}],"flat":true,"type":1},{"clip":5,"id":10,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":17,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::788c735d","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3850,"ymax":5640,"xmin":2380,"xmax":4140}],"id":11,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":883c850cb3E:3E8hb:5e8f7hbQ7ll95bb3c0t0k0tb3g:4j6Lbp9Fp4Nb:0GN6Jb2C2H8D1NbIZ8D7Fb1D1D4H5Fb8CU3FUc:95E51ib5I2m9L0ua3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb74b:19e94Ca85D0Ha6Q5Dc"]}],"flat":true,"type":1},{"clip":5,"id":11,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":18,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::758c094d","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3770,"ymax":5640,"xmin":2380,"xmax":4200}],"id":12,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":417c772cb3Kn9U3hb5H6e7W5jb1Hz1H1ib:l8b1fb5c0f2h2kb2n6o15c6oay:aB7jaJ1ga2r3CaEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb1JZ7UZb2E:6Jea8HFc"]}],"flat":true,"type":1},{"clip":5,"id":12,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":19,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::194c245d","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3770,"ymax":5640,"xmin":2370,"xmax":4200}],"id":13,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":417c772cb3Kn9U3hb5H6e7W5jaHcb6Gi9W0nb5K3i5W6ub9J2k9J6lb:5e5g4kb3j1h85b1hb9u:30d6Mb8g1E1m7JapQaw:aB7jaJ1ga2r3CaEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb1JZ7UZb2E:6Jea8HFc"]}],"flat":true,"type":1},{"clip":5,"id":13,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":20,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::70z520d","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":5640,"xmin":2097,"xmax":4200}],"id":14,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb77C0o71F91caepa9C0db3H4i1N3ub4F3m4F7waC2fbA1ep9hb9d5k7x5ka7u5Qa8b5ea8s0Rb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":14,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":21,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::24v861d","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":5640,"xmin":1680,"xmax":4200}],"id":15,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb77C0o71F91caepa9C0db3H4i1N3uaS2da1Frb8Fv9G0eaZ8fa7B0fa4N6sb8L5s8L10cb:7c7d2gb4f7d8q7db3v:39d60Cap:a7u5Qa8b5ea8s0Rb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":15,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":22,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::92r280e","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":5817,"xmin":1397,"xmax":4200}],"id":16,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v07C09eb2D4o6E99ba3jxb3m8b4v8bbc:f:a45c2db6f82C25d62Gb4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":16,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":23,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::18q756e","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6071,"xmin":1360,"xmax":4200}],"id":17,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v07C09ebV1h6C9ob3Di4E3ebCjC7faw8ob7c0o2k0ob0d:4gPb9cR6d9DaeebGlk7dbu3d9f3da8cJa7cMan0cbsw1fwa5hIb9gT0j6Gbi7Bh8GaC5Fa:1Ca5ceb6f82C25d62Gb4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":17,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":24,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::03q233f","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6604,"xmin":1397,"xmax":4200}],"id":18,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v07C09eb2D4o6E39gb8g3w3r92cb3c9d8e9db8e:3h3Xa0c1Fbp9c5c2faK3cal2Cbx8b3e8bb0h:7n5Kb3f6J3f6Tb:5J9E7Qb73b88E09e38Hb4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":18,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":25,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::10t478f","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6771,"xmin":1397,"xmax":4200}],"id":19,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v07C09eb2D4o6E39gb6d7m1j8xaHhbTxT2eax7db1c6e9f3jb0l0o7y0ob6t:18c5Gb2i2F2i0ObT80B0G38Cb1I4K8N0QaFQbP1E6C4Hb85b23F30e82Hb4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":19,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":26,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::26x528f","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6981,"xmin":1388,"xmax":4200}],"id":20,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v07C09eb7G84b3F40ebn5yy74cbO2mz7vbz1f3k9lb5n7w1s7waqAb3i1e3w1ea3vAb7kF7r0Db5q6H5q23Db:0HG7LbO1I8E4Lb1E0D7O6Ga6O2EaXEbP1C0E1CbS:4DibX4EX1Lb:69D40d35Ib4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":20,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":27,"matrix":"#0","type":3,"depth":3},{"replace":true,"matrix":"::::813b482f","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6931,"xmin":1388,"xmax":4200}],"id":21,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v07C09eb7G84b3F40ebn5yy74cbO2mz7vbz1f3k9lb5n7w1s7wb1e:8g4Da0krakeaHEa9mfb88b:64e0Jb01c9J01c1Yb:2G9O5Rb2Q2L68C4Pb3K9E4V9GaMBbP8B9D8BbS:3DibX4EX1Lb:69D40d35Ib4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":21,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":28,"matrix":"#0","colortransform":"::::::O:","type":3,"depth":3},{"replace":true,"matrix":"::::150c385f","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6860,"xmin":1376,"xmax":4200}],"id":22,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v15C96db6H71b5F33ea5c94cbO2mz7vb7l95b99g95bb9q:63c7CaI2Cb5wJ60c5Ob6h9I6h0Rb:6F1I7Nb3H5G9S7Lb3K1E0S1EbD:I:a9Cga:Ba63C7fb9H4H9H3Ub:69D40d35Ib4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":22,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":29,"matrix":"#0","colortransform":"::::::0C:","type":3,"depth":3},{"replace":true,"matrix":"::::441c268f","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6860,"xmin":1376,"xmax":4200}],"id":23,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v15C96db6H71b5F33ea5c94cbO2mz7vb7l95b99g95ba6zTa4hkb5d:87b8Ib70b0K88c5Mb4p4C00d3Fb5o4C5o5Naj2Pb:6FK4Hb2C3E2O3EbH:Q:a60D:b7MD9XDb13C:29D1ca:Ba63C7fb9H4H9H3Ub:69D40d35Ib4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":23,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":30,"matrix":"#0","colortransform":"::::::5D:","type":3,"depth":3},{"replace":true,"matrix":"::::689c145f","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6860,"xmin":1310,"xmax":4200}],"id":24,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v92B09fbQ2jW16cbV4C3E1FbVS9CSbJ:RgbYtY9ia0d4xb3c3o9f9taDsbO2mz7vb7l95b99g95bb04d:32h1Sa4f9Bbqk9ckb7i:0u5Jb5l7K5l5Yb:9H0H7Pb9F8F5Q6Jb7G8B9M8BbS:6Ccb9Dh8F5cb20F9m63H5qb9H4H9H3Ub:69D40d35Ib4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":24,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":31,"matrix":"#0","colortransform":"::::::0F:","type":3,"depth":3},{"replace":true,"matrix":"::::900c028f","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6860,"xmin":1310,"xmax":4200}],"id":25,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":100c127fa:aaG:agAc:12e54Wb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v92B09fbQ2jW16cbV4C3E1FbVS9CSbJ:RgbYtY9ia0d4xb3c3o9f9taDsbO2mz7vb7l95b99g95bb91c:06h9Qan:b4g:5x4Lb1n3J0p9Lb0f9F16c5Pb9u2H9u0Ob:5D0D4Gb7C8B0P8Ga50F:a:bbSA6CAb6G:7K9bb7Bt4C8db80E9l14H4pb9H4H9H3Ub:69D40d35Ib4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":25,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":32,"matrix":"#0","colortransform":"::::::5G:","type":3,"depth":3},{"replace":true,"matrix":"::::076d921e","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6860,"xmin":1320,"xmax":4200}],"id":26,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v92B09fbP6iV91bbX6D0F6DbA:A:b7B:6D5cbS5cS9hah1wbt8t7h6ubO1mz5vb7l95b99g95bb04d:32h1Sb1l4E48c3Qb4h4D3o8Gb8d2d7m2db7f:9n5Ca2C6Da7N9Ub8d3C5k1Jb5l7L5l6Pb:8G8H8Gb5F:7Q2db0Gz7M2faBDa27C3gb63G4q40J5ub9H4H9H3Ub:69D40d35Ib4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":26,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":33,"matrix":"#0","colortransform":"::::::0I:","type":3,"depth":3},{"replace":true,"matrix":"::::219d829e","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6860,"xmin":1320,"xmax":4200}],"id":27,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v92B09fbP6iV91bbX6D0F6DbA:A:b7B:6D5cbS5cS9hah1wbt8t7h6ubO1mz5vb7l95b99g95bb04d:32h1Sb1l4E48c3Qb4h4D3o8Gb8d2d7m2db7f:9n5Ca2C6Da3M8Saf:b5f:4h9Haf9Ib:8G0C4Mb4C4F9I4Fb7B:8Ekb6Cl8D8eaO2faImaOXa27C3gb63G4q40J5ub9H4H9H3Ub:69D40d35Ib4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":27,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":34,"matrix":"#0","colortransform":"::::::5J:","type":3,"depth":3},{"replace":true,"matrix":"::::332d752e","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"bounds":[{"ymin":3773,"ymax":6860,"xmin":1370,"xmax":4200}],"id":28,"fillstyles":[{"color":[-16750900],"type":1}],"paths":[{"fill":0,"data":[":612c773cb2Z:02F5mb75D9r18H22eb8T2t99B98cb8J2f3M7hb0W5v92B09fbJ3fQ9paA:b::A:b3C:4E0ibY1jY75baa1qbi3k1d2obE5j9b4rb7l95b99g95bb04d:32h1Sb1l4E48c3Qb4h4D3o8Gb8d2d7m2db7p:22d0Vb2F7G7J7PbT9C1E9Cb0D:9I7fb7F6g6H6gbK:HXbcUD7Eb5f3F8o5Hb2dI5eTbtQt0Fb:9C5C8Hb8C2E7H4Gb0CM8EMb4H:4N3la97D9jb63G4q40J5ub9H4H9H3Ub:69D40d35Ib4j0K03c84Bb5h5G8k3Kb9y0H79e3Ma::aEjb4I0k9R0xb9J0o7N6wa3I9da19C5nb2R2h0Z5mb7J3g7J2nb:8cz3hb3d5g4m5gb8q:17d2Jb0u9H97c8Va6gjb97b:60e64Db9h7O5o35Cb5e6N5e4Rb:40D72C38Eb0JZ6UZc"]}],"flat":true,"type":1},{"clip":5,"id":28,"matrix":0,"type":3,"depth":2},{"id":8,"ratio":35,"matrix":"#0","colortransform":"::::::0L:","type":3,"depth":3},{"replace":true,"matrix":"::::416d694e","type":3,"depth":8},{"type":2},{"type":4,"depth":2},{"type":4,"depth":3},{"clip":5,"id":1,"matrix":0,"type":3,"depth":2},{"id":29,"height":493,"width":283,"data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QOPaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2UyNTUxZDQtMzMzYi00NTM5LWJiMTQtOWVmOTliYWYxMGJmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRDRTI5OTA0RUNENzExRTQ4NkU5RDc1MDE3REEyQTUyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRDRTI5OTAzRUNENzExRTQ4NkU5RDc1MDE3REEyQTUyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzU4NjgwMDctOTVkNy00YjFiLWFmYTMtNjY1NWU0ODg5YjRjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NGEyOWRlNzktMzU0MS0xMTc4LWEwOGMt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\u003d\u003d","type":8},{"bounds":[{"ymin":0,"ymax":9860,"xmin":0,"xmax":5660}],"id":30,"fillstyles":[{"bitmap":29,"type":6}],"paths":[{"fill":0,"data":["#2"]}],"flat":true,"type":1},{"tags":[{"id":30,"matrix":0,"type":3,"depth":1},{"type":2}],"id":31,"frameCount":1,"type":7},{"id":31,"ratio":36,"matrix":":::::660j","type":3,"depth":3},{"id":8,"ratio":36,"matrix":"#0","colortransform":"::::::6M:","type":3,"depth":6},{"replace":true,"matrix":"::::309d140f","colortransform":"::::::S:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":":::::179j","type":3,"depth":3},{"replace":true,"colortransform":"::::::1O:","type":3,"depth":6},{"replace":true,"matrix":"::::205d569f","colortransform":"::::::7C:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":":::::623i","type":3,"depth":3},{"replace":true,"colortransform":"::::::6P:","type":3,"depth":6},{"replace":true,"matrix":"::::106d980f","colortransform":"::::::5E:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":":::::994h","type":3,"depth":3},{"replace":true,"colortransform":"::::::1R:","type":3,"depth":6},{"replace":true,"matrix":"::::011d375g","colortransform":"::::::2G:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":":::::291h","type":3,"depth":3},{"replace":true,"colortransform":"::::::6S:","type":3,"depth":6},{"replace":true,"matrix":"::::920c752g","colortransform":"::::::8H:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":":::::514g","type":3,"depth":3},{"replace":true,"colortransform":"::::::1U:","type":3,"depth":6},{"replace":true,"matrix":"::::833c112h","colortransform":"::::::3J:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":":::::663f","type":3,"depth":3},{"replace":true,"colortransform":"::::::6V:","type":3,"depth":6},{"replace":true,"matrix":"::::751c456h","colortransform":"::::::8K:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":":::::737e","type":3,"depth":3},{"replace":true,"colortransform":"#5","type":3,"depth":6},{"replace":true,"matrix":"::::672c782h","colortransform":"::::::1M:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":":::::738d","type":3,"depth":3},{"replace":true,"colortransform":"#3","type":3,"depth":6},{"replace":true,"matrix":"::::598c091i","colortransform":"::::::5N:","type":3,"depth":8},{"type":2},{"type":4,"depth":6},{"replace":true,"matrix":":::::664c","type":3,"depth":3},{"replace":true,"matrix":"::::528c382i","colortransform":"::::::7O:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":":::::17y","type":3,"depth":3},{"replace":true,"matrix":"::::461c657i","colortransform":"::::::9P:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":":::::95l","type":3,"depth":3},{"replace":true,"matrix":"::::399c915i","colortransform":"::::::0R:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":0,"type":3,"depth":3},{"replace":true,"matrix":"::::341c155j","colortransform":"::::::0S:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::288c378j","colortransform":"::::::9S:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::238c585j","colortransform":"::::::8T:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::192c774j","colortransform":"::::::6U:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::151c946j","colortransform":"::::::4V:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::114c100k","colortransform":"::::::0W:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::080c238k","colortransform":"::::::6W:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::051c359k","colortransform":"#5","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::026c462k","colortransform":"::::::6X:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::006c549k","colortransform":"::::::9X:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::989b618k","colortransform":"::::::2Y:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::976b670k","colortransform":"::::::5Y:","type":3,"depth":8},{"type":2},{"replace":true,"matrix":"::::968b705k","colortransform":"#3","type":3,"depth":8},{"type":2}],"fileSize":187455,"v":"7.2.0","backgroundColor":-1,"frameSize":{"ymin":0,"ymax":16000,"xmin":0,"xmax":10000},"as3":true,"frameCount":61,"frameRate":20,"version":27};
        //laptop
        var thumbScale = .79;
        var normalScale = .95;
        var galleryH = 608;
        var singleItemW = 309;
        var itemGap = 10;
        var doubleItemW = singleItemW*2+itemGap;
        var landscapeItemW = 608;
        var scaleRatio = 1;
        var gap = 30;
        var siblingsGap = 40;
        var playZenuiTimeline;
        var stage;
        var currentVideoAry = [];
        //
        if(screenSize=='s'){
            //mobile
            normalScale = .5;
            thumbScale = .4;
            galleryH = 498;
            gap = 15;
            siblingsGap = 20;
        }
        if(screenSize == 'm'){
            screenSize = 'm';
        }

        if(isIE && ie_version<10){
            normalScale = 1;
            thumbScale = 1;
        }
        var current = 0;
        var inited = false;
        var prevItem;
        var preX = 80;
        var usePager = false;
        //
        var swipeStart = false;

        $(window).resize(function(){
            if(!isMobile.any()){
            $(".gallery li").removeClass("on");
            moveSlide();
            }
        })
        var init = function(){

            if(isMobile.any()){
            var myElement = document.getElementById('galleryHitarea');

            var mc = new Hammer(myElement);
                // listen to events...
                //mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                mc.on("tap panstart panend panup pandown panleft panright", function(ev) {
                    
                    //myElement.textContent = ev.type +" gesture detected.";

                    if(ev.type == "panstart")
                        swipeStart = true;

                    if(ev.type == "panend")
                        swipeStart = false;
                    
                    var angle = Math.abs(ev.angle);

                    //console.log(angle);

                    var slide = false;
                    if(angle>160 || angle<30){
                        slide = true
                    }

                    //console.log(ev.type);
                    switch(ev.type){
                        case "panleft":
                        
                            if(!slide){
                                return;
                            }
                            if(swipeStart){
                                swipeStart = false;
                                if(current>=0 && current < total-1){
                                    $(".signpost li.next",scope).trigger("click");
                                }
                            }
                        break;
                        case "panright":
                        
                            if(!slide){
                                return;
                            }
                            if(swipeStart){
                                swipeStart = false;
                                if(current>=1){
                                    $(".signpost li.prev",scope).trigger("click");
                                }
                            }
                        break;

                        case "tap": 
                            var tapX = ev.pointers[0].clientX;
                            var leftX = $(window).width() * (1/3);
                            var rightX = $(window).width() * (2/3);
                            if(tapX <= leftX){
                                if(current>=1){
                                    $(".signpost li.prev",scope).trigger("click");
                                }
                            }
                            else if(tapX >rightX){
                                    if(current>=0 && current < total-1){
                                        $(".signpost li.next",scope).trigger("click");
                                    }

                            }
                            swipeStart = false;
                        break;
                    }
                });
            }

            var played = false
            var waypoints = scope.waypoint({
              handler: function(direction) {

                if(played)
                    return;

                played = true;
                switch(direction){
                    case "up":
                        playZenui();
                    break;

                    case "down":
                       playZenui();
                    break;
                }
              }
            })


            initSignpost();

            $(".caption li",scope).each(function(){
                $(this).attr("data-h",$(this).height());
            })
            //
            $(targetGallery).css("height",galleryH);
            $("li",targetGallery).css("position","absolute");

            $("li",targetGallery).css("top",0);
            $("li.landscape",targetGallery).css("top",30);
            $("li",targetGallery).css("left",0);
            $("li",targetGallery).bind("click",function(){

                current = $(this).index();
                moveSlide();
            });

            
            var startX = preX;
            $("li",targetGallery).each(function(){
                var itemW = singleItemW;
                if($(this).hasClass("double")){
                    itemW = doubleItemW;
                }
                if($(this).hasClass("landscape")){
                    itemW = landscapeItemW;
                }
                $(this).attr("data-w",itemW);
            })
           
            if(usePager){
                initPager();
            }
            else{
                $(".pager",scope).remove();
            }
            current = 0;

            moveSlide();

            $("li",targetGallery).each(function(idx){
                TweenMax.fromTo($(this),.8,{x:$(window).width()/2,opacity:0},{opacity:1,x:0,delay:.5+(idx/10),display:"block"})    
            })
        }


        var moveSlide = function(){

            //alert("moveSlide");
            if($("#zenui-func .gallery li").eq(current).hasClass("on"))
                return;
            var centerX = $(window).width()/2;
            var target = $("#zenui-func .gallery li").eq(current);
            var other = target.siblings();
            var targetW = target.attr("data-w");
            var destX = centerX - target.attr("data-x") - targetW/2;
            var slideTime = .5;
            if(!inited){
                slideTime = 0;
                inited = true;
            }
            //
            target.addClass("on").siblings().removeClass("on");
            prevItem = target;

            //caption
            var caption = $(".caption li",scope);
           
            TweenMax.to($(".caption",scope),.2,{height:parseInt(caption.eq(current).attr("data-h"))+0});
            TweenMax.to(caption.eq(current).siblings(),.3,{opacity:0});
            TweenMax.to(caption.eq(current),.3,{opacity:1,delay:.5,onStart:function(){
                $(".caption li",scope).eq(current).show().siblings().hide();
            }});
            
            //for mobile
            var total = $("#zenui-func .gallery li").length;
            var i;
            //
            var currentTarget = $("#zenui-func .gallery li").eq(current);
            var currentW = parseInt(currentTarget.attr("data-w"));
            //
            var nextTarget = $("#zenui-func .gallery li").eq(current+1);
            var nextW = parseInt(nextTarget.attr("data-w"));
            //
            var prevTarget = $("#zenui-func .gallery li").eq(current-1);
            var prevW = parseInt(prevTarget.attr("data-w"));
            //
            var centerX = ($(window).width() - currentW) / 2;
            TweenMax.to(currentTarget,.3,{left:centerX,scale:normalScale});
            //

            if(screenSize == "l"){
                 var offsetFromScale = nextW*((normalScale-thumbScale)/2);
                var startX = centerX + currentW*normalScale - offsetFromScale+gap+siblingsGap;
                for(i=current+1;i<total;i++){
                    var target = $("#zenui-func .gallery li").eq(i);
                    var targetW = parseInt(target.attr("data-w"));

                    TweenMax.to(target,.3,{left:startX,scale:thumbScale});
                    
                    if($("#zenui-func .gallery li").eq(i+1).hasClass("double")){
                        startX += targetW*thumbScale+gap*0;
                    }else if($("#zenui-func .gallery li").eq(i).hasClass("double")){
                        startX += targetW*thumbScale+gap*2;
                    }else{
                        startX += targetW*thumbScale+gap;
                    }
                }

                startX = centerX - prevW*((normalScale-thumbScale)/2)-siblingsGap;
                for(i=current-1;i>=0;i--){
                    var target = $("#zenui-func .gallery li").eq(i);
                    var targetW = parseInt(target.attr("data-w"));

                    if($("#zenui-func .gallery li").eq(i+1).hasClass("double")){
                        startX -= targetW*thumbScale+gap*0;
                    }else if($("#zenui-func .gallery li").eq(i).hasClass("double")){
                        startX -= targetW*thumbScale+gap*2;
                    }else{
                        startX -= targetW*thumbScale+gap;
                    }
                    TweenMax.to(target,.3,{left:startX,scale:thumbScale});
                }
            }
            else{

            var offsetFromScale = nextW*((normalScale-thumbScale)/2);

            //gather than currnet
            var startX = centerX + currentW*normalScale - offsetFromScale+gap+siblingsGap;

            var extraGap = 0;
            if(screenSize == 's'){
                extraGap = 80
            }
            gap = 20;
            for(i=current+1;i<total;i++){
                var target = $("#zenui-func .gallery li").eq(i);
                var targetW = parseInt(target.attr("data-w"));

                
                if(i==current+1 && nextTarget.hasClass("double")){
                    startX -= 80;
                }

                if(i==current+1 && currentTarget.hasClass("double")){
                    startX += 80;
                }


                if($("#zenui-func .gallery li").eq(i).hasClass("landscape")){
                    startX -=73;
                }
                TweenMax.to(target,.3,{left:startX,scale:thumbScale});
                //
                var oriW = $("#zenui-func .gallery li").eq(i+1).attr("data-w");
                var newW = parseInt(oriW) * thumbScale;
                var diffW = (newW - oriW)/5;
                if($("#zenui-func .gallery li").eq(i+1).hasClass("double")){
                    startX += targetW*thumbScale+gap*0;//-96;
                }else if($("#zenui-func .gallery li").eq(i).hasClass("double")){
                    startX += targetW*thumbScale+gap*2;//+96;
                }else{
                    startX += targetW*thumbScale+gap;
                }
            }

            //less than currnet
            startX = centerX - prevW*((normalScale-thumbScale)/2)-siblingsGap;
            if(currentTarget.hasClass("double")){
                startX +=70;
            }
            for(i=current-1;i>=0;i--){
                var target = $("#zenui-func .gallery li").eq(i);
                var targetW = parseInt(target.attr("data-w"));

                if($("#zenui-func .gallery li").eq(i).hasClass("double")){
                    startX -= targetW*thumbScale+gap+80
                }else{
                    if((i+1)<current && $("#zenui-func .gallery li").eq(i+1).hasClass("double")){
                        startX -= targetW*thumbScale+gap-95;
                    }else if((i+2)<current && $("#zenui-func .gallery li").eq(i+2).hasClass("double")){
                        startX -= targetW*thumbScale+gap-20;
                    }else{
                        startX -= targetW*thumbScale+gap;
                    }
                }
                
                TweenMax.to(target,.3,{left:startX,scale:thumbScale});
            }
            }

            if(current==0){
                $(".signpost li.prev",scope).hide();
                $(".signpost li.next",scope).show();
            }else if(current == total-1){
                $(".signpost li.prev",scope).show();
                $(".signpost li.next",scope).hide();
            }else{
                $(".signpost li.prev",scope).show();
                $(".signpost li.next",scope).show();
            }

            $(targetGallery).css("display","block");
            playZenui();
        }

        var playZenui = function(){

            //playZenuiTimeline
            if(playZenuiTimeline!=undefined){
                playZenuiTimeline.stop();
                playZenuiTimeline.seek(0);
            }
            if(currentVideoAry.length>0){
                for(var i in currentVideoAry){
                    currentVideoAry[i].currentTime = 0;
                    currentVideoAry[i].pause();
                }
            }
            currentVideoAry = [];


            var scene = $(".gallery .zenmotion",scope);
            var oriScreen = $(".screen.end",scene);
            var canvasScreen = $(".screen.canvas",scene);
            var hand = $(".hand",scene);

            TweenMax.set(oriScreen,{display:'block'});
            TweenMax.set(canvasScreen,{display:'none'});
            TweenMax.set(hand,{display:'none',opacity:0});
            switch(current){
                case 0:
                    //zenmotion
                    
                    var scene = $(".gallery .zenmotion",scope);
                    var oriScreen = $(".screen.end",scene);
                    var canvasScreen = $(".screen.canvas",scene);
                    var hand = $(".hand",scene);

                    //

                    if(!isMobile.any() && runAnimation){
                        playZenuiTimeline = new TimelineMax();
                        playZenuiTimeline.add([TweenMax.set(oriScreen,{display:'block'}),TweenMax.set(canvasScreen,{display:'none'})]);
                        playZenuiTimeline.add([TweenMax.set(oriScreen,{display:'none'}),TweenMax.set(canvasScreen,{display:'block'})]);
                        playZenuiTimeline.play();
                        $("#zenmotionScreenContainer").html("<div id='zenmotionScreen'></div>");

                        $("#zenmotionScreen").css("width",500);
                        $("#zenmotionScreen").css("height",800);
                        stage = new swiffy.Stage(document.getElementById('zenmotionScreen'),swiffyobject, {  });     
                                      
                        stage.start(0);
                        stage.setBackground(null);
                    }else{
                        playZenuiTimeline = new TimelineMax();
                        playZenuiTimeline.add([TweenMax.set(hand,{opacity:0})]);
                        playZenuiTimeline.add([TweenMax.to(hand,.3,{opacity:1})]);
                        playZenuiTimeline.play();
                    }
                break;
                case 1:
                    //taptap
                    var scene = $(".gallery .tap-tap",scope);
                    var oriScreen = $(".screen-zenmotion",scene);
                    var smallScreen = $(".screen-tap-tap",scene);
                    var hand = $(".hand",scene);
                    //
                    TweenMax.set(oriScreen,{opacity:1,scale:1,display:'block'});
                    TweenMax.set(smallScreen,{opacity:0});
                    TweenMax.set(hand,{y:300,opacity:0,display:'block'});

                    //
                    playZenuiTimeline = new TimelineMax({delay:.5});
                    playZenuiTimeline.add( TweenMax.to(hand,.3,{y:200,opacity:1}));
                    playZenuiTimeline.add( TweenMax.to(hand,.1,{scale:.95}));
                    playZenuiTimeline.add( TweenMax.to(hand,.1,{scale:1}));
                    playZenuiTimeline.add( TweenMax.to(hand,.1,{scale:.95}));
                    playZenuiTimeline.add( TweenMax.to(hand,.1,{scale:1}));
                    playZenuiTimeline.add( [ TweenMax.to(hand,.8,{y:200,opacity:0})
                        ,TweenMax.to(oriScreen,.4,{scale:.83,delay:.4,opacity:0,transformOrigin:'0 100%'})
                        ,TweenMax.to(smallScreen,.4,{delay:.4,opacity:1})]);
                    //
                    playZenuiTimeline.play();
                break;
                case 2:
                    //double tap
                    var scene = $(".gallery .double-tap",scope);
                    var oriScreen = $(".screen",scene);
                    var hand = $(".hand",scene);
                    //
                    TweenMax.set(oriScreen,{opacity:1,display:'block'});
                    TweenMax.set(hand,{y:200,opacity:0,display:'block'});
                    playZenuiTimeline = new TimelineMax({delay:.5});
                    playZenuiTimeline.add( TweenMax.to(oriScreen,0,{opacity:1}));
                    playZenuiTimeline.add( [TweenMax.to(hand,.3,{y:0,opacity:1}),TweenMax.set(oriScreen,{opacity:0})]);
                    playZenuiTimeline.add( TweenMax.to(hand,.1,{scale:.95}));
                    playZenuiTimeline.add( TweenMax.to(hand,.1,{scale:1}));
                    playZenuiTimeline.add( TweenMax.to(hand,.1,{scale:.95}));
                    playZenuiTimeline.add( TweenMax.to(hand,.1,{scale:1}));
                    playZenuiTimeline.add( [ 
                         TweenMax.to(hand,.8,{y:200,opacity:0})
                        ,TweenMax.to(oriScreen,.4,{opacity:1})
                        ]);                    
                    
                    //
                    playZenuiTimeline.play();
                break;
                case 3:
                    //swipe up & paly video
                    var scene = $(".gallery .swipe-up",scope);
                    var homeScreen = $(".screen-home",scene);
                    var toolsScreen = $(".screen-swipe-up",scene);
                    var hand = $(".hand",scene);
                    //
                    currentVideo = document.getElementById("swipe-up-video");
                    if(isMobile.any()){
                        TweenMax.set(currentVideo,{display:'none'});
                    }
                    TweenMax.set(homeScreen,{opacity:1,display:'block'});
                    TweenMax.set(toolsScreen,{opacity:0,display:'block'});
                    TweenMax.set(hand,{y:300,scale:1,opacity:1,display:'block',transformOrigin:'30% 0%'});
                    //
                    playZenuiTimeline = new TimelineMax({delay:.5});
                    playZenuiTimeline.add( TweenMax.set(homeScreen,{opacity:1}));
                    playZenuiTimeline.add( TweenMax.fromTo(hand,.3,{y:300,opacity:0},{y:150,opacity:1}));
                    playZenuiTimeline.add( TweenMax.to(hand,.3,{y:130,scale:.75}));
                    playZenuiTimeline.add( TweenMax.to(hand,.5,{y:-50}));
                    playZenuiTimeline.add( TweenMax.to(hand,.2,{scale:1}));
                    playZenuiTimeline.add( [ 
                         TweenMax.to(hand,.8,{y:200,opacity:0})
                        ,TweenMax.to(homeScreen,.4,{opacity:0})
                        ,TweenMax.to(toolsScreen,.4,{opacity:1})
                        ]);                    
                    
                    //
                    playZenuiTimeline.play();
                    //
                    if(!isMobile.any()){
                        currentVideoAry.push(currentVideo);
                        currentVideo.play();
                    }
                    //
                break;
                case 4:
                    //play video custom animation


                    currentVideo = document.getElementById("transition-animation-video");
                    if(isMobile.any()){
                        TweenMax.set(currentVideo,{display:'none'});
                    }else{
                        currentVideo.play();
                        currentVideoAry.push(currentVideo);   
                    }
                break;
                case 5:
                    //folder style
                break;

                case 6:
                    // icon pack
                break;

                case 7:
                    // themes
                    var scene = $(".gallery .themes",scope);
                    var theme1 = $(".screen-theme-1",scene);
                    var theme2 = $(".screen-theme-2",scene);
                    var theme3 = $(".screen-theme-3",scene);
                    var theme4 = $(".screen-theme-4",scene);
                    var theme5 = $(".screen-theme-5",scene);
                    //
                    TweenMax.set(theme1,{opacity:1,display:'block'});
                    TweenMax.set(theme2,{opacity:1,display:'block'});
                    TweenMax.set(theme3,{opacity:1,display:'block'});
                    TweenMax.set(theme4,{opacity:1,display:'block'});
                    TweenMax.set(theme5,{opacity:1,display:'block'});
                    //
                    var speed = .8;
                    var screenStay = .5;
                    playZenuiTimeline = new TimelineMax({repeat:-1,delay:.5});
                    
                    playZenuiTimeline.add( TweenMax.to(theme1,speed,{ease: Sine.easeInOut,opacity:0,delay:screenStay}));
                    playZenuiTimeline.add( TweenMax.to(theme2,speed,{ease: Sine.easeInOut,opacity:0,delay:screenStay}));
                    playZenuiTimeline.add( TweenMax.to(theme3,speed,{ease: Sine.easeInOut,opacity:0,delay:screenStay}));
                    playZenuiTimeline.add( TweenMax.to(theme4,speed,{ease: Sine.easeInOut,opacity:0,delay:screenStay}));
                    playZenuiTimeline.add( TweenMax.to(theme1,speed,{ease: Sine.easeInOut,opacity:1,delay:screenStay}));
                    //
                    playZenuiTimeline.play();
                break;

                case 8:
                    //customize font
                break;

                case 9:

                    var scene = $(".snapview",scope);
                    if(!isMobile.any()){
                        TweenMax.set($(".left .screen",scene),{opacity:0});
                        TweenMax.set($(".right .screen",scene),{opacity:0});
                    }
                    //snapm view & paly video
                    var leftVideo = document.getElementById("snapview-left-video");
                    if(!isMobile.any()){
                        leftVideo.play();
                        currentVideoAry.push(leftVideo);
                    }
                    var rightVideo = document.getElementById("snapview-right-video");
                    if(!isMobile.any()){
                        rightVideo.play();
                        currentVideoAry.push(rightVideo);
                    }
                    
                    
                    if(isMobile.any()){
                        TweenMax.set(leftVideo,{opacity:0});
                        TweenMax.set(rightVideo,{opacity:0});
                    }
                break;

                case 10:
                    //private contacts
                break;

                case 11:
                    //kids mode
                break;

                case 12:
                    //browser
                break;

                case 13:
                    //bluelight filter
                break;

                case 14:
                    //photocollage
                    var scene = $(".gallery .photo-collage",scope);
                    var collage1 = $(".screen-photo-collage-1",scene);
                    var collage2 = $(".screen-photo-collage-2",scene);
                    var collage3 = $(".screen-photo-collage-3",scene);
                    //
                    TweenMax.set(collage1,{opacity:1,display:'block'});
                    TweenMax.set(collage2,{opacity:1,display:'block'});
                    TweenMax.set(collage3,{opacity:1,display:'block'});
                    //
                    var speed = .8;
                    var screenStay = .5;
                    playZenuiTimeline = new TimelineMax({repeat:-1,delay:.5});
                    
                    playZenuiTimeline.add( TweenMax.to(collage1,speed,{ease: Sine.easeInOut,opacity:0,delay:screenStay}));
                    playZenuiTimeline.add( TweenMax.to(collage2,speed,{ease: Sine.easeInOut,opacity:0,delay:screenStay}));
                    playZenuiTimeline.add( TweenMax.to(collage1,speed,{ease: Sine.easeInOut,opacity:1,delay:screenStay}));
                    //
                    playZenuiTimeline.play();
                break;

                case 15:
                    //mini-movie & play video
                    var scene = $(".mini-movie",scope);
                    var target = $(".screen-mini-movie",scene);
                    //

                    if(!isMobile.any()){
                        playZenuiTimeline = new TimelineMax({delay:.5});
                        playZenuiTimeline.add( TweenMax.fromTo(target,.5,{opacity:1},{opacity:0}));
                        playZenuiTimeline.play();
                    }

                    currentVideo = document.getElementById("mini-movie-video");

                    if(isMobile.any()){
                        TweenMax.set(currentVideo,{display:'none'});
                    }else{
                        currentVideo.play();
                        currentVideoAry.push(currentVideo); 
                    }
                break;
            }
        }
        var initSignpost = function(){
            $("#zenui-func .signpost li").bind("click",function(){
                var index = parseInt($(this).attr("data-index"));
                var next = current + index;
                if(next<0){
                    next = total-1;
                }
                else if(next > total-1){
                    next = 0;
                }
                current = next; 

                moveSlide();
            })
        }

        var initPager = function(){
            var html = "";
            for(var i=0;i<total;i++){
                html += "<li style='padding:20px;'>"+(i+1)+"</li>";
            }
            $(".pager",scope).html(html);

            $(".pager li",scope).bind("click",function(){
                current = parseInt($(this).index());
                moveSlide()
            }).eq(0).trigger("click");
        }

        init();
    }
    return {
        //main function to initiate the module
        init: function () {
            banner();
            intro();
            ui();
            realtime();
            new_zenui();
        }
    };
}();


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


function _run(){
    Zenui.init();
};