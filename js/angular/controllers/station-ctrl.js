// A la variable youRadioApp (que se comporta como un arreglo) le agregamos un arreglo (controller) 
youRadioApp.controller('StationCtrl', StationCtrl);
  	StationCtrl.$inject = ['$scope', '$state', 'stationService'];

	function StationCtrl($scope, $state, stationService) {
	    $scope.tittle = 'Emisoras';

	    init();

	    function init() {
	    	$scope.stations = stationService.getAll();	
	    }


    	$scope.gotoPrograms = function(station) {
      		$state.go("listPrograms", {"stationId": station.id});
	    }

	}