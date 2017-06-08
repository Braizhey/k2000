var app = angular.module('k2000App', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	// Need a web server to work properly.
	$locationProvider.html5Mode(true);
	$routeProvider.caseInsensitiveMatch = true;
	$routeProvider
		.when("/home", {
			templateUrl: "app/components/home/homeView.html",
			controller: "homeController",
			controllerAs: "homeCtrl"
		})
		.when("/category/:id", {
			templateUrl: "app/components/category/categoryView.html",
			controller: "categoryController",
			controllerAs: "categoryCtrl"
		})
		.when("/article", {
			templateUrl: "app/components/article/articleView.html",
			controller: "articleController",
			controllerAs: "articleCtrl"
		})
		.otherwise({
			redirectTo: "/home"
		});
});

app.controller("indexController", function($route) {
	this.MenuViewUrl = "app/shared/menu/menuView.html";
	this.FooterViewUrl = "app/shared/footer/footerView.html";

	var ctrl = this;
	ctrl.reloadData = function() {
		$route.reload();
	}
});

app.controller("menuController", function() {
	this.Categories = [
		{Id: 1, Name: "Weekends"},
		{Id: 2, Name: "Road Trips"},
		{Id: 3, Name: "Discoveries"},
		{Id: 4, Name: "Special Events"}
	];
});

app.controller("homeController", function() {
	var ctrl = this;
	this.Message = "Home Controller speaking from routes.";
});



app.controller("categoryController", function($routeParams) {
	this.Message = "Category Controller speaking from routes.";
	this.Id = $routeParams.id;
});

app.controller("articleController", function() {
	this.Message = "Article Controller speaking from routes.";
});