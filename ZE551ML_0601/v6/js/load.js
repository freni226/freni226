var isIE=navigator.appName.indexOf("Internet Explorer")!=-1;var ie_version;var ie_renderVersion;var ie_compatibilityMode=false;if(isIE){var ua=navigator.userAgent;var ieRegex=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(ieRegex.exec(ua)==null)this.exception="The user agent detected does not contai Internet Explorer.";ie_renderVersion=parseFloat(RegExp.$1);ie_version=ie_renderVersion;if(ua.indexOf("Trident/7.0")>-1){if(ua.indexOf("MSIE 8.0")>-1){ie_compatibilityMode=true;ie_version=11}}else if(ua.indexOf("Trident/6.0")>-1){if(ua.indexOf("MSIE 7.0")>-1){ie_compatibilityMode=true;ie_version=10}}else if(ua.indexOf("Trident/5.0")>-1){if(ua.indexOf("MSIE 7.0")>-1){ie_compatibilityMode=true;ie_version=9}}else if(ua.indexOf("Trident/4.0")>-1){if(ua.indexOf("MSIE 7.0")>-1){ie_compatibilityMode=true;ie_version=8}}else if(ua.indexOf("MSIE 7.0")>-1)ie_version=7;else ie_version=6}
if (!window.console) console = {log: function() {}};
//////
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

//////
var section = document.getElementById("wrap").getAttribute('data-section');
var product = document.getElementById("wrap").getAttribute('data-hash-id');
var content_target = '#special-sectionOverview';
//////
if(isIE && ie_version<9){
    var root = document.getElementsByTagName( 'html' )[0];
    root.setAttribute( "class", "ie lt-ie9" );
}
//
var lang = "";

if($("#wrap").hasClass("en")){
    lang = "";
}
switch(section){
    case "overview":
        document.write('<link rel="stylesheet" href="v6/'+lang+'css/index.css">');
        document.write('<script src="v6/'+lang+'js/index.js"></script>');             
    break;

    case "design":
        document.write('<link rel="stylesheet" href="v6/'+lang+'css/design.css">');
        document.write('<script src="v6/'+lang+'js/design.js"></script>');             
    break;

    case "accessory":
        document.write('<link rel="stylesheet" href="v6/'+lang+'css/accessory.css">');
        document.write('<script src="v6/'+lang+'js/accessory.js"></script>');             
    break;

    case "performance":     
        document.write('<link rel="stylesheet" href="v6/'+lang+'css/performance.css">');
        document.write('<script src="v6/'+lang+'js/performance.js"></script>');                                        
    break;

    case "charging":    
        document.write('<link rel="stylesheet" href="v6/'+lang+'css/charging.css">');
        document.write('<script src="v6/'+lang+'js/charging.js"></script>');           
    break;

    case "zenui":        
        document.write('<link rel="stylesheet" href="v6/'+lang+'css/zenui.css">');
        document.write('<script src="v6/'+lang+'js/zenui.js"></script>');
    break;

    case "pixelmaster":        
        document.write('<link rel="stylesheet" href="v6/'+lang+'css/pixelmaster.css">');
        document.write('<script src="v6/'+lang+'js/pixelmaster.js"></script>');           
    break;
}


if (document.location.hostname.indexOf("localhost") != -1){
   //document.write('<script src="http://cssrefresh.frebsite.nl/js/cssrefresh.js"></script>');
}

document.write('<script src="v6/'+lang+'js/vendor/modernizr.js"></script>');
document.write('<script src="v6/'+lang+'js/vendor/gsap/plugins/ScrollToPlugin.min.js"></script>');
if(isIE && ie_version<10){

}else{
    document.write('<script src="v6/'+lang+'js/vendor/runtime.js"></script>');
document.write('<script src="v6/'+lang+'js/vendor/hammer.min.js"></script>');
}
document.write('<script src="v6/'+lang+'js/vendor/gsap/TweenMax.min.js"></script>');
document.write('<script src="v6/'+lang+'js/vendor/imagesloaded.pkgd.min.js"></script>');
document.write('<script src="v6/'+lang+'js/vendor/jquery.waypoints.min.js"></script>');


//use web font
(function(d) {
var config = {
  kitId: 'zac3uty',
  scriptTimeout: 3000
},
h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);