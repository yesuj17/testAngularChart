var ctx = document.getElementById("myChart");
var interval;
var index = 0;
var myChart;
var myApp = angular.module('myApp', ['chart.js']);
myApp.controller('myController', function ($scope, $http, $interval) {
    $scope.appName = 'Angular Chart';
    $scope.timerRunning = false;
    
    $scope.labels = [0];
    $scope.data = [[0]];
    
    /// Start Draw Chart
    $scope.startDrawChart = function () { 
        /// Start Generate Chart Data.
        interval = $interval(function (){
            $scope.GenerateChartData();
        }, 1000);

        $scope.timerRunning = true;
    }

    /// Stop Draw Chart
    $scope.stopDrawChart = function () {
        /// Stop Generate Chart Data.
        $scope.timerRunning = false;
        index = 0;
    }

    /// Generate Chart Data.
    $scope.GenerateChartData = function () {
        if ($scope.timerRunning == false) {
            $interval.cancel(interval);
        };
        
        realTimeData = {
            "label": index,
            "point": Math.sin(index)
        };

        /// Real Time Data Post
        $http.post('/api/realChart', realTimeData)
            .then(function (response) {
            
            /// Refresh Real Time Chart
            $scope.labels.push(response.data.label);
            $scope.data[0].push(response.data.point);
        })
            .catch(function (response) {
            console.log("Fail");
        });
        
        index++;
    }
});