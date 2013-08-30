'use strict';

var services = angular.module('sapmobileApp.services', ['ngResource']).
    config(function($httpProvider) {
        $httpProvider.defaults.headers.common['Authorization'] = 'Basic YWR1bW1lcjp0ZXN0MTIz';

        /*
         <add name="Access-Control-Allow-Origin" value="http://localhost:9000"/>
         <add name="Access-Control-Allow-Headers" value="Origin, X-Requested-With, Content-Type,Authorization"/>
         */
    }
);

services.service('Projects', function($http) {
    return {
        get: function() {
            var url = 'http://localhost:85/services/project/';

            return $http.get(url).then(function(response) {
                return response.data;
            }, function(response) {
                console.log(response.status);
                alert(response.status);
            });
        }
    }
});

services.service('ProjectTickets', function($http, $route) {
    return {
        get: function() {
            var projectId = $route.current.params.projectId;
            var url = 'http://localhost:85/instances/AcmeProcess/services/project/' + projectId + '/';

            return $http.get(url).then(function(response) {
                return response.data;
            }, function(response) {
                console.log(response.status);
                alert(response.status);
            });
        }
    }
});
