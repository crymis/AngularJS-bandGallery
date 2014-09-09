var module = angular.module('portingGuide');
module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
				when("/", {
					templateUrl: "/views/home.html"
				}).
				when("/about", {
					templateUrl: "views/about.html"
				}).
				otherwise({
					redirectTo: "/"
				});
	}]);
