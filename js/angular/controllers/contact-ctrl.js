// A la variable youRadioApp (que se comporta como un arreglo) le agregamos un arreglo (controller) 
youRadioApp.controller('ContactCtrl', ContactCtrl);
  	ContactCtrl.$inject = ['$scope', '$state', 'contactService'];

	function ContactCtrl($scope, $state, contactService) {
	    $scope.tittle = 'Contacts';

	    init();

	    function init() {
	    	$scope.contacts = contactService.getAll();	
	    }
	    
		$scope.addContact = function() {
	     	var contact = {'username': $scope.username}
	      	contactService.add(contact);
	      	$scope.contacts = contactService.getAll();	
		}

		$scope.delete = function(contact) {
			var index = $scope.contacts.indexOf(contact);
			if (index > -1) {
				$scope.contacts.splice(index, 1);
				$scope.contacts = contactService.getAll();
			}
		}

	}