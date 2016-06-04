var profiling = angular.module('profilingCtrl', ['profilingSrv']);

profiling.controller('PersonalInfoCtrl', ['$rootScope', '$scope', '$filter', 'PersonalInfo', 'Student', 
function($rootScope, $scope, $filter, PersonalInfo, Student) {
    $scope.gender = "male";

    $scope.submit = function(event) {
        var birthDate = $filter('date')($scope.birthDate, 'yyyy-MM-dd', '+0800');

        PersonalInfo.post({
            'firstName': $scope.firstName,
            'middleName': $scope.middleName,
            'lastName': $scope.lastName,
            'gender': $scope.gender,
            'address': $scope.address,
            'contactNumber': $scope.contactNumber,
            'birthPlace': $scope.birthPlace,
            'birthDate': birthDate
        }).$promise.then(
            function(result) {
                Student.init();
                Student.personalInfo = result;

                //Go to profile tab
                $rootScope.tabs.selectedIndex = 1;
            }, function(error) {
            }
        );
    };
}]);
