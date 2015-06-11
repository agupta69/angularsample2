'use strict';

/**
 * @ngdoc function
 * @name angularexample2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularexample2App
 */
angular.module('angularexample2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
