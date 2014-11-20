(function(){

	angular.module('TheFeelings')

		.controller('MainController', ['$scope', 'FeelFactory', '$location', '$rootScope', 'baseURL', function($scope, FeelFactory, $location, $rootScope, baseURL) {

				FeelFactory.getClassmates().then( function(results) {
					$scope.entireGroup = results.data;

				});



		}]); // end controller

}()); // end iif