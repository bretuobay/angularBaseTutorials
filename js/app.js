var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/_main.html",
        controller : "pagesController"
    })
    .when("/register", {
        templateUrl : "partials/_register.html",
          controller : "pagesController"
    })
    .when("/login", {
        templateUrl : "partials/_login.html",
          controller : "pagesController"
    })
    .when("/logout", {
        templateUrl : "partials/_main.html",// after logout go to main
          controller : "pagesController"
    })
    .when("/jobs-portal", {
         templateUrl : "partials/_admin.html",
          controller : "pagesController"
    })
    .when("/jobs-search", {
         templateUrl : "partials/_jobsearch.html",
          controller : "pagesController"
    })
    .when("/jobs-applied-for", {
         templateUrl : "partials/_jobsappliedfor.html",
          controller : "pagesController"
    })
    .when("/resume-management", {
         templateUrl : "partials/_resumemanagement.html",
          controller : "pagesController"
    })
    .when("/top-jobs", {
         templateUrl : "partials/_topjobs.html",
          controller : "pagesController"
    }).when("/job/94838",{
       templateUrl : "partials/_job.html",
       controller : "pagesController"
    });
});
