// JavaScript Document

;( function( $ ){
  $.preload = function(){
    var videos = Object.prototype.toString.call( arguments[ 0 ]) === '[object Array]'
      ? arguments[ 0 ] : arguments;

    var tmp = [];
    var i   = imgs.length;

    // reverse loop run faster
    for( ; i-- ; ) tmp.push( $( '<video />' ).attr( 'src', videos[ i ]));
  };
})( jQuery );


$(document).ready(function() {
 $.preload( 		
	"blur.mp4",
	"noblur.mp4"

    );


});