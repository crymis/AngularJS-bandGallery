var module = angular.module("bandGalleryDemo");

module.controller("HomeCtrl", ["$scope", "ImageService", function($scope, ImageService){
	
	$scope.myImgs = ImageService.getBandGalleryImgs();
	
}]);