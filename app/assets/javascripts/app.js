var portfolio = angular.module('portfolio', []);
(function () {
  "use strict";

  angular.module('portfolio', [

    'ngRoute'

  ])
  .config(['$routeProvider', function ($routeProvider)
    {

    $routeProvider
    .when('/', {
      templateUrl: 'assets/main.html'
    })  

    }])
})