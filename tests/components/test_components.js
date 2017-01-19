describe('Login Controller', function() {

    var $scope, $rootScope, $state, AuthService, LoginCtrl;
    beforeEach(angular.mock.module('hello'));

    beforeEach(inject(function($injector) {
        $rootScope=$injector.get('$rootScope');
        $controller=$injector.get('$controller');
        $scope=$injector.get('$scope');
        $state=$injector.get('$state');
        AuthService=$injector.get('AuthService');
        
        LoginCtrl = function () {
            return $controller('LoginCtrl',{
                '$scope' : $scope,
                '$rootScope':$rootScope,
                '$state': $state,
                'AuthService' : AuthService
            });
        };
            
    }));

    // it('should have a LoginCtrl controller', function() {
    //     expect('hello.LoginCtrl').toBeDefined();
    // });


    // beforeEach(inject(function(_login_) {
    //     login = _login_;
    // }));

});