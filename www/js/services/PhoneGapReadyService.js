'use strict';

/* Services */

angular.module('PhoneGapReadyService', []).
  factory('phonegapReady', function ($rootScope) {
    return {

    	isReady: false,
    	getEvent: function() {
    		if(this.isReady == true) {
    			return "Conencted to Device";
    		}
    		else {
    			return "Connecting to Device";
    		}
    	},

	    // Application Constructor
	    initialize: function() {
			//alert("Initialize");	       
	        this.isReady = false;
	        this.bindEvents();
	        
	        
	    },
	    // Bind Event Listeners
	    //
	    // Bind any events that are required on startup. Common events are:
	    // 'load', 'deviceready', 'offline', and 'online'.
	    bindEvents: function() {
	        document.addEventListener('deviceready', this.onDeviceReady, false);
	    },
	    // deviceready Event Handler
	    //
	    // The scope of 'this' is the event. In order to call the 'receivedEvent'
	    // function, we must explicity call 'app.receivedEvent(...);'

	    onDeviceReady: function() {
	    	alert("deviceready");
	    	phonegapReady.isReady = true;
	    }
	};
});