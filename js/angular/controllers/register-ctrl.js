// A la variable youRadioApp (que se comporta como un arreglo) le agregamos un arreglo (controller) 
youRadioApp.controller('RegisterCtrl', RegisterCtrl);


  RegisterCtrl.$inject = ['$scope', '$state','registerService'];

  function RegisterCtrl($scope, $state, registerService) {
    $scope.tittle = 'Register';
    $scope.passwordEquals = true;

    $scope.register = function() {

      if ($scope.registerForm.$invalid) {
        return;
      }

      if($scope.password != $scope.passwordC) {
      	$scope.passwordEquals = false;
      	return;
      }

      var response = registerService.register($scope.username, $scope.password);
      if(response == "ok") {
        $state.go('welcome');
      } else {
        $scope.esBienbenido = false;
      }
    }

  }