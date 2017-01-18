(function (angular) {
    'use strict';
angular.module('hello', ['ui.router','ui.bootstrap','ngCookies']).config(function($stateProvider, $urlRouterProvider) {
  // An array of state definitions
  var states = [
    { name: 'login', url:'/login', component: 'login', authenticate:false},
    { name: 'home', url: '/', component: 'home', authenticate:true },
    { name: 'home.hello', url: '/hello', component: 'hello', authenticate:true },
    { name: 'home.about', url: '/about', component: 'about', authenticate:true },
    {
      name: 'home.people',
      url: '/people', 
      component: 'people',
      resolve: {
        people: function(PeopleService) {
          return PeopleService.getAllPeople();
        }
      }
      , authenticate:true
    },
    
    { 
      name: 'people.person', 
      url: '/{personId}', 
      component: 'person',
      resolve: {
        person: function(people, $stateParams) {
          return people.find(function(person) { 
            return person.id === $stateParams.personId;
          });
        }
      },
        authenticate:true
    }
  ]

  $urlRouterProvider.otherwise("/login");
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
}).run(['$rootScope', '$state','$cookieStore','$http','$stateParams', 'AuthService', function ($rootScope, $state,$cookieStore,$http,$stateParams, AuthService) {
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        if (toState.authenticate && !AuthService.isAuthenticated()){
            // User isn’t authenticated
            $state.transitionTo("login");
            event.preventDefault();
        }
    });
  //$http.get('data/people.json', { cache: true });
}]);
})(window.angular);