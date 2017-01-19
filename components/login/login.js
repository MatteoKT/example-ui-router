
(function (angular) {
    angular.module('hello').component('login', {
        templateUrl: 'components/login/loginView.html',
        controller:  LoginCtrl
    });

    function LoginCtrl($scope, $rootScope, $state, AuthService) {
        // reset login status
        AuthService.clearCredentials();

        $scope.error = null;

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthService.login($scope.username, $scope.password, function (response) {
                if (response.success) {
                    AuthService.setCredentials($scope.username, $scope.password);
                    $state.transitionTo('home')
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }

    LoginCtrl.$inject = ['$scope', '$rootScope', '$state', 'AuthService'];

})(window.angular);