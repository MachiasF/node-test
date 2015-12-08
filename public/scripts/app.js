var app = angular.module('movieFinder', ['ui.router', 'ngGrid'])

app.config(function($stateProvider, $urlRouterProvider) {
   
   $urlRouterProvider.otherwise('/home');
   
   $stateProvider
       
        .state('home', {
           abstract: true,
           url: '/home',
           templateUrl: '/views/homeTmpl.html',
           controller: 'homeCtrl',
           
        })


});