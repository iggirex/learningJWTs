// angular.module('angularJWT')
// // do not put ARRAY as second argument to angular module! it will create a new module instead of looking for already created one
// .controller('login', function($scope){
//   $scope.test = 'g31 is the best!'
// })

//the only way to communicate angular to express is $http
//$location comes from ng-route
angular.module('angularJWT')
.controller('login', function($scope, $http, $location){
  $scope.create = function() {
    const user = {
      username: $scope.username,
      password: $scope.password
    }
    console.log(user)
    $http.post('/users/create', user)
    .then(function(result){
      // console.log(result)
      localStorage.setItem('user', JSON.stringify(result.data))

      //this is redirection, but different than res.redirect because page is NOT reloaded only 
      $location.path('/dashboard')
    })
    .catch(function(err){
      console.error("there was an error", err)
    })
  }
})
//$http post returns a promise just like jQuery
