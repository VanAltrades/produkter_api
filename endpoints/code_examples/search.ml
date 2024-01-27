open Cohttp_lwt_unix
open Cohttp
open Lwt

let uri = Uri.of_string "https://produkter.p.rapidapi.com/search?q=peak%20DEF002%20diesel%20exhaust%20fluid" in
let headers = Header.add_list (Header.init ()) [
	("X-RapidAPI-Key", "XXXXXXXXXXXXX");
	("X-RapidAPI-Host", "produkter.p.rapidapi.com");
] in

Client.call ~headers `GET uri
>>= fun (res, body_stream) ->
	(* Do stuff with the result *)