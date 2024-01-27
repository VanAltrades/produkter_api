(require '[clj-http.client :as client])

(client/get "https://produkter.p.rapidapi.com/search" {:headers {:X-RapidAPI-Key "XXXXXXXXXXXXX"
                                                                 :X-RapidAPI-Host "produkter.p.rapidapi.com"}
                                                       :query-params {:q "peak DEF002 diesel exhaust fluid"}})