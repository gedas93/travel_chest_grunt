'use strict';

/**
 * @ngdoc function
 * @name fontanasApp.controller:BlogMainCtrl
 * @description
 * # BlogMainCtrl
 * Controller of the fontanasApp
 */
angular.module('fontanasApp')
  .controller('BlogMainCtrl', function ($scope) {
  	$scope.resource = {
  		post : [
  		{
  			title : 'Post 1',
  			content : 'Lorem Ipsum...',
  			imageSource : '/img/img.png'
  		}]
  	}
  }), [
  	'$scope',
  	'BlogMainCtrl'
  ];
