(function(){

	angular.module('TheFeelings')

	.controller('FeedController', ['$scope', 'FeelFactory',  function($scope, FeelFactory){

		// Create empty array to pull server data into
		var feedArray = [];

		FeelFactory.getClassmates().success(function(results){

			// update empty array with server data

			for(var i = 0; i < 6; i++){
				feedArray.push(results[i]);
			};

			$scope.feed = feedArray;
			console.log($scope.feed);

		});

	}]);

}());