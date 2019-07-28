var HabosHaihappen;
(function (HabosHaihappen) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://hfu-eia2-michel.herokuapp.com/";
    //Den Query zusammenstellen und mit sendRequest(query) an den Server weitergeben
    function insert() {
        let query = "command=insert";
        query += "&name=" + HabosHaihappen.spielerName + "&punkte=" + HabosHaihappen.highscore;
        sendRequest(query, handleInsertResponse);
        console.log(query);
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
            alert(xhr.response);
        }
    }
    //parsen des JSON in ein Array und dann dieses Array sortieren und in HTML darstellen
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let AlleSpieler = JSON.parse(xhr.response);
            for (let i = 0; i < AlleSpieler.length; i++) {
                AlleSpieler.sort(vergleichHighscore);
            }
            console.log(AlleSpieler);
            for (let i = 0; i < 6; i++) {
                let prodElement = document.createElement("div");
                prodElement.innerHTML = `<div> Spieler ${AlleSpieler[i].name} : ${AlleSpieler[i].punktzahl} Punkte</div>`;
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