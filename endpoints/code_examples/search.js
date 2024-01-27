// xmlhttprequest approach

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid');
xhr.setRequestHeader('X-RapidAPI-Key', 'XXXXXXXXXXXXX');
xhr.setRequestHeader('X-RapidAPI-Host', 'produkter.p.rapidapi.com');

xhr.send(data);


// axios approach

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://produkter.p.rapidapi.com/search',
//   params: {
//     q: 'peak DEF002 diesel exhaust fluid'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'XXXXXXXXXXXXX',
//     'X-RapidAPI-Host': 'produkter.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


// fetch approach

// const url = 'https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'XXXXXXXXXXXXX',
// 		'X-RapidAPI-Host': 'produkter.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// jquery approach

// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'XXXXXXXXXXXXX',
// 		'X-RapidAPI-Host': 'produkter.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });