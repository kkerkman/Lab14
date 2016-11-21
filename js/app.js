(function(){
	var app =angular.module("catDog", ["ngRoute"]);

	app.config(function($routeProvider){
		$routeProvider.when("/pup",{
			templateUrl: "pup.html"
		});
		$routeProvider.when("/cat",{
			templateUrl:"cat.html"
		});
		$routeProvider.otherwise({
			template: "Choose cat or dog!"
		});

	});
})();
