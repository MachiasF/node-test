var app = angular.module('movieFinder');

app.controller('homeCtrl', function($scope){ //, homeService) {
   


   	$scope.gridOptions = { 
      	data: 'movieData',
      	height: '110px',
      	sortInfo: {fields: ['Play', 'Title','YearReleased', 'Dircetor', 'Genre', 'Rating'], directions: ['asc']},
      	columnDefs: [
        	{field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        	{field: 'Title', displayName: 'Title'},
        	{field: 'YearReleased', displayName: 'Year Released'},
        	{field: 'Director', displayName: 'Director'},
        	{field: 'Poster', displayName: 'Poster', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        	{field: 'Genre', displayName: 'Genre'},
        	{field: 'Rating', displayName: 'Rating'},
      	]
  	};

   $scope.getMovieData = function(query) {

   }

});