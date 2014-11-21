(function(){

	angular.module('TheFeelings')

		.factory('FeelFactory', ['$rootScope', '$http', 'url', function($rootScope, $http, url) {

			function getClassmates() {
				return $http.get(url);
			}

			function getClassmate(id)  {
				return $http.get(url + id);
			}

			return {
				getClassmates: getClassmates,
				getClassmate: getClassmate,
				// updateFeels: updateFeels
			};

		}]);

}()); // end of iif