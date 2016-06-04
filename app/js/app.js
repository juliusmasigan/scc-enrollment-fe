var config = {
    'apiBaseUrl': 'http://enrollmentapi.dev/'
};

var app = angular.module('enrollmentApp', [
    'ngMaterial',
	'ngRoute',

    'profilingCtrl'
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.otherwise({
			templateUrl:'templates/enrollment.tpl.html'
		});
}]);

app.run(['$rootScope', function($rootScope) {
    $rootScope.tabs = {};
    $rootScope.tabs.selectedIndex = 0;
}]);
