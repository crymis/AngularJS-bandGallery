var module = angular.module('bandGalleryDemo');
module.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when("/", {
		templateUrl: "views/home.html",
		controller: "HomeCtrl"
	}).
	otherwise({
		redirectTo: "/"
	});
}]);
