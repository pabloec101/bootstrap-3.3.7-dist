// A la variable youRadioApp (que se comporta como un arreglo) le agregamos un arreglo (controller) 
youRadioApp.controller('MasterCtrl', MasterCtrl);


  MasterCtrl.$inject = ['$scope', '$state'];

  function MasterCtrl($scope, $state) {
    $scope.phones = [
     {'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.'},
     {'name': 'Motorola XOOM™ with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.'},
     {'name': 'MOTOROLA XOOM™',
      'snippet': 'The Next, Next Generation tablet.'}
    ];

    $scope.appName = 'You Radio';

    $scope.goto = function(url) {
      $state.go(url);
    }

  }