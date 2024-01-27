# curl approach

curl --request GET \
	--url 'https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid' \
	--header 'X-RapidAPI-Host: produkter.p.rapidapi.com' \
	--header 'X-RapidAPI-Key: XXXXXXXXXXXXX'


# httpie approach

# http GET 'https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid' \
# 	X-RapidAPI-Host:produkter.p.rapidapi.com \
# 	X-RapidAPI-Key:XXXXXXXXXXXXX


# wget approach

# wget --quiet \
# 	--method GET \
# 	--header 'X-RapidAPI-Key: XXXXXXXXXXXXX' \
# 	--header 'X-RapidAPI-Host: produkter.p.rapidapi.com' \
# 	--output-document \
# 	- 'https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid'