$(function(){var e=function(){var e="zenpad380_desktop",t=new MobileDetect(window.navigator.userAgent);t.phone()&&(e="zenpad380_phone "+n()),t.tablet()&&(e="zenpad380_tablet "+n()),a(e)},n=function(){var e=window.matchMedia("(orientation: portrait)");return e.matches?"zenpad380_portrait":"zenpad380_landscape"},a=function(e){$("body").removeClass("zenpad380_desktop zenpad380_phone zenpad380_tablet zenpad380_portrait zenpad380_landscape").addClass(e)};e(),$(window).resize(function(){e()})});