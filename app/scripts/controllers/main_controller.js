(function(){

	angular.module('TheFeelings')

		.controller('MainController', ['FeelFactory', '$scope', '$location', '$rootScope', function(FeelFactory, $scope, $location, $rootScope) {

			FeelFactory.getClassmates().success(function(results){

				$scope.entireGroup = results;

			});

		}]); // end controller

}()); // end iif