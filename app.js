var myApp = angular.module('hello', ['ui.router','ngCookies']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  // An array of state definitions
  var states = [
    { name: 'hello', url: '/hello', component: 'hello', authenticate:true },
    { name: 'about', url: '/about', component: 'about', authenticate:true },
    { name: 'login', url:'/login', component: 'login', authenticate:false},
    {
      name: 'people', 
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
      }
    }
  ]

    $urlRouterProvider.otherwise("/login");
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});


myApp.run(['$rootScope', '$state','$cookieStore', 'AuthService', function ($rootScope, $state,$cookieStore, AuthService) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
        if (toState.authenticate && !AuthService.isAuthenticated()){
            // User isn’t authenticated
            $state.transitionTo("login");
            event.preventDefault();
        }
    });
  //$http.get('data/people.json', { cache: true });
}]);