/* BandGallery Directive for showing pictures in an awesome view! */
var module = angular.module("portingGuide");

module.directive("bandGallery", ["$window", function($window){
	return {
		restrict: 'E',
		link: function(scope, element, attrs) {
			scope.bandGalleryImgs = scope[attrs['galleryImgs']];
			var btnsActive = attrs['navBtns'];

			// settings for btns-active attribute on directive
			if(!(btnsActive === undefined) && (!btnsActive || btnsActive === '' || btnsActive === 'false' || btnsActive === '0')) {
				scope.btnsActive = false;
			} else {
				scope.btnsActive = true;
			}

			scope.nextImg = function(index) {
				if(index+1 < scope.bandGalleryImgs.length) {
					angular.element('html,body').animate({
						scrollTop: angular.element('.band-'+(index+1)).offset().top+1
					}, 1000, "easeOutCubic");
				}
			};

			scope.goTop = function() {
				angular.element('html,body').animate({
					scrollTop: angular.element('.band-0').offset().top
				}, 1500, "easeOutCirc");
			}

			function adjustHeights() {
				element[0].setAttribute('style', 'height:' + (scope.bandGalleryImgs.length * $window.innerHeight) + 'px; display: block');
				scope.windowHeight = $window.innerHeight;
				return scope.windowHeight;
			}

			// detecting size of window at first call
			var oldVal = adjustHeights();

			angular.element($window).bind('resize', function() {
				// only if windows new size changes more than 10%, rescaling is done
				var newVal = $window.innerHeight;
				if(Math.abs(newVal - oldVal) > (newVal * 0.15)) {
					adjustHeights();
					scope.$apply();
				}
	
			});

		},
		template: "<div data-ng-repeat='band in bandGalleryImgs' class='band band-{{$index}}' style='background-image: url({{band.url}}); height:{{windowHeight}}px'>" +
		"<button class='nextBtn' data-ng-click='nextImg($index)' data-ng-show='btnsActive && !$last'> &gt; </button>" +
		"<button class='goTopBtn' data-ng-click='goTop()' data-ng-show='btnsActive && $last'> &gt;&gt; </button>" +
		"<h1 class='band-heading'>{{band.title}}</h1>" +
		"<p class='band-description'>{{band.description}}</p>" +
		"</div>"
	};
}]);