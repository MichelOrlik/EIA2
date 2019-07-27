namespace aufgabe13 {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://hfu-eia2-michel.herokuapp.com/";

    //Den Query zusammenstellen und mit sendRequest(query) an den Server weitergeben
    export function insert(): void {
        let query: string = "command=insert";
        query += "&spielername=" + spielerName + "&punktzahl=" + highscore;
        sendRequest(query, handleInsertResponse);
        console.log(query);
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
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let alleSpieler: Spieler[] = JSON.parse(xhr.response);

            for (let i: number = 0; i < alleSpieler.length; i++) {
                alleSpieler.sort(vergleicheHighscore);
            }
            console.log(alleSpieler);
            for (let i: number = 0; i < 6; i++) {
                let prodElement: HTMLDivElement = document.createElement("div");
                prodElement.innerHTML = `<div> Spieler ${alleSpieler[i].name} : ${alleSpieler[i].punktzahl} Punkte</div>`;
                document.getElementById("scoresBeste").appendChild(prodElement);
            }
        }
    }
    function vergleicheHighscore(a: Spieler, b: Spieler): number {
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