'use strict';

/**
 * @ngdoc overview
 * @name fontanasApp
 * @description
 * # fontanasApp
 *
 * Main module of the application.
 */
angular
  .module('fontanasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngMaterial'
  ])
  .config(
    function($stateProvider){
      $stateProvider
        .state('blog', {
          url: '',
          templateUrl: 'views/common/content.html',
          abstract: true
        })
        .state('blog.main', {
          url: '/blog',
          templateUrl: 'views/blog/list.html',
          controller: 'BlogMainCtrl'
        })
        .state('home', {
          url: '',
          templateUrl: 'views/common/content.html',
          abstract: true
        })
        .state('home.main',{
          url: '/',
          templateUrl: 'views/home/main.html'
        })
        .state('about', {
          url: '',
          templateUrl: 'views/common/content.html',
          abstract: true
        })
        .state('about.main',{
          url: '/about',
          templateUrl: 'views/about/main.html'
        })
        .state('deals', {
          url: '',
          templateUrl: 'views/common/content.html',
          abstract: true
        })
        .state('deals.main',{
          url: '/travel-deals',
          templateUrl: 'views/deals/main.html'
        })
        .state('partners', {
          url: '',
          templateUrl: 'views/common/content.html',
          abstract: true
        })
        .state('partners.main',{
          url: '/our-partners',
          templateUrl: 'views/partners/main.html'
        })
        .state('sb', {
          url: '',
          templateUrl: 'views/common/content.html',
          abstract: true
        })
        .state('sb.main',{
          url: '/starlight-barking',
          templateUrl: 'views/sb/main.html'
        })
        .state('contact', {
          url: '',
          templateUrl: 'views/common/content.html',
          abstract: true
        })
        .state('contact.main',{
          url: '/contact-us',
          templateUrl: 'views/contact/main.html'
        })

    })
  .config(
    function ($urlRouterProvider) {
          $urlRouterProvider.otherwise('/blog');
        })

