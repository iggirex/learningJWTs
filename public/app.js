// /everything in public folder gets rendered by the browser

// angular.module('angularJWT', ['ngRoute'])
// .config(function($routeProvider, $locationProvider){
//   $routeProvider
//     .when('/', {
//       // template: '<h1>Hello from angular route</h1>'
//       templateUrl: '/login/login.template.html',
//       controller: function($scope){
//         $scope.test = 'I am working~!!!!!'
//       }
// ITS NOT THE BEST TO PUT CONTROLLERS RIGHT IN HERE
//     })
// })

angular.module('angularJWT', ['ngRoute'])
.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      // template: '<h1>Hello from angular route</h1>'
      templateUrl: '/login/login.template.html',
      controller: "login"
    })
    // .when('/dashboard', {
    templateUrl: '/dashboard/dashboard.template.html'
    //   template: '<h1>I am a dashboard</h1>',
    // })
    //This above is a second Angular route
})
