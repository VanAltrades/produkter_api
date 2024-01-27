// httpclient approach

using System.Net.Http.Headers;
var client = new HttpClient();
var request = new HttpRequestMessage
{
	Method = HttpMethod.Get,
	RequestUri = new Uri("https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid"),
	Headers =
	{
		{ "X-RapidAPI-Key", "XXXXXXXXXXXXX" },
		{ "X-RapidAPI-Host", "produkter.p.rapidapi.com" },
	},
};
using (var response = await client.SendAsync(request))
{
	response.EnsureSuccessStatusCode();
	var body = await response.Content.ReadAsStringAsync();
	Console.WriteLine(body);
}

// restsharp approach

// var client = new RestClient("https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid");
// var request = new RestRequest(Method.GET);
// request.AddHeader("X-RapidAPI-Key", "XXXXXXXXXXXXX");
// request.AddHeader("X-RapidAPI-Host", "produkter.p.rapidapi.com");
// IRestResponse response = client.Execute(request);