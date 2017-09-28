// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
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

//calculate miles to kilometers
function calcMtk(){
	
	//Show values in input box in console
	console.log($("#inputMiles").val());

	//If statement for 
	if($("#inputMiles").val() != ""){
		
		//Store MIles 
		sessionStorage.setItem("miles", $("#inputMiles").val());
		//calculation
		sessionStorage.setItem("kilometres",sessionStorage.getItem("miles")*1.6);
			
		//Output "kilometres" to page
		$("#mtkOutput").text(sessionStorage.getItem("miles")+ " miles = " + sessionStorage.getItem("kilometres")+ " Kilometres");
	
		//Gets date and time and formats it
		var dateTime = String(new Date()).substring(4,24);
		
		//puts date and time in local storage
		var localStringMTK =dateTime +" : "+sessionStorage.getItem("miles")+ " miles = " + sessionStorage.getItem("kilometres")+ " Kilometres";
		localStorage.setItem("Conversionmtk : ",localStringMTK);
		
	} else{
		alert("Please input miles!");
	}
}		
//calculate kilometer to miles 
 
function calcKtm(){
	//Show values in input box in console
	console.log($("#inputKilom").val());

	//If statement for 
	if($("#inputKilom").val() != ""){
		
		//Store MIles 
		sessionStorage.setItem("kilometre1", $("#inputKilom").val());
		
		//calculation
		sessionStorage.setItem("mile1",sessionStorage.getItem("kilometre1")*0.621371);
			
		//Output "milesToKilo" to page
		$("#ktmOutput").text(sessionStorage.getItem("kilometre1")+ " kilometres = " + sessionStorage.getItem("mile1")	+ " miles");
	
		//Gets date and time and formats it
		var dateTime = String(new Date()).substring(4,24);
		
		//puts date and time in local storage
		var localStringKTM =dateTime +" : "+sessionStorage.getItem("kilometre1")+ " kilometres = " + sessionStorage.getItem("mile1")+ " miles"
		localStorage.setItem("Conversionktm: ",localStringKTM);
		
		$("#localConvert").text(localStorage.getItem("record"));


		
	} else{
		alert("Please input kilometres");
	}
}	
			  
function viewCon(){
	var outputString = "";
	var adder ="";
	$("#localConv").text("");
	
	for (var i = 0; i <	 localStorage.length; i++){
		outputString = localStorage.getItem(localStorage.key(i)) +"\n\n\n\n\n\n\n "+ adder ;
		adder = localStorage.getItem(localStorage.key(i));////outputString+ " \n"
	
	}
	//document.write("<br>");
	$("#localConvert").text(outputString);
	
}
