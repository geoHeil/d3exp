'use strict';

angular.module('d3xmpApp')
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.menu = [
            {
                'title': 'Home',
                'd3xmp': 'd3 examples',
                'salsa': 'salsaViva',
                'contact': 'Contact',
                'link': '/'
            }
        ];

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });
