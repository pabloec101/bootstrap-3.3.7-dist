// A la variable youRadioApp (que se comporta como un arreglo) le agregamos un arreglo (controller) 
youRadioApp.controller('ProgramCtrl', ProgramCtrl);
  	ProgramCtrl.$inject = ['$scope', '$state', 'stationService','$stateParams'];

	function ProgramCtrl($scope, $state, stationService, $stateParams) {
		$scope.tittle = 'Programas';

	    init();

	    function init() {
	    	var stationId = $stateParams.stationId;
	    	$scope.programs = stationService.getStationPrograms(stationId);	
	    }

	}