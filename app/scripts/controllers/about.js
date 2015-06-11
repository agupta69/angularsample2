'use strict';

/**
 * @ngdoc function
 * @name angularexample2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularexample2App
 */
angular.module('angularexample2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
