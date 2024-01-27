# requests approach

import requests

url = "https://produkter.p.rapidapi.com/search"

querystring = {"q":"peak DEF002 diesel exhaust fluid"}

headers = {
	"X-RapidAPI-Key": "XXXXXXXXXXXXX",
	"X-RapidAPI-Host": "produkter.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())


# http.client approach

# import http.client

# conn = http.client.HTTPSConnection("produkter.p.rapidapi.com")

# headers = {
#     'X-RapidAPI-Key': "XXXXXXXXXXXXX",
#     'X-RapidAPI-Host': "produkter.p.rapidapi.com"
# }

# conn.request("GET", "/search?q=peak%20DEF002%20diesel%20exhaust%20fluid", headers=headers)

# res = conn.getresponse()
# data = res.read()

# print(data.decode("utf-8"))