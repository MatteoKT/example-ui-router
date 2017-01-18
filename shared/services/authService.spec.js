// Be descriptive with titles here. The describe and it titles combined read like a sentence.
describe('Users factory', function() {
    var AuthService;

    // Before each test load our hello module
    beforeEach(angular.mock.module('hello'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_AuthService_) {
        AuthService = _AuthService_;
    }));

    var $rootScope, $state, $injector, state = 'login';

    beforeEach(function() {


        inject(function(_$rootScope_, _$state_, _$injector_, $templateCache) {
            $rootScope = _$rootScope_;
            $state = _$state_;
            $injector = _$injector_;

            // We need add the template entry into the templateCache if we ever
            // specify a templateUrl
            $templateCache.put('loginView.html', '');
        })
    });

    it('should respond to URL', function() {
        expect($state.href(state, { })).toEqual('#!/login');
    });

    // A simple test to verify the Users factory exists
    it('should exist', function() {
        expect(AuthService).toBeDefined();
    });
});