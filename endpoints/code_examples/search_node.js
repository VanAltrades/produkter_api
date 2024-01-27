// http approach

const http = require('https');

const options = {
	method: 'GET',
	hostname: 'produkter.p.rapidapi.com',
	port: null,
	path: '/search?q=peak%20DEF002%20diesel%20exhaust%20fluid',
	headers: {
		'X-RapidAPI-Key': 'XXXXXXXXXXXXX',
		'X-RapidAPI-Host': 'produkter.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();


// request approach

// const http = require('https');

// const options = {
// 	method: 'GET',
// 	hostname: 'produkter.p.rapidapi.com',
// 	port: null,
// 	path: '/search?q=peak%20DEF002%20diesel%20exhaust%20fluid',
// 	headers: {
// 		'X-RapidAPI-Key': 'XXXXXXXXXXXXX',
// 		'X-RapidAPI-Host': 'produkter.p.rapidapi.com'
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on('data', function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on('end', function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();


// unirest approach

// const unirest = require('unirest');

// const req = unirest('GET', 'https://produkter.p.rapidapi.com/search');

// req.query({
// 	q: 'peak DEF002 diesel exhaust fluid'
// });

// req.headers({
// 	'X-RapidAPI-Key': 'XXXXXXXXXXXXX',
// 	'X-RapidAPI-Host': 'produkter.p.rapidapi.com'
// });

// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });


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

// const fetch = require('node-fetch');

// const url = 'https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid';
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'XXXXXXXXXXXXX',
//     'X-RapidAPI-Host': 'produkter.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }