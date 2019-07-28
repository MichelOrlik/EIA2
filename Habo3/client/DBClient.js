var HabosHaihappen;
(function (HabosHaihappen) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2-michel.herokuapp.com/";
    //Den Query zusammenstellen und mit sendRequest(query) an den Server weitergeben
    function insert() {
        let query = "command=insert";
        query += "&name=" + HabosHaihappen.spielerName;
        query += "&punkte=" + HabosHaihappen.highscore;
        sendRequest(query, handleInsertResponse);
    }
    HabosHaihappen.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    HabosHaihappen.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //alert(xhr.response);
        }
    }
    //parsen des JSON in ein Array und dann dieses Array sortieren und in HTML darstellen
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("Bis hier hin klappts");
            /* Hier muss der Fehler liegen */ let spielerArray = JSON.parse(xhr.response);
            console.log(xhr.response);
            for (let i = 0; i < spielerArray.length; i++) {
                console.log("Hier geht er nicht rein");
                spielerArray.sort(vergleichHighscore);
            }
            console.log("Hier kommt es nicht hin");
            for (let i = 0; i < 10; i++) {
                let prodElement = document.createElement("div");
                prodElement.innerHTML = `<div> Spieler ${spielerArray[i].name} : ${spielerArray[i].punktzahl} Punkte</div>`;
                document.getElementById("spielstaende").appendChild(prodElement);
            }
        }
    }
    //Highscore Vergleich und danach wird das Array sortiert
    function vergleichHighscore(a, b) {
        let scoreA = a.punktzahl;
        let scoreB = b.punktzahl;
        if (scoreA < scoreB) {
            return 1;
        }
        if (scoreA > scoreB) {
            return -1;
        }
        return 0;
    }
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=DBClient.js.map
