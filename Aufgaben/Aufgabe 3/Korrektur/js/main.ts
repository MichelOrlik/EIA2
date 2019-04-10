/* Aufgabe: 2 - Mau Mau
Name: Michel Orlik
Matrikel: 261370
Datum: 11.04.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
/* Interface für alle Karten mit je zwei Werten: Farbe und Wert. */
interface Karte {
    kartenFarbe: string;
    kartenWert: string;
}
/* Kreuz ♣ */
let kreuzSieben: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Sieben",
}
let kreuzAcht: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Acht",
}
let kreuzNeun: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Neun",
}
let kreuzZehn: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Zehn",
}
let kreuzBube: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Bube",
}
let kreuzDame: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Dame",
}
let kreuzKoenig: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Koenig",
}
let kreuzAss: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Ass",
}
/* Herz ♥ */
let herzSieben: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Sieben"
}
let herzAcht: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Acht"
}
let herzNeun: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Neun"
}
let herzZehn: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Zehn"
}
let herzBube: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Bube"
}
let herzDame: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Dame"
}
let herzKoenig: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Koenig"
}
let herzAss: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Ass"
}
/* Pik ♠*/
let pikSieben: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Sieben"
}
let pikAcht: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Acht"
}
let pikNeun: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Neun"
}
let pikZehn: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Zehn"
}
let pikBube: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Bube"
}
let pikDame: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Dame"
}
let pikKoenig: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Koenig"
}
let pikAss: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Ass"
}
/* Karo ♦ */
let karoSieben: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Sieben"
}
let karoAcht: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Acht"
}
let karoNeun: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Neun"
}
let karoZehn: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Zehn"
}
let karoBube: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Bube"
}
let karoDame: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Dame"
}
let karoKoenig: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Koenig"
}
let karoAss: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Ass"
}
/* Array mit allen 36 Karten */
let alle32Karten: Karte[] = [ 
kreuzSieben, kreuzAcht, kreuzNeun, kreuzZehn, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss,
herzSieben, herzAcht, herzNeun, herzZehn, herzBube, herzDame, herzKoenig, herzAss,
pikSieben, pikAcht, pikNeun, pikZehn, pikBube, pikDame, pikKoenig, pikAss,
karoSieben, karoAcht, karoNeun, karoZehn, karoBube, karoDame, karoKoenig, karoAss,
]
/* Array für Handkarten genau wie für alle36Karten erstellen und die Anzahl der Handkarten auf 0 setzen */
let handKarten: Karte[] = [];
let anzahlHandKarten: number = 0;
/* Abfragefunktion der Frage beim Laden der Internetseite (Hier auf html verlinken)*/
function abfrageHandKarten() {
    if (anzahlHandKarten == 0) {
        let anzahl: number = parseInt(prompt("Hallo Abenteurer, mit wievielen Karten forderst du mich heraus?"))
    if (anzahl <= 15 && anzahl >= 1) {
        anzahlHandKarten = anzahl;
        handkartenAuswählen()
    }
    /* Wenn Anzahl nicht zwischen 1 und 15 liegt, dann nochmal nachfragen */
    else {
        abfrageHandKarten();
    }
    /* Return der Anzahl der generierten Handkartenanzahl */
    return anzahlHandKarten;
    }
    
}
function handkartenAuswählen(): void {
    console.log(anzahlHandKarten);
    /*For Schleife, die die gewünschte Anzahl der Handkarten, die davor ausgewählt wurden generiert */
    for (let a: number = 0; a < anzahlHandKarten; a++) {
        let karte = karteZiehen();

        /* Hier erstellen wir eine neue Karte, als div */
        let handKarte = document.createElement("div");
        let html: string =
            `
            <!--Folgendes entspricht einer Karte-->
            
            <p>${karte.kartenWert}</p>
            <p>${karte.kartenFarbe}</p>
            
        `;
        handKarte.innerHTML = html;
        document.getElementById("handKartenHTML").appendChild(handKarte); /* Rückwärtsdenken erleichtert Erklärung */
    }
let ablegestapel = document.createElement("div");
/*eine beliebige Karte für den Ablagestapell ziehen, um das Spiel beginnen zu können */
let karte: Karte = karteZiehen()
let kartenHtml: string =
    `
        <p>${karte.kartenWert}</p>
        <p>${karte.kartenFarbe}</p>
    `;
/* Zugriff auf die innerHTML */
ablegestapel.innerHTML = kartenHtml;
document.getElementById("ziehUndAblegestapelHTML").appendChild(ablegestapel); 
/* Nachlegestapel erstellen, solange genügend Karten (Mehr als 0) */
if (alle32Karten.length > 0) {
    let nachZiehStapel = document.createElement("div");
    let nachziehen: string =
    `
    <p>Hier ziehen!</p>
    `;
   /* Hier wieder zugriff auf innerHTML */
    nachZiehStapel.innerHTML = nachziehen;
    document.getElementById("ziehUndAblegestapelHTML").appendChild(nachZiehStapel);
}
}
/*Funktion, um eine beliebige Karte zu "ziehen"*/
function karteZiehen(): Karte {
/* Eine beliebige Zahl wird mit der Länge multipliziert und die Karte nehmen wir*/ 
let random: number = Math.floor(Math.random() * alle32Karten.length);
console.log('random Number: ' + random);
let karte = alle32Karten[random];
alle32Karten.splice(random, 1);
return karte;
}