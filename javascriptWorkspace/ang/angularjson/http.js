angular.module("Myapp",[])
.controller("ctrl", function($scope,$http)
{
 $scope.profile=[];
 $scope.getData=function()
 {
   $http.get("http://localhost:3000/profiles").success(function(data)
   {
     if(data[0].Name==="Attish")
     {
       $scope.profile.push(data[0].Name);
     }
     console.log($scope.profile);
   });
   }
});
