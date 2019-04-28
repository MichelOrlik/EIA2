/*
Aufgabe: 5 - Eisdealer reloaded
Name: Michel Orlik
Matrikel: 261370
Datum: 28.04.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    /* Warenkorb wird erstellt */
    let warenkorb = [];
    /* Init wird ausgeführt, sobald der DOM-Content geladen wird */
    document.addEventListener("DOMContentLoaded", init);
    /* Init-Funktion */
    function init(_event) {
        erstelleFieldset();
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", aenderungen);
        }
    }
    /* Warenkorb wird immer aktualisiert und schreibt was in "bestellung.innerHTML" steht*/
    function schreibeWarenkorb() {
        let bestellung = document.getElementById("bestellung");
        let preis = 0;
        bestellung.innerHTML = "";
        for (let i = 0; i < warenkorb.length; i++) {
            bestellung.innerHTML += "Hinzugefügt wurde " + warenkorb[i].name + " für " + warenkorb[i].price.toFixed(2) + "€" + "<br>";
            preis += warenkorb[i].price;
        }
        bestellung.innerHTML += "<br>" + "Der berechnete Gesamtpreis beträgt " + preis.toFixed(2) + "€";
    }
    /* Änderungen (Hinzufügen/Entfernen aus dem Warenkorb) */
    function aenderungen(_event) {
        let ziel = _event.target;
        /* Wenn der Name gleich Checkbox ist */
        if (ziel.name == "Checkbox") {
            if (warenkorb.length == 0) {
                warenkorb.push({ name: ziel.getAttribute("itemName"), price: Number(ziel.getAttribute("price")) });
            }
            else {
                for (let i = 0; i < warenkorb.length; i++) {
                    if (warenkorb[i].name == ziel.getAttribute("itemName")) {
                        warenkorb.splice(i, 1);
                        schreibeWarenkorb();
                        return;
                    }
                }
                warenkorb.push({ name: ziel.getAttribute("itemName"), price: Number(ziel.getAttribute("price")) });
            }
        }
        /* Wenn der Name gleich Stepper ist */
        if (ziel.name == "Stepper") {
            if ((Number(ziel.value) * Number(ziel.getAttribute("price")) > 0)) {
                for (let i = 0; i < warenkorb.length; i++) {
                    if (warenkorb[i].name == ziel.getAttribute("itemName")) {
                        warenkorb[i].price = Number(ziel.value) * Number(ziel.getAttribute("price"));
                        schreibeWarenkorb();
                        return;
                    }
                }
                warenkorb.push({ name: ziel.getAttribute("itemName"), price: Number(ziel.getAttribute("price")) });
            }
            else {
                for (let i = 0; i < warenkorb.length; i++) {
                    if (warenkorb[i].name == ziel.getAttribute("itemName")) {
                        warenkorb.splice(i, 1);
                        break;
                    }
                }
            }
        }
        schreibeWarenkorb();
    }
    /* Nun werden die Fieldsets erstellt */
    function erstelleFieldset() {
        /* Zuerst werden die Daten aus der Data-Datei "geholt" */
        for (let key in Aufgabe5.eisElemente) {
            let wert = Aufgabe5.eisElemente[key];
            let fieldset = document.createElement("fieldset");
            /* Ab hier werden die Fieldsets geschrieben */
            /* Fieldset für die Eissorten */
            document.getElementById("container").appendChild(fieldset);
            if (key == "stepper") {
                fieldset.innerHTML += "<h2>Diesmal gewöhnliche Eissorten</h2>";
                for (let i = 0; i < wert.length; i++) {
                    let span = document.createElement("span");
                    span.innerHTML = `<input type="number" name="Stepper" step="1" min="0" max="20" value="0" price="` + wert[i].price + `" itemName="` + wert[i].name + `" />${wert[i].name}`;
                    fieldset.appendChild(span);
                }
            }
            /* Fieldset für die Soßen */
            document.getElementById("container").appendChild(fieldset);
            if (key == "checkbox") {
                fieldset.innerHTML += "<h2>Verrückte Soßen!</h2>";
                for (let i = 0; i < wert.length; i++) {
                    let span = document.createElement("span");
                    span.innerHTML = `<input type="checkbox" name="Checkbox" value="0" price="` + wert[i].price + `"itemName="` + wert[i].name + `" />${wert[i].name}`;
                    fieldset.appendChild(span);
                }
            }
            document.getElementById("container").appendChild(fieldset);
            if (key == "checkbox2") {
                fieldset.innerHTML += "<h2>Streusel!</h2>";
                for (let i = 0; i < wert.length; i++) {
                    let span = document.createElement("span");
                    span.innerHTML = `<input type="checkbox" name="Checkbox" value="0" price="` + wert[i].price + `"itemName="` + wert[i].name + `" />${wert[i].name}`;
                    fieldset.appendChild(span);
                }
            }
            document.getElementById("container").appendChild(fieldset);
            if (key == "select") {
                fieldset.innerHTML += "<h2>Wehe Wehe!</h2>";
                for (let i = 0; i < wert.length; i++) {
                    let span = document.createElement("span");
                    span.innerHTML = `<input type="radio" name="select" value="0" price="` + wert[i].price + `"itemName="` + wert[i].name + `" />${wert[i].name}`;
                    fieldset.appendChild(span);
                }
            }
            /* Ich kam auf keine Idee und Lösung, wie ich die Überprüfung einbauen soll */
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=main.js.map