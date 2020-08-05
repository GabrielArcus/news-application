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
			contentDisplay: false,
			newsCatagory: {
				country: 'nz',
				catagory: 'business'
			}
		},
		methods: {
			usCatagory: function () {
				app.newsCatagory.country = 'us'
				axiosRequest()
			},
			ausCatergory: function () {
				app.newsCatagory.country = 'au'
				axiosRequest()
			},
			nzCatergory: function () {
				app.newsCatagory.country = 'nz'
				axiosRequest()
			},
			canCatergory: function () {
				app.newsCatagory.country = 'ca'
				axiosRequest()
			},
			ukCatergory: function () {
				app.newsCatagory.country = 'gb'
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

	function axiosRequest () {
		axios({
		  method: 'get',
		  url: 'http://newsapi.org/v2/top-headlines?country=' + app.newsCatagory.country + '&category=' + app.newsCatagory.catagory + '&apiKey=e156c57afb23498ea5b1404034a6e785'
		})
		  .then(function (response) {
		    // console.log(response)
				app.newsData = response;
				// console.log(app.newsData);
				app.news = response.data.articles;
				getImage();
				getTitle();
				getDesc();
		  }); // Request ENDS
	}
	// Making an axios request






	// getImage STARTS
	function getImage () {
		// console.log('function works AGAIN');
		var imageArray = [ ]
		for (var i = 0; i < app.newsData.data.articles.length; i++) {
			// console.log(i)


			imageArray.push(app.newsData.data.articles[i].urlToImage)


		}
		// console.log(imageArray + "this is arasdasdas")
		app.image = imageArray;
		// testing to see if the data is there
		// console.log(app.image);
	}; // GetIMAGE ENDS


	// getTitle STARTS
	function getTitle () {
		// console.log('function works AGAIN');
		var titleArray = [ ]
		for (var i = 0; i < app.newsData.data.articles.length; i++) {
			// console.log(i)


			titleArray.push(app.newsData.data.articles[i].title)


		}
		// console.log(imageArray + "this is arasdasdas")
		app.title = titleArray;
		// testing to see if the data is there
		// console.log(app.title);
	}; // GetTitle ENDS


	// getDesc STARTS
	function getDesc () {
		// console.log('function works AGAIN');
		var descriptionArray = [ ]
		for (var i = 0; i < app.newsData.data.articles.length; i++) {
			// console.log(i)


			descriptionArray.push(app.newsData.data.articles[i].description)


		}
		app.description = descriptionArray;
		// testing to see if the data is there
		// console.log(app.description);
	}; // getDesc ENDS







	// Calling the functions
	axiosRequest()


})(); // iffe ENDS
