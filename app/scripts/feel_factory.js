(function(){

	angular.module('TheFeelings')

		.factory('FeelFactory', ['$rootScope', '$http', function($rootScope, $http) {

			var url = 'http://tiy-atl-fe-server.herokuapp.com/collections/feelings6/';

			function getClassmates() {
				return $http.get(url);
			}

			function getClassmate(id)  {
				return $http.get(url + id);
			}

			function updateClassmate(feel) {
				$http.put(url + feel.id, { high: feel.high, low: feel.low, gif: feel.gif }).success( function () {
					$rootScope.$broadcast('feels:updated');
				});
			}

			return {
				getClassmates: getClassmates,
				getClassmate: getClassmate,
				updateClassmate: updateClassmate
			}

		}]);

}()); // end of iif