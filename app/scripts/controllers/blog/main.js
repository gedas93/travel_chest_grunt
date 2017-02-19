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
  			title : '5 Winter travel tips',
  			content : 'Sed tempor fringilla ultrices lorem. Vestibulum fringilla, sapien nec aliquet dictum, nulla dui molestie magna, in tincidunt arcu dui ac ligtula. Nulla volutpat maximus gravida donec eu mauris efficitur.',
  			imageSource : 'images/posts/post-1.png',
  			postTheme : 'dark',
  			buttonTheme : 'middle'
  		},
  		{
  			title : 'Why we began - plus an intro to Starlight Barking!',
  			content : 'Sapien nec aliquet dictum, nulla dui molestie magna, in tincidunt arcu dui ac ligtula. Nulla volutpat maximus gravida donec eu mauris efficitur, commodo lacus vitae molestie.',
  			imageSource : 'images/posts/post-2.png',
  			postTheme : 'middle',
  			buttonTheme : 'light'
  		},
  		{
  			title : 'Backpacking holiday? What you need to know',
  			content : 'Sed tempor fringilla ultrices lorem. Vestibulum fringilla, sapien nec aliquet dictum, nulla dui molestie magna, in tincidunt arcu dui ac ligtula. Nulla volutpat maximus.',
  			imageSource : 'images/posts/post-3.png',
  			postTheme : 'light',
  			buttonTheme : 'dark'
  		},
  		{
  			title : '33 things to do in Greece',
  			content : 'Sed tempor fringilla ultrices lorem. Vestibulum fringilla, sapien nec aliquet dictum, nulla dui molestie magna, in tincidunt arcu dui ac ligtula. Nulla volutpat maximus gravida donec eu mauris efficitur,',
  			imageSource : 'images/posts/post-4.png',
  			postTheme : 'dark',
  			buttonTheme : 'middle'
  		},
  		{
  			title : 'Bella finds her forever home!',
  			content : 'Sed tempor fringilla ultrices lorem. Vestibulum fringilla, sapien nec aliquet dictum, nulla dui molestie magna, in tincidunt arcu dui ac ligtula. Nulla volutpat maximus gravida donec eu mauris efficitur,',
  			imageSource : 'images/posts/post-5.png',
  			postTheme : 'dark',
  			buttonTheme : 'light'
  		},
  		{
  			title : 'Giving back: How you can change the world',
  			content : 'Vestibulum fringilla, sapien nec aliquet dictum, nulla dui molestie magna, in tincidunt arcu dui ac ligtula. Nulla volutpat maximus gravida donec eu mauris efficitur,',
  			imageSource : 'images/posts/post-6.png',
  			postTheme : 'light',
  			buttonTheme : 'dark'
  		}]
  	};
  	//temp function
  	// var multiplyArray = function (arrayItem, times) {
  	// 	var newArray = [];
  	// 	for (var i = 0 ; i < times; i++){
  	// 		arrayItem.title = 'Post_' + i;
  	// 		newArray.push(arrayItem);
  	// 	}
  	// 	return newArray;
  	// }
  	// $scope.posts = multiplyArray($scope.resource.post[0], 6);

  }), [
  	'$scope',
  	'BlogMainCtrl'
  ];
