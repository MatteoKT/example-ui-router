/**
 * Created by Giulio on 17/01/2017.
 */
myApp.component('login', {
    templateUrl: 'components/login/loginView.html',
    controller:  function ($scope, $rootScope, $state, AuthService) {
        // reset login status
        AuthService.clearCredentials();

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
});