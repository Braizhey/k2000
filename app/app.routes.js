var app = angular.module('k2000App', ["ngRoute"]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

	$locationProvider.hashPrefix('');
	$routeProvider
		.when("/", {
			templateUrl: "app/components/home/homeView.html",
			// controller: "homeCtrl"
		})
		.when("/home", {
			templateUrl: "/"
		})
		.when("/article", {
			templateUrl: "/"
		})
		.otherwise({
			redirectTo: "/"
		});
}]);

app.controller("homeCtrl", function($scope) {
	$scope.Message = "Controller speaking from routes.";
});