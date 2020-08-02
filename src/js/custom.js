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
			title: false,
			image: false,
			description: false
		}
	}) // Vue ENDS


	// Making the axios request
	// var url = 'http://newsapi.org/v2/top-headlines?' +
	//           'country=us&' +
	//           'apiKey=7a29e827b9d546e5b54416430ce0fc27';
	// var req = new Request(url);
	// fetch(req)
	//     .then(function(response) {
	//         // console.log(response.json());
	// 				app.weatherData = response.json();
	// 				console.log(app.response);
	//     })

		// GET request for remote image in node.js

	axios({
	  method: 'get',
	  url: 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e156c57afb23498ea5b1404034a6e785'
	  // responseType: 'stream'
	})
	  .then(function (response) {
	    // console.log(response)
			app.newsData = response
			console.log(app.newsData)
			console.log('dsdsdasdasdas')
	  });

	// getImage STARTS
	function getImage () {
		console.log('function works')
		for (var i = 0; i < 20; i++) {
			console.log(i)

			app.image = {
				i: app.data.articles[i].urlToImage
			}
		}
		// testing to see if the data is there
		console.log(app.image)
	} // GetIMAGE ENDS










	// Calling the functions
	// getImage()

})(); // iffe ENDS
