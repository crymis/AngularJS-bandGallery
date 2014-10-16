var module = angular.module("portingGuide");

module.controller("ElementCtrl", ["$scope", "ImageService", function($scope, ImageService){
	
	$scope.myImgs = ImageService.getBandGalleryImgs();

}]);