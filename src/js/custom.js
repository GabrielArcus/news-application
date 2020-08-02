// custom js file
var axios = require('axios');
var vue = require('vue');
import Vue from 'vue';

(function(){
	// console.log(vue);
	// console.log(axios);
	var url = 'http://newsapi.org/v2/top-headlines?' +
	          'country=us&' +
	          'apiKey=7a29e827b9d546e5b54416430ce0fc27';
	var req = new Request(url);
	fetch(req)
	    .then(function(response) {
	        console.log(response.json());
	    })

	var app = new Vue({
	  el: '#app',
	  data: {
	    message: 'Hello Vue!'
	  }
	})


})(); // iffe ENDS
