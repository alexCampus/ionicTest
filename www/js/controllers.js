angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})




.controller('JqueryCtrl',function($scope){
  $('document').ready(function() {

    $('#quantity').keyup(function(){
      total();
    });

    $('#cost').keyup(function(){
      total();
    });

      function total() {
        var total = $('#quantity').val()*$('#cost').val();
        total = Math.round(total * 100)/100;

        $('#total').text( '$ '+total);
      };
  });
})

.controller('JavascriptCtrl', function($scope){
  
  var qt = document.getElementById('quantity');
  qt.addEventListener('keyup', function(){
    total();
  });

  var ct = document.getElementById('cost');
  ct.addEventListener('keyup', function(){
    total();
  });

  function total() {
    
    var total = qt.value*ct.value;
    total = Math.round(total * 100)/100;
    document.getElementById('total').innerHTML = '$ ' +total;
  }
});


