'use strict';

angular.module('d3xmpApp')
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.menu = [
            {
                'title': 'Home',
                'link': '/'
            },
            {
                'title': 'd3 experiment',
                'link': '/'
            },
            {
                'title': 'Salsa Viva',
                'link': '/'
            },
            {
                'title': 'Contact',
                'link': '/'
            }
        ];

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });
