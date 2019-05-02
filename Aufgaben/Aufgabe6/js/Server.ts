/*
Aufgabe 6 - Konzept
Bearbeitet von Pascal Michel (260530), Michel Orlik (261370)
Datum: 30.04.2019
*/

import * as Http from "http"; // alle Inhalte aus "http" als Typ Http importieren

namespace Aufgabe6 {// Namespace "Aufgabe6" erstellen
    console.log("Starting server"); // auf der Konsole die Nachricht "Starting server" ausgeben, um zu zeigen, dass ab hier der Server gestartet wird
    let port: number = Number(process.env.PORT); // Variable "port" vom Typ number erstellen und dieser Variable zuweisen, welchem Port der Server "zuhören" soll
    if (!port) // Wenn port nicht der Fall ist (! = "bang" = not), den Code in der nächsten Zeile ausführen
        port = 8100; // port auf 8100 setzen

    let server: Http.Server = Http.createServer(); // Variable "server" vom Typ Http.Server erstellen und dieser Variable wird die Funktion createServer() aus dem importierten Code zugewiesen
    server.addListener("request", handleRequest); // der Variable server einen Listener hinzufügen, der auf request "hört" und in diesem Falle die Funktion handleRequest ausführt
    server.addListener("listening", handleListen); // der Variable server einen weiteren Listener hinzufügen, der auf listening hört und in diesem Falle die Funktion handleListen ausführt
    server.listen(port); // Listener erstellen, der auf den spezifischen port "hört"

    function handleListen(): void {// die Funktion handleListen wird definiert, die keinen Übergabe- und Rückgabewert enthält
        console.log("Listening"); // auf der Konsole die Nachricht "Listening" ausgeben, um darzustellen, dass diese Funktion vom listening-Listener ausgeführt wurde
    }// Funktion handleListen schließen

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {// die Funktion handleRequest mit den Übergabewerten _request und _response ohne Rückgabewert definieren
        console.log("I hear voices!"); // auf der Konsole wird "I hear voices!" ausgegeben; somit wurde die Funktion vom request-Listener ausgeführt

        _response.setHeader("content-type", "text/html; charset=utf-8"); // Header-Werte für ein Header-Objekt festlegen. Falls dieser Header-Werte bereits im zu sendenden Header existieren, werden diese ersetzt
        _response.setHeader("Access-Control-Allow-Origin", "*"); // weitere Werte werden festgelegt

        _response.write(_request.url); // vom Server wurde eine URL empfangen, die ins _response geschrieben wird 

        _response.end(); // dem Server wird mitgeteilt, dass alle response-Headers und der body weitergegeben wurden und die Anfrage vollständig ist
    }// Funktion handleRequest schließen
}// Namespace schließen

console.log(Aufgabe6);