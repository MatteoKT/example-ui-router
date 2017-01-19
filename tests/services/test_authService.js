// Be descriptive with titles here. The describe and it titles combined read like a sentence.
describe('Users factory', function() {
    var AuthService;
    var $rootScope, $state, $q, $injector, state = 'login',ctrl, httpBackend;

    // Before each test load our hello module
    beforeEach(angular.mock.module('hello'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_AuthService_) {
        AuthService = _AuthService_;
    }));



    beforeEach(
        inject(function(_$rootScope_, _$state_, _$injector_,_$q_, $templateCache) {
            $rootScope = _$rootScope_;
            $state = _$state_;
            $injector = _$injector_;
            $q = _$q_;


            // We need to add the template entry into the templateCache if we ever
            // specify a templateUrl
            $templateCache.put('loginView.html', '');

    }));
    // function $get(what) {
    //     return $injector.get(what);
    // }



    // var $q = $get('$q');

    it('should respond to URL', function() {
        expect($state.href(state, {})).toEqual('#!/login');
    });

    // A simple test to verify the Users factory exists
    it('should exist', function() {
        expect(AuthService).toBeDefined();
    });

    it('should have current state defined', function() {
        expect($state.current).toBeDefined();
    });

    it('current state be "login"', function() {
        $state.go('login');
        $rootScope.$digest();
        //$state.transitionTo('login');
        expect($state.current.name).toBe('login');
    });
});