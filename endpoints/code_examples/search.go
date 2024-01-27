package main

import (
	"fmt"
	"net/http"
	"io"
)

func main() {

	url := "https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Key", "XXXXXXXXXXXXX")
	req.Header.Add("X-RapidAPI-Host", "produkter.p.rapidapi.com")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}