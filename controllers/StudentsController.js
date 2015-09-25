studentList.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.changeSignInStatus = function ($scope) {
        $scope.signedIn = $scope.signedIn ? false : true;  //if signed already, then make it false, else true
    };
    $scope.StudentsFactory = StudentsFactory;
});
