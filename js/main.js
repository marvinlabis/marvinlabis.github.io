/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('profileWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    // .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "partials/about.html", controller: "PageAboutCtrl"})
    .when("/work", {templateUrl: "partials/work.html", controller: "PageWorkCtrl"})
    .when("/speak", {templateUrl: "partials/speak.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);



/**
 * Controls all other Pages
 */
app.controller('PageAboutCtrl', function ( /*$scope, $location, $http */) {
  console.log("About Page Controller reporting for duty.");
    $('.carousel').carousel({
            accordion : false 
          });
})

app.controller('PageCtrl', function ( /*$scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");
});

app.controller('PageWorkCtrl', function ( /*$scope, $location, $http */) {
    $('.collapsible').collapsible({
            accordion : false 
          });
});

app.controller('MenuCtrl', function ($scope, $location) {
    $scope.getClass = function(path) {
        var cur_path = $location.path().substr(0, path.length);
        if (cur_path == path) {
            if($location.path().substr(0).length > 1 && path.length == 1 )
                return "";
            else
                return "active";
        } else {
            return "";
        }
    }
});
