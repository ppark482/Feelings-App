(function() {

	var ang = angular.module('TheFeelings', ['ngRoute', 'restangular']); // set the module

	ang.config( function ($routeProvider, RestangularProvider) {

		RestangularProvider.setBaseUrl('http://tiy-atl-fe-server.herokuapp.com/collections/feelings6/');

		$routeProvider.when('/', {
			templateUrl: 'templates/grid_template.html',
			controller: 'MainController'
		}); // end route

		// $routeProvider.when('/featuredDude/:id', {
		// 	templateUrl: '',
		// 	controller: 'MainController'
		// });

	}); // end of config



}()); // end of iif