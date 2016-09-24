youRadioApp.controller('LoginCtrl', ['$scope','$state', 'loginService', LoginCtrl]);
// A la variable youRadioApp (que se comporta como un arreglo) le agregamos un arreglo (controller) 

  function LoginCtrl($scope, $state, loginService) {
    $scope.tittle = 'Login';
    $scope.esBienbenido = true;


    $scope.submit = function() {

      if ($scope.loginForm.$invalid) {
        return;
      }

      var response = loginService.login($scope.username, $scope.password);
      if(response == "ok") {
        alert('Usuario y contraseña correctos, respuesta: ' + response);
        $state.go('welcome');
      } else {
        $scope.esBienbenido = false;
      }
    }

  }