// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//var app = angular.module('starter', ['ionic','ngCordova'])    edit for old code
angular.module('starter',['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
////////////////////////////////////////////////////////////////accesss gps
function getPosition(){
    navigator.geolocation.getCurrentPosition(gpsSuccess, onError);
}

   function gpsSuccess(position) {
	   var dateTime = String(new Date()).substring(4,24);	
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
				sessionStorage.setItem("longitude", position.coords.longitude);
				sessionStorage.setItem("latitude", position.coords.latitude);
				//$("#location").text(localStorage.getItem("long")); 
				//var newlong = 		position.coords.longitude ;	
		$('#locDetails').text(dateTime+ ' Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n')	;
		var dateTime = String(new Date()).substring(4,24);	  
		$('#locDate').text(dateTime);	  
		
	var outputString = "";

	$("#location").text("");
	
	for (var i = 0; i <	 localStorage.length; i++){
		outputString = "Location check done on "+dateTime+" longitude : "+sessionStorage.getItem("longitude")+ " Latitude : " + sessionStorage.getItem("latitude");
	$("#location").text(outputString);
	
}

    }
    function onError(){
           alert('GPS Location has failed. Pleasure ensure location settings are switched on and try again ');
}

						  

