/* Aufgabe 6 - Erster Node-Server
Name: Michel Orlik
Matrikel: 261370
Datum: 01.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", init);
    let address = "http://localhost:8080";
    let namen = "Vor- und Nachname";
    let strasseHN = "Straße und Hausnummer";
    let ort = "Postleitzahl und Ort";
    function init(_event) {
        console.log(Aufgabe6.data);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        /*         let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
                button.addEventListener('click', checkWhetherComplete); */
        let schreibEis = ``;
        for (let i = 0; i < Aufgabe6.data["eis"].length; i++) {
            schreibEis += `<input type="number" name="Eissorte${i}" step="1" min="0" max="5" value="0"/> Kugeln ${Aufgabe6.data["eis"][i].name}<br>`;
        }
        document.getElementById("eisauswahl").innerHTML = schreibEis;
        let schreibZutaten = ``;
        for (let i = 0; i < Aufgabe6.data["zutat"].length; i++) {
            schreibZutaten += `<input type="checkbox" name="Zutat${i}" id="check${i + 1}"> <label for="check${i + 1}"> ${Aufgabe6.data["zutat"][i].name}</label>`;
        }
        document.getElementById("zutatenauswahl").innerHTML = schreibZutaten;
    }
    function handleChange(_event) {
        console.log(_event);
        let zuSchreiben;
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        if (target.name.substr(0, 8) == "Eissorte") {
            let nummer = parseInt(target.name.substr(8, 2));
            Aufgabe6.data["eis"][nummer].anzahl = parseInt(target.value);
        }
        if (target.name.substr(0, 5) == "Zutat") {
            let nummer = parseInt(target.name.substr(5, 2));
            let ausgewaehlt = 0;
            if (target.checked == true) {
                ausgewaehlt = 1;
            }
            Aufgabe6.data["zutat"][nummer].anzahl = ausgewaehlt;
        }
        if (target.name == "waffelOderBecher") {
            if (target.value == "Waffel") {
                Aufgabe6.data["waffelBecher"][0].anzahl = 1;
                Aufgabe6.data["waffelBecher"][1].anzahl = 0;
            }
            else {
                Aufgabe6.data["waffelBecher"][0].anzahl = 0;
                Aufgabe6.data["waffelBecher"][1].anzahl = 1;
            }
        }
        if (target.name == "RadiogroupLog") {
            for (let i = 0; i < Aufgabe6.data["logistik"].length; i++) {
                if (Aufgabe6.data["logistik"][i].name == target.value) {
                    Aufgabe6.data["logistik"][i].anzahl = 1;
                }
                else {
                    Aufgabe6.data["logistik"][i].anzahl = 0;
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
        let summe = 0;
        for (let i = 0; i < Aufgabe6.data["eis"].length; i++) {
            summe += Aufgabe6.data["eis"][i].preis * Aufgabe6.data["eis"][i].anzahl;
        }
        for (let i = 0; i < Aufgabe6.data["zutat"].length; i++) {
            summe += Aufgabe6.data["zutat"][i].preis * Aufgabe6.data["zutat"][i].anzahl;
        }
        for (let i = 0; i < Aufgabe6.data["logistik"].length; i++) {
            summe += Aufgabe6.data["logistik"][i].preis * Aufgabe6.data["logistik"][i].anzahl;
        }
        zuSchreiben = `<h4>Ihre Bestellung:</h4><hr>Gewähltes Eis:<br>`;
        for (let i = 0; i < Aufgabe6.data["eis"].length; i++) {
            if (Aufgabe6.data["eis"][i].anzahl == 1) {
                zuSchreiben += `<br>${Aufgabe6.data["eis"][i].anzahl.toString()} Kugel ${Aufgabe6.data["eis"][i].name}<br>`;
            }
            else if (Aufgabe6.data["eis"][i].anzahl > 1) {
                zuSchreiben += `<br>${Aufgabe6.data["eis"][i].anzahl.toString()} Kugeln ${Aufgabe6.data["eis"][i].name}<br>`;
            }
        }
        zuSchreiben += `<hr>Zusätze:<br>`;
        for (let i = 0; i < Aufgabe6.data["zutat"].length; i++) {
            if (Aufgabe6.data["zutat"][i].anzahl == 1) {
                zuSchreiben += `<br>${Aufgabe6.data["zutat"][i].name}<br>`;
            }
        }
        zuSchreiben += `<hr>Darreichungsform: `;
        if (Aufgabe6.data["waffelBecher"][0].anzahl == 1) {
            zuSchreiben += `Waffel<br> `;
        }
        else if (Aufgabe6.data["waffelBecher"][1].anzahl == 1) {
            zuSchreiben += `Becher<br> `;
        }
        zuSchreiben += `<hr>Lieferung: `;
        for (let i = 0; i < Aufgabe6.data["logistik"].length; i++) {
            if (Aufgabe6.data["logistik"][i].anzahl == 1) {
                zuSchreiben += `${Aufgabe6.data["logistik"][i].name}<br>`;
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
    function submitData() {
        console.log(Aufgabe6.data);
        let urlSchreiben = "";
        let xhr = new XMLHttpRequest();
        for (let i = 0; i < Aufgabe6.data["eis"].length; i++) {
            urlSchreiben = `${address} + "?" + ${Aufgabe6.data["eis"][i].name} + "=" + ${Aufgabe6.data["eis"][i].anzahl}`;
        }
        for (let i = 0; i < Aufgabe6.data["zutat"].length; i++) {
            urlSchreiben = `${address} + "?" + ${Aufgabe6.data["zutat"][i].name} + "=" + ${Aufgabe6.data["zutat"][i].anzahl}`;
        }
        for (let i = 0; i < Aufgabe6.data["waffelBecher"].length; i++) {
            urlSchreiben = `${address} + "?" + ${Aufgabe6.data["waffelBecher"][i].name} + "=" + ${Aufgabe6.data["waffelBecher"][i].anzahl}`;
        }
        for (let i = 0; i < Aufgabe6.data["logistik"].length; i++) {
            urlSchreiben = `${address} + "?" + ${Aufgabe6.data["logistik"][i].name} + "=" + ${Aufgabe6.data["logistik"][i].anzahl}`;
        }
        xhr.open("GET", urlSchreiben, true);
        xhr.send();
    }
    submitData();
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=main.js.map