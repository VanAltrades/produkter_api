<!-- curl approach -->
<?php

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"X-RapidAPI-Host: produkter.p.rapidapi.com",
		"X-RapidAPI-Key: XXXXXXXXXXXXX"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
	echo $response;
}


// guzzle approach

// <?php

// $client = new \GuzzleHttp\Client();

// $response = $client->request('GET', 'https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid', [
// 	'headers' => [
// 		'X-RapidAPI-Host' => 'produkter.p.rapidapi.com',
// 		'X-RapidAPI-Key' => 'XXXXXXXXXXXXX',
// 	],
// ]);

// echo $response->getBody();
