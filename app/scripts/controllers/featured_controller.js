(function(){

	angular.module('TheFeelings')

		.controller('FeaturedController', ['FeelFactory', '$scope', '$location', '$rootScope', '$http', 'url', '$routeParams', function(FeelFactory, $scope, $location, $rootScope, $http, url, $routeParams) {

				$http.get(url + $routeParams.id).success( function (data) {
	        $scope.person = data;
	      });

		}]); // end of controller

}()); // end iif