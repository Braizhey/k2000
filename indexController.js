var app = angular.module('k2000App', []);

app.controller('indexCtrl', function($scope, $location, $interval) {
	$scope.firstName = "Jack";
	$scope.lastName = "O'Neil";
	$scope.categories = [
		{Name: "Week-ends"}, 
		{Name: "Road Trips"}, 
		{Name: "Discoveries"}, 
		{Name: "Special Events"}];
	$scope.appUrl = $location.absUrl();
	$scope.now = new Date();

	$interval(function() {
		$scope.now = new Date();
	}, 10);

	$scope.fullName = function () {
		return $scope.firstName + " " + $scope.lastName;
	};

	$scope.changeNames = function() {
		var firstName = $scope.firstName;
		$scope.firstName = $scope.lastName; 
		$scope.lastName = firstName; 
	};
});