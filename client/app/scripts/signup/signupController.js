(function() {
  'use strict';
  angular
    .module('clientApp')
    .controller('signupController', SignupController);

  SignupController.$inject = ['$scope', '$http'];

  function SignupController($scope, $http) {
    var user, signup;

    $scope.signup = signup = {};
    signup.user = user = {};

    signup.submit = function() {
      if (
        !user.firstname ||
        !user.lastname ||
        !user.email ||
        !user.password1 ||
        !user.password2
      ) {
        alert('Please fill out all form fields.');
        return false;
      }

      if (user.password1 !== user.password2) {
        alert('Your passwords must match');
        return false;
      }

      console.log(user);

      var request = $http.post('/signup', user);

      request.success(function(data) {
        console.log(data.msg);
      });

      request.error = $http.error(function(data) {
        console.log(data.msg);
      });
    };
  }
})();
