var module = angular.module("bandGalleryDemo");

module.service("ImageService", [function(){
	this.getBandGalleryImgs = function(){
		return [{"url":"img/sunfield.jpg", "title":"Completely responsive", "description":"Play around with the window sizes, the bandGallery will always fit on your view!"},
		 		{"url":"/img/lake.jpg", "title":"Customizable controll elements", "description":"Don't like the page number on the left bottom? Just set the page-nr attribute to false"},
		 		{"url":"/img/boat.jpg", "title":"Fresh floating", "description":"Smooth scrolling due to previous and next-buttons on the side"},
		 		{"url":"/img/sea.jpg", "title" : "Presenting big pictures", "description":"Showing fullscreen images to present all your best!"},
		 		{"url":"/img/tree.jpg"}];
	}
}]);