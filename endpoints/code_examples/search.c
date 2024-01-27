CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "GET");
curl_easy_setopt(hnd, CURLOPT_URL, "https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "X-RapidAPI-Key: XXXXXXXXXXXXX");
headers = curl_slist_append(headers, "X-RapidAPI-Host: produkter.p.rapidapi.com");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

CURLcode ret = curl_easy_perform(hnd);