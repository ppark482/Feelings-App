(function(){

	angular.module('TheFeelings')

		.factory('FeelFactory', ['$rootScope', '$http', 'Restangular', function($rootScope, $http, Restangular) {

			var feelsBase = Restangular.all('feelings6'); 

			function getClassmates() {
				return $http.get(url);
			}

			function getClassmate(id)  {
				return $http.get(url + id);
			}

			function updateFeels(feels) {
				$http.put(url + thisUser.id, { high: feels.high, low: feels.low, gif: feels.gif }).success( function () {
					$rootScope.$broadcast('feels:updated');
				});
			}

			return {
				getClassmates: getClassmates,
				getClassmate: getClassmate,
				updateFeels: updateFeels
			}

		}]);

}()); // end of iif