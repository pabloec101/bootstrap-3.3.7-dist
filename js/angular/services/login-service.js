youRadioApp.factory('loginService',['localStorageService',loginService] ); 


function loginService(localStorageService) {

    var service = {
        login: loginFunction
    };
    return service;

    function loginFunction(username, password) {
    	localStorageService.set("token", "XXSDGAS4355543SSADFSAE53W4");
    	localStorageService.set("username", username);
 	   return "ok";
    };
}