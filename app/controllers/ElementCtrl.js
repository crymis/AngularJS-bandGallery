var module = angular.module("portingGuide");

module.controller("ElementCtrl", ["$scope", "ImageService", function($scope, ImageService){
	$scope.open = true;

	$scope.myImgs = ImageService.getBandGalleryImgs();

	$scope.toggleContent = function() {
		if($scope.open) {
			angular.element(".components").css('display', 'block');
			$scope.open = false;
		}
		else {
			angular.element(".components").css('display','none');
			$scope.open = true;
		}
	};

}]);