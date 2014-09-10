var module = angular.module("portingGuide");

module.controller("HomeCtrl", ["$scope", "ImageService", function($scope, ImageService){
	
	$scope.myImgs = ImageService.getBandGalleryImgs();

}]);