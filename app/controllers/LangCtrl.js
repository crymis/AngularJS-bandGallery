var module = angular.module('portingGuide');

module.controller('LangCtrl', ['$scope', '$translate', function ($scope, $translate){
	
	$scope.changeLang = function (key) {
		$translate.use(key).then(function (key) {
			//console.log("Lang = " + key);
		}, function (key) {
			//console.log("Could not change language to " + key);
		});
	};

}]);