
// JavaScript Document

//       **************   center wrap   **************

var productName = 'pixelmaster';    
var productId = 'G6jo5SUlhYMhpZ90';  
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