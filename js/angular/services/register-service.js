// Adicionamos a youRadioApp,
youRadioApp.factory('registerService', registerService); 

loginService.$inject = [];

function registerService() {

	var service = {
		register: registerFunction
	};
	return service;

	function registerFunction(username, password) {
		return "ok";
	};
}