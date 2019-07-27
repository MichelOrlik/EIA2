namespace HabosHaihappen {

    let serverAddress: string = "https://hfu-eia2-michel.herokuapp.com/";



    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + name;
        query += "&punktzahl=" + punkte;
        console.log(query);
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
            alert(xhr.response);
        }
    }
    export let alleSpielerArray: Spieler[];
    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alleSpielerArray = JSON.parse(xhr.response);
            for (let i: number = 0; i < alleSpielerArray.length; i++) {
                alleSpielerArray.sort(sortiereHighscore);
            } 
            console.log(alleSpielerArray);
        }

    }
    function sortiereHighscore(a: Spieler, b: Spieler): number {
        let punktzahlA: number = a.punkte;
        let punktzahlB: number = b.punkte;
        if (punktzahlA < punktzahlB) {
            return 1;
        }
        if (punktzahlA > punktzahlB) {
            return -1;
        }
        return 0;
    }
}
