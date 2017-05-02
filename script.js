var app = angular
            .module("myModule", [])
            .controller("myController", function($scope) {
                var employees = [{
                    firstName: "Tony", lastName: "Kraken", gender: 'Male', city: "New York", salary: 100000.103093095},
                    {firstName: "David", lastName: "Hastings", gender: 'Male', city: "London", salary: 56930.293},
                    {firstName: "Carol", lastName: "Chapelle", gender: 'Female', city: "Paris", salary: 508032.2},
                    {firstName: "TJ", lastName: "Tanaka", gender: 'Male', city: "Tokyo", salary: 83333},
                    {firstName: "Gunter", lastName: "Guttenberg", gender: 'Male', city: "Berlin", salary: 75000},
                    {firstName: "Michelle", lastName: "Johnson", gender: 'Female', city: "San Diego", salary: 200000.9},
                ];
                $scope.employees = employees;
                var technologies = [
                    {name: "C++", likes: 0, dislikes: 0},
                    {name: "HTML", likes: 0, dislikes: 0},
                    {name: "SQL", likes: 0, dislikes: 0},
                    {name: "AngularJS", likes: 0, dislikes: 0}
                ];
                $scope.technologies = technologies;
                $scope.incrementLikes = function(technology) {
                    technology.likes++;
                }
                $scope.incrementDislikes = function(technology) {
                    technology.dislikes++;
                }
                $scope.rowLimit = 3;
                $scope.sortColumn = 'name';
                $scope.reverseSort = false;
                $scope.sortData = function(column) {
                    $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                    $scope.sortColumn = column;
                }
                $scope.getSortClass = function(column) {
                    if($scope.sortColumn == column) {
                        return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
                    }
                    return '';
                }
                $scope.search = function(item) { //this is supposed to be used in filter:search to enable a direct search by text feature
                    //but it creates an error that toLowerCase() cannot be used on undefined.  Pretty sure it's related to item
                    if($scope.searchText == undefined) {
                        return true;
                    } else {
                        if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                           item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                            return true;
                        }
                    }
                    return false;
                }"c{"
            });
