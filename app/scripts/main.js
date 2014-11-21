(function() {

	var ang = angular.module('TheFeelings', ['ngRoute']); // set the module

	ang.constant({
		url: 'http://tiy-atl-fe-server.herokuapp.com/collections/feelings6/'
	});

	ang.config( function ($routeProvider) {

		$routeProvider.when('/', {
			templateUrl: 'templates/grid_template.html',
			controller: 'MainController'
		}); // end route

		$routeProvider.when('/featuredDude/:id', {
			templateUrl: 'templates/individual_featured.html',
			controller: 'FeaturedController'
		});

	}); // end of config



}()); // end of iif