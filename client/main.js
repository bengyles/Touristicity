import angular from 'angular';
import {Meteor} from 'meteor/meteor';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

const App = "touristicity";

angular.module(App, [
    angularMeteor,
    uiRouter,
    'gettext',
    'ui.bootstrap'
])
    .controller('ApplicationCtrl', function ($scope, gettextCatalog) {
        'ngInject';
        gettextCatalog.setCurrentLanguage('fr');
        gettextCatalog.debug = true;

        $scope.changeLanguage = function (lang) {
            gettextCatalog.setCurrentLanguage(lang);
        };
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
        //public transportation
        .state('public-transportation', {
            url: '/public-transportation',
            templateUrl: 'client/views/pages/publicTransportation/index.html'
        })
        //rental
        .state('rental', {
            url: '/rental',
            templateUrl: 'client/views/pages/rental/index.html'
        })
        //restaurants
        .state('restaurants', {
            url: '/restaurants',
            templateUrl: 'client/views/pages/restaurants/index.html'
        })
        .state('high-gastronomy', {
            url: '/restaurants/high-gastronomy',
            templateUrl: 'client/views/pages/restaurants/highGastronomy.html'
        })
        //curiosities
        .state('curiosities', {
            url: '/curiosities',
            templateUrl: 'client/views/pages/curiosities/index.html'
        })
        //museums
        .state('museums', {
            url: '/museums',
            templateUrl: 'client/views/pages/museums/index.html'
        })
        //green tourism
        .state('green-tourism', {
            url: '/green-tourism',
            templateUrl: 'client/views/pages/greenTourism/index.html'
        });

}

// Startup
if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
}
else {
    angular.element(document).ready(onReady);
}

function onReady() {
    angular.bootstrap(document, [App]);
}