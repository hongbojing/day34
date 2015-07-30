angular.module('myApp',[])
.controller('ClockController',function($scope,$timeout){
  var showTime=function(){
    $scope.presentTime=new Date();
    $timeout(function(){
      showTime();
    },1000);
  };

//the key is to nest the function inside of the $timeout

  showTime();
})
;



