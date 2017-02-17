'use strict';

/**
 * @ngdoc function
 * @name fontanasApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the fontanasApp
 */
angular.module('fontanasApp')
  .controller('HeaderCtrl', function ($scope, $state, $mdMedia) {
  	$scope.menuIsVisible = false;
  	$scope.navigationItems = [
	  	{
	  		text : 'Home',
	  		link : 'home.main'
	  	},
	  	{
	  		text : 'About',
	  		link : 'about.main'
	  	},
	  	{
	  		text : 'Travel Deals',
	  		link : 'deals.main'
	  	},
	  	{
	  		text : 'Our Partners',
	  		link : 'partners.main'
	  	},
	  	{
	  		text : 'Starlight barking',
	  		link : 'sb.main'
	  	},
	  	{
	  		text : 'Blog',
	  		link : 'blog.main'
	  	},
	  	{
	  		text : 'Contact',
	  		link : 'contact.main'
	  	}
	];
  	$scope.isSelected = function (link) {
  		if (link == $state.current.name) {
  			return true;
  		}
  		else {
  			return false;
  		}
  	}
  	$scope.showMenuButton = function () {
  		return !$mdMedia('gt-sm');
  	}
  	$scope.toggleMenu = function () {
  		$scope.menuIsVisible = !$scope.menuIsVisible;
  	}
  	$scope.media = function (i) {
  		return $mdMedia(i);
  	}
  });
