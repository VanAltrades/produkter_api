val client = OkHttpClient()

val request = Request.Builder()
	.url("https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid")
	.get()
	.addHeader("X-RapidAPI-Key", "XXXXXXXXXXXXX")
	.addHeader("X-RapidAPI-Host", "produkter.p.rapidapi.com")
	.build()

val response = client.newCall(request).execute()