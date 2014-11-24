'use strict';

/**
 * @ngdoc function
 * @name mocitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mocitApp
 */
angular.module('mocitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
