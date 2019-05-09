/* Aufgabe 6 - Erster Node-Server
Name: Michel Orlik  
Matrikel: 261370
Datum: 02.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */

namespace Aufgabe7 {
    window.addEventListener("load", init);
    let namen: string;
    let strasseHN: string;
    let ort: string;

    /* INIT FUNKTION */
    function init(_event: Event): void {
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLElement = fieldsets[i];
            fieldset.addEventListener("change", aenderungen);
        }


        let schreibEis: string = ``;

        for (let i: number = 0; i < data["Eissorten"].length; i++) {
            schreibEis += `<input type="number" name="Eissorte${i}" step="1" min="5" max="30" value="0"/> Kugeln ${data["Eissorten"][i].name}<br>`;
        }

        document.getElementById("eisauswahl").innerHTML = schreibEis;
        document.getElementById("submitButton").addEventListener("click", submitData);
        document.getElementById("checkButton").addEventListener("click", checkWhetherComplete);


        let schreibZutaten: string = ``;

        for (let i: number = 0; i < data["zutat"].length; i++) {
            schreibZutaten += `<input type="checkbox" name="Zutat${i}" id="check${i + 1}"> <label for="check${i + 1}"> ${data["zutat"][i].name}</label>`;
        }

        document.getElementById("zutatenauswahl").innerHTML = schreibZutaten;
    }

    /* ÄNDERUNGEN-FUNKTION */
    function aenderungen(_event: Event): void {
        console.log(_event);
        let zuSchreiben: string;
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);

        if (target.name.substr(0, 8) == "Eissorte") {
            let nummer: number = parseInt(target.name.substr(8, 2));
            data["Eissorten"][nummer].anzahl = parseInt(target.value);
        }

        if (target.name.substr(0, 5) == "Zutat") {
            let nummer: number = parseInt(target.name.substr(5, 2));
            let ausgewaehlt: number = 0;

            if (target.checked == true) {
                ausgewaehlt = 1;
            }

            data["zutat"][nummer].anzahl = ausgewaehlt;
        }

        if (target.name == "waffelBecher") {
            if (target.value == "Waffel") {
                data["waffelBecher"][0].anzahl = 1;
                data["waffelBecher"][1].anzahl = 0;
            }

            else {
                data["waffelBecher"][0].anzahl = 0;
                data["waffelBecher"][1].anzahl = 1;
            }
        }

        if (target.name == "RadiogroupLog") {
            for (let i: number = 0; i < data["logistik"].length; i++) {
                if (data["logistik"][i].name == target.value) {
                    data["logistik"][i].anzahl = 1;
                }

                else {
                    data["logistik"][i].anzahl = 0;
                }
            }
        }

        if (target.name == "Namen") {
            namen = target.value;
        }

        if (target.name == "StrasseHN") {
            strasseHN = target.value;
        }

        if (target.name == "PLZOrt") {
            ort = target.value;
        }

        let summe: number = 0;
        for (let i: number = 0; i < data["Eissorten"].length; i++) {
            summe += data["Eissorten"][i].preis * data["Eissorten"][i].anzahl;
        }

        for (let i: number = 0; i < data["zutat"].length; i++) {
            summe += data["zutat"][i].preis * data["zutat"][i].anzahl;
        }

        for (let i: number = 0; i < data["logistik"].length; i++) {
            summe += data["logistik"][i].preis * data["logistik"][i].anzahl;
        }

        zuSchreiben = `<h4>Ihre Bestellung:</h4><hr>Gewähltes Eis:<br>`;

        for (let i: number = 0; i < data["Eissorten"].length; i++) {
            if (data["Eissorten"][i].anzahl == 1) {
                zuSchreiben += `<br>${data["Eissorten"][i].anzahl.toString()} Kugel ${data["Eissorten"][i].name}<br>`;
            }

            else if (data["Eissorten"][i].anzahl > 1) {
                zuSchreiben += `<br>${data["Eissorten"][i].anzahl.toString()} Kugeln ${data["Eissorten"][i].name}<br>`;
            }

        }

        zuSchreiben += `<hr>Zusätze:<br>`;

        for (let i: number = 0; i < data["zutat"].length; i++) {
            if (data["zutat"][i].anzahl == 1) {
                zuSchreiben += `<br>${data["zutat"][i].name}<br>`;
            }
        }

        zuSchreiben += `<hr>Darreichungsform: `;

        if (data["waffelBecher"][0].anzahl == 1) {
            zuSchreiben += `Waffel<br>`;
        }

        else if (data["waffelBecher"][1].anzahl == 1) {
            zuSchreiben += `Becher<br>`;
        }

        zuSchreiben += `<hr>Lieferung: `;

        for (let i: number = 0; i < data["logistik"].length; i++) {
            if (data["logistik"][i].anzahl == 1) {
                zuSchreiben += `${data["logistik"][i].name}<br>`;
            }
        }

        zuSchreiben += `<hr>Lieferadresse:<p>${namen}</p><p>${strasseHN}</p><p>${ort}</p>`;

        zuSchreiben += `<hr>Summe: ${summe.toFixed(2)} Euro`;

        zuSchreiben += `<hr><button id="checkButton">Beam me up!</button>`;
        document.getElementById("zusammenfassung").innerHTML = zuSchreiben;

        /* let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
         button.addEventListener("click", checkWhetherComplete); */
        document.getElementById("submitButton").addEventListener("click", submitData);
        document.getElementById("checkButton").addEventListener("click", checkWhetherComplete);
    }
    /* ÜBERPRÜFUNG ob die Bestellung komlett ist */
    function checkWhetherComplete(): void {
        let anzahlKugeln: number = 0;

        for (let i: number = 0; i < data["Eissorten"].length; i++) {
            if (data["Eissorten"][i].anzahl > 0) {
                anzahlKugeln += data["Eissorten"][i].anzahl;
            }

        }

        if (anzahlKugeln == 0) {
            alert("Wir unterbrechen die Mission nur, wenn du Eis kaufst!");
        }

        else if (data["waffelBecher"][0].anzahl == 0 && data["waffelBecher"][1].anzahl == 0) {
            alert("Das Eis kommt im Becher, oder in der Waffel und nicht anders!");
        }

        else if (data["logistik"][0].anzahl == 0 && data["logistik"][1].anzahl == 0 && data["logistik"][2].anzahl == 0) {
            alert("Also das Eis muss zu dir. Wie?  Das entscheidest du");
        }

        else if (namen == undefined || strasseHN == undefined || ort == undefined) {
            alert("For Research reasons, please tell me about you!");
        }

        else {
            alert("Spaceshuttle würde ankommen!");
        }

    }

    /* SUBMIT-DATA-FUNKTION - Für Aufgabe 6 geschrieben */
    function submitData(): void {
        console.log("Submit gefunden");
        let urlSchreiben: string = "https://hfu-eia2-michel.herokuapp.com/?";
        for (let i: number = 0; i < data["Eissorten"].length; i++) {
            if (data["Eissorten"][i].anzahl != 0) {
                urlSchreiben += `${data["Eissorten"][i].name}=${data["Eissorten"][i].anzahl}&`;
            }
        }

        for (let i: number = 0; i < data["zutat"].length; i++) {
            if (data["zutat"][i].anzahl != 0) {
                urlSchreiben += `${data["zutat"][i].name}=${data["zutat"][i].anzahl}&`;
            }
        }

        for (let i: number = 0; i < data["waffelBecher"].length; i++) {
            if (data["waffelBecher"][i].anzahl != 0) {
                urlSchreiben += `${data["waffelBecher"][i].name}=${data["waffelBecher"][i].anzahl}&`;
            }
        }

        for (let i: number = 0; i < data["logistik"].length; i++) {
            if (data["logistik"][i].anzahl != 0) {
                urlSchreiben += `${data["logistik"][i].name}=${data["logistik"][i].anzahl}&`;
            }
        }
        if (namen != undefined && strasseHN != undefined && ort != undefined) {
            urlSchreiben += `&Kundenname=${namen}&Kundenadresse=${strasseHN}&PostleitzahlOrt=${ort}`;
        }


        console.log(urlSchreiben);

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", urlSchreiben, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();

        function handleStateChange(_event: ProgressEvent): void {
            let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
            if (xhr.readyState == XMLHttpRequest.DONE) {
                let htmlStringEnde: string = `<div id="Bestellübersicht>
                <p>1</p>
                <p>2</p>
                <p>${xhr.response}</p>
                </div>`;
                document.getElementById("FeldfuerEnde").innerHTML = htmlStringEnde;
                console.log("Wunderbar...");
                console.log("response: " + xhr.response);
            }
        }
    }


}