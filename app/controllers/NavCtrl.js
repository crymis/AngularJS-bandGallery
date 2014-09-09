var module = angular.module("portingGuide");

module.controller("NavCtrl", ['$scope', '$location', function($scope, $location) {

	/* Define a function for each case */ 

	$scope.isActive = function(tab){
		if($location.path() === tab){
			return 'active';
		}
		return '';
	}

}]);