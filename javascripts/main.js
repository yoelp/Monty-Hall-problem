angular.module("MontyHall",[]);
angular.module("MontyHall").controller("autoCalc",function($scope){
	$scope.times = 0;
	$scope.choosenWon = 0;
	$scope.suggestedWon = 0;
	$scope.runs = [];
	$scope.calcOnes = function(){
		var results = calc();
		$scope.choosen = results.choosen;
		$scope.suggested = results.suggested;
		$scope.hasIt = results.hasIt;
		$scope.times += 1;
		if(results.choosen == results.hasIt)
			$scope.choosenWon +=1
		else
			$scope.suggestedWon +=1
		$scope.choosenPercent = 100 / $scope.times * $scope.choosenWon;
		$scope.suggestedPercent = 100 / $scope.times * $scope.suggestedWon;
	};
	window.a = $scope
    $scope.calc = function(){
    	$scope.times = 0;
		$scope.choosenWon = 0;
		$scope.suggestedWon = 0;
    	var i = 0;
    	for(;i<$scope.timeToCalc;i++){
    		$scope.calcOnes();
    	}
    	$scope.runs.push({
    			times : $scope.times,
    			choosen : $scope.choosenPercent,
    			suggested : $scope.suggestedPercent,
    			t : new Date().getTime()
    		});
    }
});
