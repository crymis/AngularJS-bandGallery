/*  */
var module = angular.module("portingGuide");

module.directive("bandGallery", ["$window", function($window){
	return {
		restrict: 'E',
		link: function(scope, element, attrs){
			scope.bandGalleryImgs = scope[attrs['galleryImgs']];

			function adjustHeights() {
				//element[0].setAttribute('style', 'height:' + (scope.bandGalleryImgs.length * 100) + '%; display: block');
				element[0].setAttribute('style', 'height:' + (scope.bandGalleryImgs.length * $window.innerHeight) + 'px; display: block');
				//scope.heightFraction = 1/scope.bandGalleryImgs.length * 100;
				scope.windowHeight = $window.innerHeight;
				return scope.windowHeight;
			}

			// detecting size of window at first call
			var oldVal = adjustHeights();

			angular.element($window).bind('resize', function() {
				// only if windows new size changes more than 10%, rescaling is done
				var newVal = $window.innerHeight;
				if(Math.abs(newVal - oldVal) > (newVal * 0.1)) {
					adjustHeights();
					scope.$apply();
				}
			});

			},
			template: "<div data-ng-repeat='band in bandGalleryImgs' class='band' style='background-image: url({{band.url}}); height:{{windowHeight}}px'>" +
			"<h1 class='band-heading'>{{band.title}}</h1>" +
			"</div>"
		};
	}]);