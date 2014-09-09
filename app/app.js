// settings for main app
angular.module("portingGuide", ["ngRoute", "pascalprecht.translate"])

.config(function($translateProvider) {
	
	$translateProvider.useStaticFilesLoader({
		prefix: "languages/lang-",
		suffix :".json"
	});

	$translateProvider.preferredLanguage("de_DE");

});