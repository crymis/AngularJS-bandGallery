var module = angular.module("portingGuide");

module.service("ImageService", [function(){
	this.getBandGalleryImgs = function(){
		return [{"url":"img/band/appIdea.jpg", "title":"Awesome ideas"}, {"url":"/img/band/desktopMobile3.jpg", "title" : "Desktop to Mobile"}, {"url":"/img/band/infographic1.jpg", "title":"Mobile Development"},{"url":"/img/band/infographic2.jpg", "title":"Directly from scratch"}, {"url":"/img/band/responsive.jpg", "title":"Respnsive Design"}];
	}
}]);