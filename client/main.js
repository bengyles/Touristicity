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
        .state('airport-express', {
            url: '/airport-express',
            templateUrl: 'client/views/pages/publicTransportation/airportExpress.html'
        })
        .state('taxi', {
            url: '/taxi',
            templateUrl: 'client/views/pages/publicTransportation/taxi.html'
        })
        .state('transport-boat', {
            url: '/transport-boat',
            templateUrl: 'client/views/pages/publicTransportation/boat.html'
        })
        .state('helicopter', {
            url: '/helicopter',
            templateUrl: 'client/views/pages/publicTransportation/helicopter.html'
        })
        //rental
        .state('rental', {
            url: '/rental',
            templateUrl: 'client/views/pages/rental/index.html'
        })
        .state('scooter', {
            url: '/scooter',
            templateUrl: 'client/views/pages/rental/scooter.html'
        })
        .state('car', {
            url: '/car',
            templateUrl: 'client/views/pages/rental/car.html'
        })
        .state('bike', {
            url: '/bike',
            templateUrl: 'client/views/pages/rental/bike.html'
        })
        .state('ATV', {
            url: '/ATV',
            templateUrl: 'client/views/pages/rental/MBT.html'
        })
        .state('boat', {
            url: '/boat',
            templateUrl: 'client/views/pages/rental/boat.html'
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
        .state('sea-products', {
            url: '/restaurants/sea-products',
            templateUrl: 'client/views/pages/restaurants/seaProducts.html'
        })
        .state('lounge', {
            url: '/restaurants/lounge',
            templateUrl: 'client/views/pages/restaurants/loungeBar.html'
        })
        .state('international-cuisine', {
            url: '/restaurants/international-cuisine',
            templateUrl: 'client/views/pages/restaurants/internationalCuisine.html'
        })
        //curiosities
        .state('curiosities', {
            url: '/curiosities',
            templateUrl: 'client/views/pages/curiosities/index.html'
        })
        .state('markets', {
            url: '/markets',
            templateUrl: 'client/views/pages/curiosities/markets.html'
        })
        //museums
        .state('museums', {
            url: '/museums',
            templateUrl: 'client/views/pages/museums/index.html'
        })
        .state('all-museums', {
            url: '/all-museums',
            templateUrl: 'client/views/pages/museums/museums.html'
        })
        .state('castles', {
            url: '/castles',
            templateUrl: 'client/views/pages/museums/castles.html'
        })
        .state('artisanal', {
            url: '/artisanal',
            templateUrl: 'client/views/pages/museums/artisanal.html'
        })
        //green tourism
        .state('green-tourism', {
            url: '/green-tourism',
            templateUrl: 'client/views/pages/greenTourism/index.html'
        })
        .state('parks', {
            url: '/parks',
            templateUrl: 'client/views/pages/greenTourism/parks.html'
        })
        .state('islands', {
            url: '/islands',
            templateUrl: 'client/views/pages/greenTourism/islands.html'
        })
        .state('mountains', {
            url: '/mountains',
            templateUrl: 'client/views/pages/greenTourism/mountains.html'
        })
        .state('rivers', {
            url: '/rivers',
            templateUrl: 'client/views/pages/greenTourism/rivers.html'
        })
        .state('sports', {
            url: '/sports',
            templateUrl: 'client/views/pages/greenTourism/sports.html'
        })
        //for the kids
        .state('kids', {
            url: '/kids',
            templateUrl: 'client/views/pages/kids/index.html'
        })
        .state('animationparks', {
            url: '/animationparks',
            templateUrl: 'client/views/pages/kids/animationparks.html'
        })
        .state('animals', {
            url: '/animals',
            templateUrl: 'client/views/pages/kids/animals.html'
        })
        //water activities
        .state('water-activities', {
            url: '/water-activities',
            templateUrl: 'client/views/pages/water/index.html'
        })
        .state('nautical-center', {
            url: '/nautical-center',
            templateUrl: 'client/views/pages/water/nauticalCenter.html'
        })
        .state('water-activities-overview', {
            url: '/water-activities-overview',
            templateUrl: 'client/views/pages/water/waterActivities.html'
        })
        //golf
        .state('golf', {
            url: '/golf',
            templateUrl: 'client/views/pages/golf/index.html'
        })
        //other
        .state('other', {
            url: '/other',
            templateUrl: 'client/views/pages/other/index.html'
        })
        //other
        .state('discover', {
            url: '/discover',
            templateUrl: 'client/views/pages/discover/index.html'
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