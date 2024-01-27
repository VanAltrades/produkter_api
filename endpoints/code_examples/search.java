// asynchttp approach

AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("GET", "https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid")
	.setHeader("X-RapidAPI-Key", "XXXXXXXXXXXXX")
	.setHeader("X-RapidAPI-Host", "produkter.p.rapidapi.com")
	.execute()
	.toCompletableFuture()
	.thenAccept(System.out::println)
	.join();

client.close();


// java.net.http approach

// HttpRequest request = HttpRequest.newBuilder()
// 		.uri(URI.create("https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid"))
// 		.header("X-RapidAPI-Key", "XXXXXXXXXXXXX")
// 		.header("X-RapidAPI-Host", "produkter.p.rapidapi.com")
// 		.method("GET", HttpRequest.BodyPublishers.noBody())
// 		.build();
// HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
// System.out.println(response.body());


// okhttp approach

// OkHttpClient client = new OkHttpClient();

// Request request = new Request.Builder()
// 	.url("https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid")
// 	.get()
// 	.addHeader("X-RapidAPI-Key", "XXXXXXXXXXXXX")
// 	.addHeader("X-RapidAPI-Host", "produkter.p.rapidapi.com")
// 	.build();

// Response response = client.newCall(request).execute();


// unirest approach

// HttpResponse<String> response = Unirest.get("https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid")
// 	.header("X-RapidAPI-Key", "XXXXXXXXXXXXX")
// 	.header("X-RapidAPI-Host", "produkter.p.rapidapi.com")
// 	.asString();