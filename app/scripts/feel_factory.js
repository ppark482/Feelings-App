(function(){

	angular.module('TheFeelings')

		.factory('FeelFactory', ['$rootScope', 'Restangular', function($rootScope, Restangular) {

			var feelsBase = Restangular.all('feelings6');
			var entire_group = [];

			function getClassmates() {
				// return $http.get(url);
				return feelsBase.getList();
			}

			function getClassmate(id)  {
				// return $http.get(url + id);
				return feelsBase.get(id);
			}

			function updateFeels(feels) {
				// $http.put(url + thisUser.id, { high: feels.high, low: feels.low, gif: feels.gif }).success( function () {
				// 	$rootScope.$broadcast('feels:updated');
				// });
				feelsBase.post(feels).then( function() {
					$rootScope.$broadcast('feel:added');
				});
			}

			return {
				getClassmates: getClassmates,
				getClassmate: getClassmate,
				updateFeels: updateFeels
			};

		}]);

}()); // end of iif