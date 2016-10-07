youRadioApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/index");
  
  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "templates/initial.html"
    })
    .state('register', {
      url: "/register",
      templateUrl: "templates/register.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html"
    })
    .state('list', {
      url: "/list",
      templateUrl: "templates/list.html"
    })
    .state('welcome', {
      url: "/welcome",
      templateUrl: "templates/welcome.html"
    })
    .state('contacts', {
      url: "/contacts",
      templateUrl: "templates/contacts.html"
    })
    .state('listStations', {
      url: "/listStations",
      templateUrl: "templates/listStations.html"
    })
    .state('listPrograms', {
      url: "/listPrograms/:stationId",
      templateUrl: "templates/listPrograms.html"
    });

});