(function(){

	angular.module('TheFeelings')

		.controller('MainController', ['$scope', 'FeelFactory', '$location', '$http', '$rootScope', 'baseURL', function($scope, FeelFactory, $location, $rootScope, baseURL, $http) {

				FeelFactory.getClassmates().then( function(results) {
					$scope.entireGroup = results.data;
				});

				$scope.updateFeels = function(feels){};

		}]); // end controller

}()); // end iif