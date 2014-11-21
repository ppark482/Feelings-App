(function(){

	angular.module('TheFeelings')

		.controller('MainController', ['FeelFactory', '$scope', '$location', '$rootScope', function(FeelFactory, $scope, $location, $rootScope) {

			FeelFactory.getClassmates().then(function(results){

				$scope.entireGroup = results;
				
			});

		}]); // end controller

}()); // end iif