youRadioApp.factory('loginService', loginService); 

loginService.$inject = [];

function loginService() {

    var service = {
        login: loginFunction
    };
    return service;

    function loginFunction(username, password) {
 	   return "ok";
    };
}