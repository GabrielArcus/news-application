// custom js file
// Imports
var axios = require('axios');

// iffe STARTS
(function(){
	// Vue Application
	var app = new Vue({
		el: '#app',
		data: {
			newsData: false,
			news: false,
			title: false,
			image: false,
			description: false,
			newsCatagory: {
				country: 'nz',
				catagory: 'business'
			},
			weather: false,
			location: {
				lat: -36.8506,
				log: 174.7679
			}
		},
		methods: {
			usCatagory: function () {
				app.newsCatagory.country = 'us'
				axiosRequest()
			},
			business: function () {
				app.newsCatagory.catagory = 'business'
				axiosRequest()
			},
			entertainment: function () {
				app.newsCatagory.catagory = 'entertainment'
				axiosRequest()
			},
			general: function () {
				app.newsCatagory.catagory = 'general'
				axiosRequest()
			},
			health: function () {
				app.newsCatagory.catagory = 'health'
				axiosRequest()
			},
			science: function () {
				app.newsCatagory.catagory = 'science'
				axiosRequest()
			},
			sports: function () {
				app.newsCatagory.catagory = 'sports'
				axiosRequest()
			},
			technology: function () {
				app.newsCatagory.catagory = 'technology'
				axiosRequest()
			}
		}
	}) // Vue ENDS

	// End loading STARTS
	function endLoading() {
		var loadingGIF = document.getElementById('loading')
		$(loadingGIF).hide()
	} // End loading ENDS


	// Get location STARTS
	function getLocation() {
		if (navigator.geolocation) {
			console.log('geolocation is working')
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			console.log('not working')
		}
	} // Get location ENDS

	function showPosition(position) {
		console.log('showPosition working')
	  app.location = {
			lat: position.coords.latitude,
			lon: position.coords.longitude
		}
		getWeatherData()
	} // location Stuff ENDS



	// Get Weather Data STARTS
	function getWeatherData () {
		axios({
		  method: 'get',
			url: 'https://api.openweathermap.org/data/2.5/onecall?lat='+app.location.lat+'&lon='+app.location.lon+'&units=metric&exclude=hourly,minute&appid=66ce6f7e945db003aaa343f0bc010dc8'
		})
		.then(function (response) {
			app.weather = response.data
			console.log(app.weather);
			endLoading()
		});
	} // Get weather data ENDS


	// Get news api
	function axiosRequest () {
		axios({
		  method: 'get',
		  url: 'http://newsapi.org/v2/top-headlines?country=' + app.newsCatagory.country + '&category=' + app.newsCatagory.catagory + '&apiKey=e156c57afb23498ea5b1404034a6e785'
		})
		  .then(function (response) {
		    // console.log(response)
				app.newsData = response;
				// console.log(response);
				// console.log('jdsjkadshjkadshjkads');
				app.news = response.data.articles;
		  }); // Request ENDS
	}
	// Making an axios request







	// Calling the functions
	getLocation()
	axiosRequest()



})(); // iffe ENDS
