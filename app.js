var studentList = angular.module('studentList', ['ui.router']);

studentList.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('sign-in', {
    url: "/sign-in",
    templateUrl: "partials/sign-in.html",
    controller: 'StudentsCtrl'
  });

  $stateProvider.state('attendance', {
    url: "/attendance",
    templateUrl: "partials/attendance.html",
    controller: 'StudentsCtrl'
  });
});
