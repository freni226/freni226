
// JavaScript Document

//       **************   center wrap   **************

var productName = 'zenpad_580KL';    
var productId = 'aKXBewzKRloj9LVy';  
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