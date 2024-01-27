library(httr)

url <- "https://produkter.p.rapidapi.com/search"

queryString <- list(q = "peak DEF002 diesel exhaust fluid")

response <- VERB("GET", url, query = queryString, add_headers('X-RapidAPI-Key' = 'XXXXXXXXXXXXX', 'X-RapidAPI-Host' = 'produkter.p.rapidapi.com'), content_type("application/octet-stream"))

content(response, "text")