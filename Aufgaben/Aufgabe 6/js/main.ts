/* Aufgabe 6 - Erster Node-Server
Name: Michel Orlik
Matrikel: 261370
Datum: 01.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */

namespace Aufgabe6 {
    window.addEventListener("load", init);
    let address: string = "http://localhost:8080";
    let namen: string = "Vor- und Nachname";
    let strasseHN: string = "Straße und Hausnummer";
    let ort: string = "Postleitzahl und Ort";

    function init(_event: Event): void {
        console.log(data);

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }

        /*         let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
                button.addEventListener('click', checkWhetherComplete); */

        let schreibEis: string = ``;

        for (let i: number = 0; i < data["eis"].length; i++) {
            schreibEis += `<input type="number" name="Eissorte${i}" step="1" min="0" max="5" value="0"/> Kugeln ${data["eis"][i].name}<br>`;
        }

        document.getElementById("eisauswahl").innerHTML = schreibEis;


        let schreibZutaten: string = ``;

        for (let i: number = 0; i < data["zutat"].length; i++) {
            schreibZutaten += `<input type="checkbox" name="Zutat${i}" id="check${i + 1}"> <label for="check${i + 1}"> ${data["zutat"][i].name}</label>`;
        }

        document.getElementById("zutatenauswahl").innerHTML = schreibZutaten;
    }

    function handleChange(_event: Event): void {
        console.log(_event);
        let zuSchreiben: string;
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);

        if (target.name.substr(0, 8) == "Eissorte") {
            let nummer: number = parseInt(target.name.substr(8, 2));
            data["eis"][nummer].anzahl = parseInt(target.value);
        }

        if (target.name.substr(0, 5) == "Zutat") {
            let nummer: number = parseInt(target.name.substr(5, 2));
            let ausgewaehlt: number = 0;

            if (target.checked == true) {
                ausgewaehlt = 1;
            }

            data["zutat"][nummer].anzahl = ausgewaehlt;
        }

        if (target.name == "waffelOderBecher") {
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
        for (let i: number = 0; i < data["eis"].length; i++) {
            summe += data["eis"][i].preis * data["eis"][i].anzahl;
        }

        for (let i: number = 0; i < data["zutat"].length; i++) {
            summe += data["zutat"][i].preis * data["zutat"][i].anzahl;
        }

        for (let i: number = 0; i < data["logistik"].length; i++) {
            summe += data["logistik"][i].preis * data["logistik"][i].anzahl;
        }

        zuSchreiben = `<h4>Ihre Bestellung:</h4><hr>Gewähltes Eis:<br>`;

        for (let i: number = 0; i < data["eis"].length; i++) {
            if (data["eis"][i].anzahl == 1) {
                zuSchreiben += `<br>${data["eis"][i].anzahl.toString()} Kugel ${data["eis"][i].name}<br>`;
            }

            else if (data["eis"][i].anzahl > 1) {
                zuSchreiben += `<br>${data["eis"][i].anzahl.toString()} Kugeln ${data["eis"][i].name}<br>`;
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
            zuSchreiben += `Waffel<br> `;
        }

        else if (data["waffelBecher"][1].anzahl == 1) {
            zuSchreiben += `Becher<br> `;
        }

        zuSchreiben += `<hr>Lieferung: `;

        for (let i: number = 0; i < data["logistik"].length; i++) {
            if (data["logistik"][i].anzahl == 1) {
                zuSchreiben += `${data["logistik"][i].name}<br>`;
            }
        }

        zuSchreiben += `<hr>Lieferadresse:<p>${namen}</p><p>${strasseHN}</p><p>${ort}</p>`;

        zuSchreiben += `<hr>Summe: ${summe.toFixed(2)} Euro`;

        zuSchreiben += `<hr><button>Angaben vollständig? - Klicken zum Überprüfen</button>`;
        document.getElementById("zusammenfassung").innerHTML = zuSchreiben;

        /*         let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
                button.addEventListener('click', checkWhetherComplete); */
    }

    /*     function checkWhetherComplete(): void{
            let anzahlKugeln: number = 0;
    
            for (let i: number = 0; i < data["eis"].length; i++){
                if (data["eis"][i].anzahl > 0){
                    anzahlKugeln += data["eis"][i].anzahl;
                }
    
            }
            
            if (anzahlKugeln == 0){
                alert("Wähle bitte ein Eis aus.");
            }
    
            else if (data["waffelBecher"][0].anzahl == 0 && data["waffelBecher"][1].anzahl == 0){
                alert("Waffel oder Becher? Bitte wählen.");
            }
    
            else if (data["logistik"][0].anzahl == 0 && data["logistik"][1].anzahl == 0 && data["logistik"][2].anzahl == 0){
                alert("Bitte Lieferform auswählen.");
            }
    
            else if (namen == "Vor- und Nachname" || strasseHN == "Straße und Hausnummer" || ort == "Postleitzahl und Ort" || ort == "Bitte wählen"){
                alert("Die Lieferadresse ist nicht vollständig. Bitte prüfen.");
            }
            
            else{
                alert("Alle Eingaben sind vollständig.");
            }
    
        } */

    function submitData(): void {
        console.log(data);

        let urlSchreiben: string = "";
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        for (let i: number = 0; i < data["eis"].length; i++) {
            urlSchreiben = `${address} + "?" + ${data["eis"][i].name} + "=" + ${data["eis"][i].anzahl}`;
        }

        for (let i: number = 0; i < data["zutat"].length; i++) {
            urlSchreiben = `${address} + "?" + ${data["zutat"][i].name} + "=" + ${data["zutat"][i].anzahl}`;
        }

        for (let i: number = 0; i < data["waffelBecher"].length; i++) {
            urlSchreiben = `${address} + "?" + ${data["waffelBecher"][i].name} + "=" + ${data["waffelBecher"][i].anzahl}`;
        }

        for (let i: number = 0; i < data["logistik"].length; i++) {
            urlSchreiben = `${address} + "?" + ${data["logistik"][i].name} + "=" + ${data["logistik"][i].anzahl}`;
        }

        xhr.open("GET", urlSchreiben, true);
        xhr.send();
    }

    submitData();

}