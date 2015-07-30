
// JavaScript Document

//       **************   center wrap   **************

var productName = 'zenpad_580CA';    
var productId = 'Z6Wda6yI8WpA2D69';  
var product;

var windowW, windowH;

var Main = function() {
 var init = function() {
  product = $('#' + productName);
  windowResizeInit();
 }

 function windowResizeInit() {
  $(window).resize(function() {
   windowW = $(window).width();
   windowH = $(window).height();

   product.css({
    width: windowW,
    marginLeft: -windowW / 2
   })
  }).resize();
 }

 return {
  init: init
 };
}();