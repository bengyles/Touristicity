import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {angularGetText} from 'angular-gettext';

angular.module('touristicity', [
    angularMeteor,
    uiRouter,
    'gettext',
    'ui.bootstrap'
])
    .controller('ApplicationCtrl', function ($scope, gettextCatalog) {
        'ngInject';
        gettextCatalog.setCurrentLanguage('fr');
        gettextCatalog.debug = true;
    })

    .config(config);

function config($locationProvider, $urlRouterProvider, $stateProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/touristic-information');

    $stateProvider
        .state('touristic-information', {
            url: '/touristic-information',
            templateUrl: 'client/views/pages/touristic-information.html'
        })
        .state('public-transportation', {
            url: '/public-transportation',
            templateUrl: 'client/views/pages/publicTransportation/index.html'
        });

}