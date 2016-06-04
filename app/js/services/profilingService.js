var profilingS = angular.module('profilingSrv', ['ngResource']);

profilingS.factory('PersonalInfo', ['$resource', function($resource) {
    var endpointUrl = config.apiBaseUrl + "profiling/personal_information/:id";

    return $resource(endpointUrl, {}, {
        get: {method:'GET', isArray:true},
        query: {method:'GET', isArray:true},
        post: {method:'POST', isArray:true}
    });
}]);


profilingS.service('Student', function() {
    this.personalInfo = {};
    this.profile = {};
    this.extendedProfile = {};
    this.init = function() {
        this.personalInfo = {};
        this.profile = {};
        this.extendedProfile = {};
    };

    return this;
});
