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
        _response.write("<h1>Hallo Erden-Eis-Konsument!</h1> <p><Deine Lieferung wird bearbeitet. Das Shuttle wird, sobald die Lieferung fertig ist, an dem bestellten Ort landen.</p>");
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write("<p>" + key + ":" + url.query[key] + "</p>");
        _response.write("<p> Galaktische Grüße <br> Eisdealer Michel </p>");
        _response.end();
    }
}

console.log(Aufgabe7);