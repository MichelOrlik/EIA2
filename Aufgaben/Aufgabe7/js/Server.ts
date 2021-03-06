/* Aufgabe 7 - Serverseitige Verarbeitung
Name: Michel Orlik  
Matrikel: 261370
Datum: 09.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */

import * as Http from "http";
import * as Url from "url";

namespace Aufgabe7 {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write("<p>" + key + ":" + url.query[key] + "</p>");
        _response.end();
    }
}

console.log(Aufgabe7);