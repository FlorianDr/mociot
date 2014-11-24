'use strict';

/**
 * @ngdoc overview
 * @name mocitApp
 * @description
 * # mocitApp
 *
 * Main module of the application.
 */
var myApp = angular.module('mocitApp', [
	'ngAnimate',
	'ngTouch',
	'ui.router'
	]);
myApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	//
	// Now set up the states
	$stateProvider
	.state('information', {
		url: '/',
		templateUrl: 'views/_information.html'
	})
	.state('development', {
		url: '/development',
		templateUrl: 'views/_development.html'
	})
	.state('idea', {
		url: '/idea',
		templateUrl: 'views/_idea.html'
	})
	.state('name', {
		url: '/name',
		templateUrl: 'views/_name.html'
	})
	.state('organisation', {
		url: '/organisation',
		templateUrl: 'views/_organisation.html'
	}).state('media', {
		url: '/media',
		templateUrl: 'views/_media.html'		
	});
});
