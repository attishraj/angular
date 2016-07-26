var app1=angular.module("app1",[]);
 app1.controller('UserForm', function ($scope, $http){
   var config={
  headers:{ 'Content-Type':'application/JSON'}
 }
 $http.get("http://localhost:3000/profile")
 .then(function mySucces(response) {
         $scope.profile = response.data;
       },
       function myError(response){
         $scope.profile = response.statusText;
     });
 $scope.getData= function()
 {          var user ={  'Name':$scope.name,
        'Person_Details': {
          'e_mail': $scope.email,
          'When_you_were_born':$scope.dob,
          'livePlace': $scope.place,
          'Nationality': $scope.nationality,
          'Marital_status': $scope.maritalStatus}};
        var res= $http.post("http://localhost:3000/profile", user,config);
        res.success(function(data, status, headers, config) {
            $scope.message = data;
        });
        res.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };
    
});
