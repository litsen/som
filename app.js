window.addEventListener('WebComponentsReady', function() {
	var app=document.querySelector("weather-app");

	page("/",home);
	page("/future",future);
	page("/map",map);

	function home(){
		app.route='home';
	}

	function future(){
		app.route='future';
	}

	function map(){
		app.route='map';
	}
 	
 	page({
      hashbang: true
    });

  });	