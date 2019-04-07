/*
Aufgabe 2: Mau Mau
Name: Michel Orlik
Matrikel-Nummer: 261370
Datum: 07.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
/* Handkarten- und einen Kartenstapel-Array */
let kartenStapel = [
    { Farbe: "♠", Wert: "7" }, { Farbe: "♠", Wert: "8" }, { Farbe: "♠", Wert: "9" }, { Farbe: "♠", Wert: "Bube" }, { Farbe: "♠", Wert: "Dame" }, { Farbe: "♠", Wert: "König" }, { Farbe: "♠", Wert: "10" },
    { Farbe: "♣", Wert: "7" }, { Farbe: "♣", Wert: "8" }, { Farbe: "♣", Wert: "9" }, { Farbe: "♣", Wert: "Bube" }, { Farbe: "♣", Wert: "Dame" }, { Farbe: "♣", Wert: "König" }, { Farbe: "♣", Wert: "10" },
    { Farbe: "♦", Wert: "7" }, { Farbe: "♦", Wert: "8" }, { Farbe: "♦", Wert: "9" }, { Farbe: "♦", Wert: "Bube" }, { Farbe: "♦", Wert: "Dame" }, { Farbe: "♦", Wert: "König" }, { Farbe: "♦", Wert: "10" },
    { Farbe: "♥", Wert: "7" }, { Farbe: "♥", Wert: "8" }, { Farbe: "♥", Wert: "9" }, { Farbe: "♥", Wert: "Bube" }, { Farbe: "♥", Wert: "Dame" }, { Farbe: "♥", Wert: "König" }, { Farbe: "♥", Wert: "10" },
];
let handKarten = [];
function rechnen() {
    let a = Math.floor(Math.random() * kartenStapel.length);
    handKarten.push(kartenStapel[a]);
    kartenStapel.splice(a, 1);
}
/*
VERSTÄNDNIS:    Math.random gibt eine Pseudozufallszahl zurück.
                Math.floor rundet die Zahl in der folgenden Klammer ab.
                    Beispiel: Aus Math.floor(5,6) und Math.floor(5,1) wird 5.
                Die splice() Methode ändert den Inhalt eines Arrays durch das Entfernen vorhandener Elemente und/oder Hinzufügen neuer Elemente.
*/
document.addEventListener("DOMContentLoaded", rechnen);
/* Abfrage der Anzahl mit zu spielenden Karten mittels Prompt */
function abfrageDerAnzahl() {
    let abfrage = prompt("Mit wie vielen Karten spielen wir diesmal?");
    let anzahlAufDerHand = parseInt(abfrage);
    if (isNaN(anzahlAufDerHand) || anzahlAufDerHand > 2 || anzahlAufDerHand < 10) {
        abfrageDerAnzahl();
    }
    else {
        for (let b = 0; b < anzahlAufDerHand; b++) {
            abfrageDerAnzahl();
            erstelleHtml(handKarten[b], b);
        }
    }
}
/*
VERSTÄNDNIS: isNaN überprüft ob ein Wert "Not a Number" ist.
             Die parseInt() Methode liest ein String-Argument ein und gibt eine ganze Zahl im angegebenen Zahlensystem zurück.
                Beispiel: Aus eingegebener Zahl 2 (Typ: String) wird eine 2 (Typ: Number)
*/
function erstelleHtml(_Karte, _c) {
    let erstelleEinDiv = document.createElement('div');
    let stringFuerEinzelneKarte = `<div id="Handkarten" id="a${_c}">${_Karte.Farbe + " " + _Karte.Wert}</div>`;
    document.body.appendChild(erstelleEinDiv);
    document.getElementById("Hand").innerHTML + stringFuerEinzelneKarte;
}
//# sourceMappingURL=main.js.map