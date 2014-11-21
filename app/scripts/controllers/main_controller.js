(function(){

	angular.module('TheFeelings')

		.controller('MainController', ['FeelFactory', '$scope', '$location', '$rootScope', '$http', 'url', function(FeelFactory, $scope, $location, $rootScope, $http, url) {

			// Create empty array to pull server data into
			var groupArray = [];

			FeelFactory.getClassmates().success(function(results){

				$scope.entireGroup = results;
				// update empty array with server data
				groupArray = results;

			});

			$scope.updateFeels = function(feels) {
				// search through local array for object with matching sID
				var user = _.findWhere(groupArray, {
					sID: feels.sID
				});
				// updates the server with the new updated classmate
				$http.put(url + user._id, { high: feels.high, low: feels.low, gif: feels.gif }).success( function () {
					$rootScope.$broadcast('feels:updated');
				});
			}; // end updateFeels

			$scope.clickPerson = function(person) {
				// on click of an individual
				// go to that person's featured
				$location.path('/single/' + person._id);

			}; // end clickPerson



		}]); // end controller

}()); // end iif