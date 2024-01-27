# invoke webrequest approach
$headers=@{}
$headers.Add("X-RapidAPI-Key", "XXXXXXXXXXXXX")
$headers.Add("X-RapidAPI-Host", "produkter.p.rapidapi.com")
$response = Invoke-WebRequest -Uri 'https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid' -Method GET -Headers $headers

# invoke restmethod approach
$headers=@{}
$headers.Add("X-RapidAPI-Key", "XXXXXXXXXXXXX")
$headers.Add("X-RapidAPI-Host", "produkter.p.rapidapi.com")
$response = Invoke-RestMethod -Uri 'https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid' -Method GET -Headers $headers