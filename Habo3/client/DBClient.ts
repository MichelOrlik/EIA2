namespace HabosHaihappen {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eia2-michel.herokuapp.com/";

    //Den Query zusammenstellen und mit sendRequest(query) an den Server weitergeben
    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + spielerName + "&punkte=" + highscore;
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";

        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //alert(xhr.response);
        }
    }

    //parsen des JSON in ein Array und dann dieses Array sortieren und in HTML darstellen
    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);

        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("Bis hier hin klappts");
           /* Hier muss der Fehler liegen */ let spielerArray: Spieler[] = JSON.parse(xhr.response);
            console.log(xhr.response);

            for (let i: number = 0; i < spielerArray.length; i++) {
                console.log("Hier geht er nicht rein");
                spielerArray.sort(vergleichHighscore);
            }
            console.log("Hier kommt es nicht hin");
            for (let i: number = 0; i < 10; i++) {
                let prodElement: HTMLDivElement = document.createElement("div");
                prodElement.innerHTML = `<div> Spieler ${spielerArray[i].name} : ${spielerArray[i].punktzahl} Punkte</div>`;
                document.getElementById("spielstaende").appendChild(prodElement);
            }
        }
    }

    //Highscore Vergleich und danach wird das Array sortiert
    function vergleichHighscore(a: Spieler, b: Spieler): number {
        let scoreA: number = a.punktzahl;
        let scoreB: number = b.punktzahl;
        if (scoreA < scoreB) {
            return 1;
        }
        if (scoreA > scoreB) {
            return -1;
        }
        return 0;
    }
}