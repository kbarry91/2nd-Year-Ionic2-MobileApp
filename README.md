#2nd-year-software-ionic-2-assignment-kbarry91

#Author  : Kevin Barry

#Project : Summary:
	WorkshopPro , The workshop helper app. This app has been developed as a project in my second year of Software developement for the module Mobile Application Developemnt. As I was extremely busy at the time the assignment was handed to us I decided to build an application that would would meet the epectations of the criteria we had whilst also being usefull to me .

#The applications functionality:
	This appliacation uses Ionics native properties to create a program that is of use to a user.

#Some of the functions off the app include:
	Access the devices flash light
	Send a SMS
	Make a call
	Update bills to a live online database using firebase
	Navigating easily or efficently through the app with the tab bar

#Getting started : 
	In order to complete this app I first had to set up my developemnt enviorment that I would use for development. Firstly I had to install ionic and cordova onto my machine. I installed the latest version of the SDK also .For added functionality I downloaded cmdr.exe this was extremly usefull all of the building of the project was done through the command line interface. In order to save, backup and upload my codeIi had to create a github account and install git on my computer. I used Visual Studio Code as my IDE as it it has some very nice plugins that help with the building of the program and also has a built in git funcrtion which makes uploading modified code to git alot easier.For the online database to save information I decided to use firebase so i had to set up a firebase account

#Programs used to create this application :
	Ionic v2
	cmder
	Visual Studio Code
	Ionic View
	Cordova
	Node.js
	Genemotion
	Firebase

#Running the App :
	To run this app it can be either viewed on the mobile applcation Ionic view using the project ID contained in the wiki.You can also clone the app to your machine using Git clone repo.Run npm install, mkdir www and ionic state restore. At this stage you can simpley navigate into the projects directory and run the ionic serve command and the application will be opened in the browser window. You may have to install the plugins callNumber, SMS and flashlight in order to getr them to work using your cloned project.

C:>npm install -g cordova cordova platform add android --save cordova plugin add cordova-plugin-SMS C:>npm install -g cordova cordova platform add android --save cordova plugin add cordova-plugin-callNumber C:>npm install -g cordova cordova platform add android --save cordova plugin add cordova-plugin-flashlight C:>npm install -g cordova cordova platform add android --save cordova plugin add cordova-plugin-firebase

#How the App works:
	Once you run the app you will be greeted by the home screen which will give a brief explination what the app is about. You will see an option to turn the devices torch on or off.At the bottom of the screen is two tabs, home and billing,Navigate to the biling tab and you will see the loaded bills allready in the database. To add a new bill to the database simply fill in the details and select add bill. On the Top right of the screen is a contact button.When clicked you will be pushed to a copntact page. This allows you to use Ionics native functionality to either send a messsage or call a customer.

If you have got this far thanks for reading my readme and I hope this app may be of benefit to you."