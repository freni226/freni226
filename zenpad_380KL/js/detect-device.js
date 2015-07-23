$(function() {
	var zenpad_deviceDetect = function() {
		var zenpad_device = 'zenpad380_desktop';
		var zenpad_md = new MobileDetect(window.navigator.userAgent);

		if ( zenpad_md.phone() ) {
			zenpad_device = 'zenpad380_phone';
			zenpad_orientationDetect();
		}

		if ( zenpad_md.tablet() ) {
			zenpad_device = 'zenpad380_tablet';
			zenpad_orientationDetect();
		}

		alert(zenpad_device);
	};

	var zenpad_orientationDetect = function() {
	  // if ( window.matchMedia("(orientation: portrait)").matches ) {
	  // 	return 'zenpad380_portrait';
	  // } else if ( window.matchMedia("(orientation: landscape)").matches ) {
	  // 	return 'zenpad380_landscape';
	  // }
	  var zenpad_orientation = 'zenpad380_desktop';
	  var mql = window.matchMedia("(orientation: portrait)");

	  // If there are matches, we're in portrait
	  if (mql.matches) {
	    alert('portrait!!!!!!!!!');
	  } else {
	    alert('landscape!!!!!!!!!');
	  }

	  // Add a media query change listener
	  mql.addListener(function(m) {
	    if (m.matches) {
	      alert('change portrait@@@@@@@@@@@@@@@@@');
	    } else {
	      alert('change landscape@@@@@@@@@@@');
	    }
	  });
	};

	// zenpad_orientation();
	zenpad_deviceDetect();

	// $(window).
});