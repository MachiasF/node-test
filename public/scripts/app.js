var app = angular.module('movieFinder', ['ui.router', 'ngGrid'])

app.config(function($stateProvider, $urlRouterProvider) {
   
   $urlRouterProvider.otherwise('/');
   
   $stateProvider
       
        .state('home', {
           // abstract: true,
           url: '/',
           templateUrl: '../views/home.html',
           controller: 'homeCtrl',
           
        })


});