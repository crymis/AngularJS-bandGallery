// settings for main app
angular.module("portingGuide", ["ngRoute", "pascalprecht.translate"])

.config(function($translateProvider) {

	$translateProvider.useStaticFilesLoader({
		prefix: "languages/lang-",
		suffix :".json"
	});

	$translateProvider.preferredLanguage("de_DE");
})

/* defining rootScope */
.run(function($rootScope) {
	// method for removing container-class in bandGallery-view
	$rootScope.isBandGallery = function() {
		return window.location.hash === '#/bandGallery';
	}
});