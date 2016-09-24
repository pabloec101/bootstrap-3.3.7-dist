// Adicionamos a youRadioApp, contactService, para invocarlo desde los controller en donde lo necesitemos.
youRadioApp.factory('contactService', contactService); 

loginService.$inject = [];

function contactService() {

    var service = {
        add: addContact,
        getAll: getAll
    };

    var contacts =[];

    return service;

    function addContact(contact) {
 	   contacts.push(contact);
 	   return "ok";
    };

    function getAll() {
    	return contacts;
    };
}