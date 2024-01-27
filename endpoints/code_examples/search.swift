import Foundation

let headers = [
	"X-RapidAPI-Key": "XXXXXXXXXXXXX",
	"X-RapidAPI-Host": "produkter.p.rapidapi.com"
]

let request = NSMutableURLRequest(url: NSURL(string: "https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid")! as URL,
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "GET"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
	if (error != nil) {
		print(error as Any)
	} else {
		let httpResponse = response as? HTTPURLResponse
		print(httpResponse)
	}
})

dataTask.resume()