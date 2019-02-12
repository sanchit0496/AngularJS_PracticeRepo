/*var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.firstName= "John";
  $scope.lastName= "Doe";
});*/
/*

var app=angular.module('myApp',[]);
app.controller('myCtrl', function($scope){
  $scope.firstName = "Hello";
  $scope.lastName = "World";
});*/

/*
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.name = "John Doe";
});
*/

/*
var app = angular.module('myApp', []);
app.controller('namePrint', function($scope){
  
  $scope.firstName = "Hello";
  $scope.secondName = "World";
  
  $scope.fullName = function(){
    return $scope.firstName + $scope.secondName;
  };
  
});
*/

/*
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
  $scope.carname = 'Mercedes';
});
*/

/*
var app = angular.module('myApp', []);
app.controller('fruit', function($scope){
  $scope.fruitname = 'Mango';
});
*/

/*
var app = angular.module('myApp', []);

app.controller('fruit', function($scope){
  $scope.fruitnames = ['Apple','Oranges'];
});
*/

/*
var app = angular.module('myApp',[]);
app.run(function($rootScope){
  $rootScope.color = 'Red';
});
app.controller('myCtrl', function($scope){
  $scope.color = 'blue';
});
*/

/*
angular.module('myApp',[]).controller("nameFormat", function($scope){
  $scope.name = 'Hello'
});
*/

/*
angular.module('myApp', []).controller('information', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
});
*/

/*
angular.module('myApp', []).controller('control',function($scope){
  $scope.names = ['Aasf','dfdsf','asfasf','sdffd','dsfdfsdfsdfsd'];
});
*/




/*
angular.module('myApp', []).controller('orderBy', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
  
  $scope.orderByMe = function(x){
    $scope.myOrderBy = x;
  }
    
});
*/


/*
var app = angular.module('myApp',[]);
app.filter('myFormat', function(){
  return function(x){
  var i,c,txt = "";
  for(i=0;i<x.length;i++){
    c = x[i];
    if(i%2 == 0){
      c = c.toUpperCase();
    }
    txt  = txt + c;
  }
    return txt;
  };  
});

app.controller('func', function($scope) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
        ];
});
*/


/* won't work until some data is obtained through a request
var app = angular.module('myApp', []);
app.controller('function', function($scope,$html){
  $http.get("welcome.htm").then(function(response){
    $scope.welcome_message = response.data;
  });
});
*/

/*
var app = angular.module('myApp',[]);
app.controller('conr', function($scope, $timeout){
  
  $scope.myHeader = 'Hello World';
  
  $timeout(function(){
    $scope.myHeader = "Hey There!"
  },2000);
  
});
*/

var app = angular.module('myApp', []);
app.controller('cont', function($scope, $interval){
  
  
  $scope.current_time = new Date().toLocaleTimeString();
  $interval(function(){
    $scope.current_time = new Date().toLocaleString();
  },1000);
  
  
});