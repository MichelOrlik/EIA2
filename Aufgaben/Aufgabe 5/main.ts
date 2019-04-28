namespace Aufgabe5 {

    interface Eis {
        name: string;
        price: number;
    }

    /* Warenkorb wird erstellt */
    let warenkorb: Eis[] = [];

    /* Init wird ausgeführt, sobald der DOM-Content geladen wird */
    document.addEventListener("DOMContentLoaded", init);
    /* Init-Funktion */
    function init(_event: Event): void {
        erstelleFieldset();
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", aenderungen);
        }
    }
    /* Warenkorb wird immer aktualisiert und schreibt was in "bestellung.innerHTML" steht*/
    function schreibeWarenkorb(): void {

        let bestellung: HTMLDivElement = <HTMLDivElement>document.getElementById("bestellung");
        let preis: number = 0;
        bestellung.innerHTML = "";
        for (let i: number = 0; i < warenkorb.length; i++) {
            bestellung.innerHTML += "Hinzugefügt wurde " + warenkorb[i].name + " für " + warenkorb[i].price.toFixed(2) + "€" + "<br>";
            preis += warenkorb[i].price;
        }
        bestellung.innerHTML += "<br>" + "Der berechnete Gesamtpreis beträgt " + preis.toFixed(2) + "€";
    }
    /* Änderungen (Hinzufügen/Entfernen aus dem Warenkorb) */
    function aenderungen(_event: Event): void {
        let ziel: HTMLInputElement = <HTMLInputElement>_event.target;
        /* Wenn der Name gleich Checkbox ist */
        if (ziel.name == "Checkbox") {
            if (warenkorb.length == 0) {
                warenkorb.push({ name: ziel.getAttribute("itemName"), price: Number(ziel.getAttribute("price")) });
            }
            else {
                for (let i: number = 0; i < warenkorb.length; i++) {
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
                for (let i: number = 0; i < warenkorb.length; i++) {
                    if (warenkorb[i].name == ziel.getAttribute("itemName")) {
                        warenkorb[i].price = Number(ziel.value) * Number(ziel.getAttribute("price"));
                        schreibeWarenkorb();
                        return;
                    }
                }
                warenkorb.push({ name: ziel.getAttribute("itemName"), price: Number(ziel.getAttribute("price")) });
            }
            else {
                for (let i: number = 0; i < warenkorb.length; i++) {
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
    function erstelleFieldset(): void {
        /* Zuerst werden die Daten aus der Data-Datei "geholt" */
        for (let key in eisElemente) {
            let wert: Eis[] = eisElemente[key];
            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            /* Ab hier werden die Fieldsets geschrieben */

            /* Fieldset für die Eissorten */
            document.getElementById("container").appendChild(fieldset);
            if (key == "stepper") {
                fieldset.innerHTML += "<h2>Diesmal gewöhnliche Eissorten</h2>";
                for (let i: number = 0; i < wert.length; i++) {
                    let span: HTMLSpanElement = document.createElement("span");
                    span.innerHTML = `<input type="number" name="Stepper" step="1" min="0" max="20" value="0" price="` + wert[i].price + `" itemName="` + wert[i].name + `" />${wert[i].name}`;
                    fieldset.appendChild(span);
                }
            }
            /* Fieldset für die Soßen */
            document.getElementById("container").appendChild(fieldset);
            if (key == "checkbox") {
                fieldset.innerHTML += "<h2>Verrückte Soßen!</h2>";
                for (let i: number = 0; i < wert.length; i++) {
                    let span: HTMLSpanElement = document.createElement("span");
                    span.innerHTML = `<input type="checkbox" name="Checkbox" value="0" price="` + wert[i].price + `"itemName="` + wert[i].name + `" />${wert[i].name}`;
                    fieldset.appendChild(span);
                }
            }
            document.getElementById("container").appendChild(fieldset);
            if (key == "checkbox2") {
                fieldset.innerHTML += "<h2>Streusel!</h2>";
                for (let i: number = 0; i < wert.length; i++) {
                    let span: HTMLSpanElement = document.createElement("span");
                    span.innerHTML = `<input type="checkbox" name="Checkbox" value="0" price="` + wert[i].price + `"itemName="` + wert[i].name + `" />${wert[i].name}`;
                    fieldset.appendChild(span);
                }
            }
            document.getElementById("container").appendChild(fieldset);
            if (key == "select") {
                fieldset.innerHTML += "<h2>Wehe Wehe!</h2>";
                for (let i: number = 0; i < wert.length; i++) {
                    let span: HTMLSpanElement = document.createElement("span");
                    span.innerHTML = `<input type="radio" name="select" value="0" price="` + wert[i].price + `"itemName="` + wert[i].name + `" />${wert[i].name}`;
                    fieldset.appendChild(span);
                }
            }
/* Ich kam auf keine Idee und Lösung, wie ich die Überprüfung einbauen soll */
        }
    }
}

