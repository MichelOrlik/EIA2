/*
Aufgabe: 4 - Eisdealer
Name: Michel Orlik
Matrikel: 261370
Datum: 20.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. Er entstand durch Hilfestellung und Erklärung von Pascal Michel.
*/
var Eidealer;
(function (Eidealer) {
    window.addEventListener("load", init);
    let summe = 0;
    let summeAlsString = "0";
    let anzahlDerKugeln1 = 0;
    let anzahlDerKugeln2 = 0;
    let anzahlDerKugeln3 = 0;
    let eisSorte1;
    let eisSorte2;
    let eisSorte3;
    let lieferKosten = 0;
    let anzahlDerZutaten = 0;
    let darreichung = undefined;
    let shipping = undefined;
    let vorUndNachnamen = undefined;
    let PLZ = undefined;
    let stadt = undefined;
    let handy = undefined;
    let besteck = undefined;
    let strasse = undefined;
    /* Die HTMLCollection repräsentiert eine generische Sammlung (Array-ähnliches Objekt)
    an Elementen (in Dokumentreihenfolge) und bietet Methoden und Eigenschaften zur Auswahl dieser aus einer Liste an. */
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", veraenderung);
        }
        let button = document.querySelector("button");
        button.addEventListener("click", ueberpruefen);
    }
    /* Falls der Kunde sich doch für was anderes entscheidet */
    function veraenderung(_event) {
        let target = _event.target;
        /* Wenn man Haken gesetzt hat und den Browser aktualisiert, bleiben die Haken (zumindest bei mir) - Entfernt man diese muss die Eisdeale blechen! */
        /* Der Kunde ist in der Lage sich bei den zusätzlichen Zutaten noch anders zu entscheiden. Dies sollte natürlich nicht im Preis vergessen werden */
        if (this.id == "zusatzZutaten") {
            /* Wenn ja, dann Preiserhöhung um 4,40€ */
            if (target.checked == true) {
                document.getElementById(target.name).innerHTML = target.name;
                anzahlDerZutaten += 4.40;
            }
            /* Wenn nein, dann Preiserniedrigung um 4,40€ */
            if (target.checked == false) {
                document.getElementById(target.name).innerHTML = "";
                anzahlDerZutaten -= 4.40;
            }
        }
        /* Abfrage der Anzahl jeder Sorte - Die parseInt() Methode liest ein String-Argument ein und gibt eine ganze Zahl im angegebenen Zahlensystem zurück.*/
        else if (target.name == "anzahlSorte1") {
            anzahlDerKugeln1 = parseInt(target.value);
        }
        else if (target.name == "anzahlSorte2") {
            anzahlDerKugeln2 = parseInt(target.value);
        }
        else if (target.name == "anzahlSorte3") {
            anzahlDerKugeln3 = parseInt(target.value);
        }
        /* Selbe Abfrage mit der jeweiligen Eissorte. Hier haben wir jedoch einen String der String bleibt und nicht in number umgeschrieben werden muss */
        else if (target.name == "Eissorte1") {
            eisSorte1 = target.value;
        }
        else if (target.name == "Eissorte2") {
            eisSorte2 = target.value;
        }
        else if (target.name == "Eissorte3") {
            eisSorte3 = target.value;
        }
        /* Jede Liefermethode hat ihren Preis, target.value unterscheidet sich und ist das shipping. Dieses shipping wird in der HTML geschrieben */
        else if (target.name == "shipping") {
            shipping = target.value;
            document.getElementById(target.name).innerHTML = shipping;
            if (target.value == "5-10 Werktage") {
                lieferKosten = 0;
            }
            else if (target.value == "Am selben Tag") {
                lieferKosten = 2;
            }
            else if (target.value == "In einer Stunde") {
                lieferKosten = 4;
            }
            else if (target.value == "Sofort!") {
                lieferKosten = 10;
            }
            document.getElementById(target.name).innerHTML = target.value;
        }
        /* Genau wie bei Lieferung wird die Darreichung, Besteck und die restlichen Daten zum Wert, die in der HTML geschrieben werden - Struktur bleibt die selbe */
        else if (target.name == "darreichung") {
            darreichung = target.value;
            document.getElementById(target.name).innerHTML = darreichung;
        }
        else if (target.name == "besteck") {
            besteck = target.value;
            document.getElementById(target.name).innerHTML = besteck;
        }
        else if (target.name == "vorUndNachnamen") {
            vorUndNachnamen = target.value;
            document.getElementById(target.name).innerHTML = vorUndNachnamen;
        }
        else if (target.name == "strasse") {
            strasse = target.value;
            document.getElementById(target.name).innerHTML = strasse;
        }
        else if (target.name == "postLeitZahl") {
            PLZ = target.value;
            document.getElementById(target.name).innerHTML = PLZ;
        }
        else if (target.name == "stadt") {
            stadt = target.value;
            document.getElementById(target.name).innerHTML = stadt;
        }
        else if (target.name == "handy") {
            handy = target.value;
            document.getElementById(target.name).innerHTML = handy;
        }
        else {
            document.getElementById(target.name).innerHTML = target.value;
        }
        /* Berechnung: Alle Kugeln mit dem Preis multipliziert, dazu werden Lieferkosten und anzahlDerZutaten addiert */
        summe = 5.6 * (anzahlDerKugeln1 + anzahlDerKugeln2 + anzahlDerKugeln3) + lieferKosten + anzahlDerZutaten;
        summeAlsString = summe.toFixed(2); /* Es werden zwei Nachkommastellen angezeigt (Auch wenn eine ausreichend wäre - Aber Business ist Business!) */
        document.getElementById("sumSumme").innerHTML = "" + summeAlsString;
        /* Bei 0 Kugeln haben wir nichts, bei einer die Anzahl + Kugel, und bei mehr als einer Anzahl + Kugeln, das bei allen drei Feldern */
        if (anzahlDerKugeln1 == 0) {
            document.getElementById("eisZusammen1").innerHTML = "";
        }
        else if (anzahlDerKugeln1 == 1) {
            document.getElementById("eisZusammen1").innerHTML = anzahlDerKugeln1 + " Kugel " + eisSorte1;
        }
        else if (anzahlDerKugeln1 > 1) {
            document.getElementById("eisZusammen1").innerHTML = anzahlDerKugeln1 + " Kugeln " + eisSorte1;
        }
        if (anzahlDerKugeln2 == 0) {
            document.getElementById("eisZusammen2").innerHTML = "";
        }
        else if (anzahlDerKugeln2 == 1) {
            document.getElementById("eisZusammen2").innerHTML = anzahlDerKugeln2 + " Kugel " + eisSorte2;
        }
        else if (anzahlDerKugeln2 > 1) {
            document.getElementById("eisZusammen2").innerHTML = anzahlDerKugeln2 + " Kugeln " + eisSorte2;
        }
        if (anzahlDerKugeln3 == 0) {
            document.getElementById("eisZusammen3").innerHTML = "";
        }
        else if (anzahlDerKugeln3 == 1) {
            document.getElementById("eisZusammen3").innerHTML = anzahlDerKugeln3 + " Kugel " + eisSorte3;
        }
        else if (anzahlDerKugeln3 > 1) {
            document.getElementById("eisZusammen3").innerHTML = anzahlDerKugeln3 + " Kugeln " + eisSorte3;
        }
    }
    /* Überprüfung ob alle Werte verändert wurden. Diese wurden global definiert und nun überprüfen wir: Wert der selbe wie definiert? - Dann stimmt was nicht */
    function ueberpruefen() {
        if (anzahlDerKugeln1 + anzahlDerKugeln2 + anzahlDerKugeln3 < 1) {
            alert("Verschwende keine Zeit und wähle ein Eis!");
        }
        else if (darreichung == undefined) {
            alert("Wenn du nicht das Eis aus deiner Hand essen wills, dann wähl' besser eine Darreichungsform!");
        }
        else if (strasse && PLZ == undefined) {
            alert("Digga, das Eis muss doch zu dir?!");
        }
        else if (vorUndNachnamen == undefined) {
            alert("Anonym kannst du auf Reddit sein, aber nicht bei uns!");
        }
        else if (stadt == undefined) {
            alert("Stadt, Land, Fluss! Nur ohne Land und Fluss und du darfst nur deine Stadt nennen");
        }
        else {
            alert("GZ, du hast nichts verkackt! ");
        }
    }
})(Eidealer || (Eidealer = {}));
//# sourceMappingURL=main.js.map