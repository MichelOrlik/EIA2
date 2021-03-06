window.addEventListener("load", init);
let serverAddress: string = "https://hfu-eia2-michel.herokuapp.com/";

function init(_event: Event): void {
    console.log("Init");
    let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
    let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
    let findButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("findStudentButton");
    insertButton.addEventListener("click", insert);
    refreshButton.addEventListener("click", refresh);
    findButton.addEventListener("click", find);
}

function insert(_event: Event): void {
    let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    let query: string = "command=insert";
    query += "&name=" + inputs[0].value;
    query += "&firstname=" + inputs[1].value;
    query += "&matrikel=" + inputs[2].value;
    console.log(query);
    sendRequest(query, handleInsertResponse);
}

function refresh(_event: Event): void {
    let query: string = "command=refresh";
    sendRequest(query, handleFindResponse);
}
// NEUE FUNKTION
function find(_event: Event): void {
    let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    let query: string = "command=find";
    query += "&matrikel=" + inputs[3].value;
    console.log(query);
    sendRequest(query, handleFindResponse);
}

function sendRequest(_query: string, _callback: EventListener): void {
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET", serverAddress + "?" + _query, true);
    xhr.addEventListener("readystatechange", _callback);
    xhr.send();
}
/*
function findStudentByMatrikel(_query: string, _callback: EventListener): void {
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET", serverAddress + "?" + _query, true);
    xhr.addEventListener("readystatechange", _callback);
    xhr.send();
}
*/
function handleInsertResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(xhr.response);
    }
}

function handleFindResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = xhr.response;
        let responseAsJson: JSON = JSON.parse(xhr.response);
        console.log(responseAsJson);
    }
}