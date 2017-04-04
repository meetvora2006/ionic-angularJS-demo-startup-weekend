var App = angular.module("App", ["ionic"]);


App.controller("AppCtrl", function($scope, $state) {
  $scope.match = function(){

setTimeout(function(){

  document.getElementById( 'myspin' ).style.display = 'none';
    document.getElementById( 'secondpage' ).style.display = 'block';

  }, 3000);
}
$scope.backhome = function(){
 location.reload();
}




$scope.groups = [{
	items:["A common element occasionally found in water in trace amounts. Elevated levels may be associated with forms of dementia, such as Alzheimer's disease.", "Result - <0.05 mg/L <br>None found (acceptable result) <br>MCL: [0.050 mg/L]", "Method - EPA 200.7"," Date - 11/14/14"],
	name: "Aluminium"
},
{
	items:["A trace element; occasionally found in water in trace amounts. High levels of antimony can increase blood cholesterol and decrease blood glucose.", "Result - <0.005 mg/L <br>None found (acceptable result) <br>MCL: 0.006 mg/L ", "Method - EPA 200.8"," Date - 11/14/14"],
	name: "Antimony"
},
{
	items:["A trace element; occasionally found in water. High arsenic symptoms may include fatigue, depression, weight loss, hair loss, nausea or white lines across fingernails and toenails.", "Result - <0.002 mg/L <br>None found (acceptable result) <br>MCL: 0.01 mg/L  ", "Method - EPA 200.8"," Date - 11/14/14"],
	name: "Arsenic"
},
{
	items:["A common element; <br> frequently found in water in trace amounts. <br> Elevated levels may increase blood pressure.", "Result -  <0.05 mg/L <br>None found (acceptable result) <br>MCL: 2 mg/L ", "Method - EPA 200.7"," Date - 11/14/14"],
	name: "Barium"
}];


$scope.toggleGroup = function(group) {
  if ($scope.isGroupShown(group)) {
    $scope.shownGroup = null;
  } else {
    $scope.shownGroup = group;
  }
};
$scope.isGroupShown = function(group) {
  return $scope.shownGroup === group;
};


});
