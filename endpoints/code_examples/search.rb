require 'uri'
require 'net/http'

url = URI("https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
request["X-RapidAPI-Key"] = 'XXXXXXXXXXXXX'
request["X-RapidAPI-Host"] = 'produkter.p.rapidapi.com'

response = http.request(request)
puts response.read_body