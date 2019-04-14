/* Aufgabe: 2 - Mau Mau
Name: Michel Orlik
Matrikel: 261370
Datum: 14.04.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe mit der Hilfe von Iven. Er wurde nicht kopiert und auch nicht diktiert.*/



/* Sobald ich ein namespace erstelle wird die Funktion abfrageHandKarten (Zeile 321) als "declared but value never read" angezeigt*/
//namespace MauMauinteraktiv{
/* Interface für alle Karten mit je zwei Werten: Farbe und Wert. */
interface Karte {
    kartenFarbe: string;
    kartenWert: string;
    neuerWert: string;
    neuerZahlenwert: number;
}
/* Kreuz ♣ */
let kreuzSieben: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Sieben",
    neuerWert: "1",
    neuerZahlenwert: 1,
}
let kreuzAcht: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Acht",
    neuerWert: "2",
    neuerZahlenwert: 2,
}
let kreuzNeun: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Neun",
    neuerWert: "3",
    neuerZahlenwert: 3
}
let kreuzZehn: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Zehn",
    neuerWert: "4",
    neuerZahlenwert: 4
}
let kreuzBube: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Bube",
    neuerWert: "5",
    neuerZahlenwert: 5
}
let kreuzDame: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Dame",
    neuerWert: "6",
    neuerZahlenwert: 6
}
let kreuzKoenig: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Koenig",
    neuerWert: "7",
    neuerZahlenwert: 7
}
let kreuzAss: Karte = {
    kartenFarbe: "♣",
    kartenWert: "Ass",
    neuerWert: "8",
    neuerZahlenwert: 8,
}
/* Herz ♥ */
let herzSieben: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Sieben",
    neuerWert: "9",
    neuerZahlenwert: 9,
}
let herzAcht: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Acht",
    neuerWert: "10",
    neuerZahlenwert: 10,
}
let herzNeun: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Neun",
    neuerWert: "11",
    neuerZahlenwert: 11
}
let herzZehn: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Zehn",
    neuerWert: "12",
    neuerZahlenwert: 12
}
let herzBube: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Bube",
    neuerWert: "13",
    neuerZahlenwert: 13
}
let herzDame: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Dame",
    neuerWert: "14",
    neuerZahlenwert: 14
}
let herzKoenig: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Koenig",
    neuerWert: "15",
    neuerZahlenwert: 15
}
let herzAss: Karte = {
    kartenFarbe: "♥",
    kartenWert: "Ass",
    neuerWert: "16",
    neuerZahlenwert: 16
}
/* Pik ♠*/
let pikSieben: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Sieben",
    neuerWert: "17",
    neuerZahlenwert: 17
}
let pikAcht: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Acht",
    neuerWert: "18",
    neuerZahlenwert: 18
}
let pikNeun: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Neun",
    neuerWert: "19",
    neuerZahlenwert: 19
}
let pikZehn: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Zehn",
    neuerWert: "20",
    neuerZahlenwert: 20
}
let pikBube: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Bube",
    neuerWert: "21",
    neuerZahlenwert: 21
}
let pikDame: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Dame",
    neuerWert: "22",
    neuerZahlenwert: 22
}
let pikKoenig: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Koenig",
    neuerWert: "23",
    neuerZahlenwert: 23
}
let pikAss: Karte = {
    kartenFarbe: "♠",
    kartenWert: "Ass",
    neuerWert: "24",
    neuerZahlenwert: 24
}
/* Karo ♦ */
let karoSieben: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Sieben",
    neuerWert: "25",
    neuerZahlenwert: 25
}
let karoAcht: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Acht",
    neuerWert: "26",
    neuerZahlenwert: 26
}
let karoNeun: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Neun",
    neuerWert: "27",
    neuerZahlenwert: 27
}
let karoZehn: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Zehn",
    neuerWert: "28",
    neuerZahlenwert: 28
}
let karoBube: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Bube",
    neuerWert: "29",
    neuerZahlenwert: 29
}
let karoDame: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Dame",
    neuerWert: "30",
    neuerZahlenwert: 30
}
let karoKoenig: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Koenig",
    neuerWert: "31",
    neuerZahlenwert: 31
}
let karoAss: Karte = {
    kartenFarbe: "♦",
    kartenWert: "Ass",
    neuerWert: "32",
    neuerZahlenwert: 32
}
/* Array mit allen 32 Karten */
let alle32Karten: Karte[] = [
    kreuzSieben, kreuzAcht, kreuzNeun, kreuzZehn, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss,
    herzSieben, herzAcht, herzNeun, herzZehn, herzBube, herzDame, herzKoenig, herzAss,
    pikSieben, pikAcht, pikNeun, pikZehn, pikBube, pikDame, pikKoenig, pikAss,
    karoSieben, karoAcht, karoNeun, karoZehn, karoBube, karoDame, karoKoenig, karoAss,
]
/* Array für Handkarten genau wie für alle32Karten erstellen und die Anzahl der Handkarten auf 0 setzen */
let handKarten: Karte[] = [];
let anzahlHandKarten: number = 0;
let abgelegteKarten: Karte[] = []

document.addEventListener('DOMContentLoaded', addListeners);

function addListeners() {

    document.addEventListener("keydown", event => {
        console.log(event);
        if (event.keyCode == 32) {
            leertastenHinzufuegen();
            console.log("Zeit für ein D-D-D-Duell!")
            return;
        }
        else {
            return;
        }
    });
    document.getElementById('ziehstapelHTML').addEventListener("click", event => {
        console.log(event);
        leertastenHinzufuegen();
    });
    document.getElementById("handKartenHTML").addEventListener('click', _cardEvent => {
        console.log(_cardEvent);
        karteSpielen(_cardEvent);

    });

    document.getElementById("Knopf").addEventListener('click', sortieren);
    return;;
};

function leertastenHinzufuegen(): void {
    console.log(anzahlHandKarten);

    if (alle32Karten.length >= 0) {
        let karte = karteGenerieren();


        let handKarte = document.createElement("div");
        let html: string =
            `
                <!--Folgendes entspricht einer Karte-->
            
                <div id="${karte.neuerWert}">
                <p>${karte.kartenWert}</p>
                <p>${karte.kartenFarbe}</p>
                </div>
            
            `;
        handKarte.innerHTML = html;
        document.getElementById("handKartenHTML").appendChild(handKarte);
    }
}

function karteSpielen(_event: Event) { /* Hier muss irgendwo der Fehler sein, auf den ich nicht komme... */
    console.log("Karte legen wurde gewählt");
    let geklickteKarte: HTMLElement = <HTMLElement>event.target;
    console.log(geklickteKarte.getAttribute("id")); /* Bis hier wird es ausgeführt. */
    for (let i: number = 0; i < handKarten.length; i++) { /* Habe ich etwa hier den Fehler gemacht?*/
        if (geklickteKarte.getAttribute("id") == handKarten[i].neuerWert) {
            abgelegteKarten.push(handKarten.splice(i, 1)[0]); /* Aus dem Handkarten-Array wird die Karte gespliced, und auf den ablegeStapel gepusht */
            console.log(abgelegteKarten);
            let a: number = abgelegteKarten.length;
            gespielteKartenAnzeigen('legeKarte', abgelegteKarten[a - 1]);
        }
    }
}
function gespielteKartenAnzeigen(htmlID: string /*ID aus der vorherigen Funktion*/, karte: Karte): void { /* Das sollte die Karte auf dem Ablegestapel anzeigen */
    let ablegestapel = document.createElement("div");
    let kartenHtml: string =
        `
            <div id="${karte.neuerWert}">
            <p>${karte.kartenWert}</p>
            <p>${karte.kartenFarbe}</p>
            </div>
            `;
    /* Zugriff auf die innerHTML */
    ablegestapel.innerHTML = kartenHtml;
    document.getElementById("ablegestapelHTML").appendChild(ablegestapel)
}
function sortieren() { /* schreibe ich das handKarten-Array hinter das innerHTML, so wird dies als Fehler angezeigt */
    handKarten.sort(sortierBedingungen);
    document.getElementById("handKartenHTML").innerHTML = "Hier sollten ja eigentlich die neu generierten Handkarten sein";
    console.log(handKarten); /* Es zeigt an, dass das Array leer ist... Das müsste das Problem sein */

}

function sortierBedingungen(a: Karte, b: Karte): number {  /* Habe Iven gefragt, er hat auch diese Fehlermeldung */
    let zahlA: number = a.neuerZahlenwert;
    let zahlB: number = b.neuerZahlenwert;
    if (zahlA == zahlB) { return 0 };
    if (zahlA > zahlB) { return 1 };
    if (zahlA < zahlB) { return -1 };

}
/* Alter Code */
/* Abfragefunktion der Frage beim Laden der Internetseite*/
function abfrageHandKarten() {
    if (anzahlHandKarten == 0) {
        let anzahl: number = parseInt(prompt("Hallo Abenteurer, mit wievielen Karten forderst du mich heraus?"))
        if (anzahl <= 15 && anzahl >= 1) {
            anzahlHandKarten = anzahl;
            kartenErstellen()
        }
        /* Wenn Anzahl nicht zwischen 1 und 15 liegt, dann nochmal nachfragen */
        else {
            abfrageHandKarten();
        }
        /* Return der Anzahl der generierten Handkartenanzahl */
        return anzahlHandKarten;
    }

}
function kartenErstellen(): void {
    /*For Schleife, die die gewünschte Anzahl der Handkarten, die davor ausgewählt wurden generiert */
    for (let a: number = 0; a < anzahlHandKarten; a++) {
        let karte = karteGenerieren();

        /* Hier erstellen wir eine neue Karte, als div */
        let handKarte = document.createElement("div");
        let html: string =
            `
            <!--Folgendes entspricht einer Karte-->
        
            <div id="${karte.neuerWert}">
            <p>${karte.kartenWert}</p>
            <p>${karte.kartenFarbe}</p>
            </div>
        
        `;
        handKarte.innerHTML = html;
        document.getElementById("handKartenHTML").appendChild(handKarte); /* Rückwärtsdenken erleichtert Erklärung */
    }
    let ablegestapel = document.createElement("div");
    /*eine beliebige Karte für den Ablagestapel ziehen, um das Spiel beginnen zu können */
    let karte: Karte = karteGenerieren()
    let kartenHtml: string =
        `
    <div id="${karte.neuerWert}">
    <p>${karte.kartenWert}</p>
    <p>${karte.kartenFarbe}</p>
    </div>
    `;
    /* Zugriff auf die innerHTML */
    ablegestapel.innerHTML = kartenHtml;
    document.getElementById("ablegestapelHTML").appendChild(ablegestapel);
    /* Nachlegestapel erstellen, solange genügend Karten (Mehr als 0) */
    if (alle32Karten.length > 0) {
        let nachZiehStapel = document.createElement("div");
        let nachziehen: string =
            `
    <p>Hier ziehen!</p>
    `;
        /* Hier wieder Zugriff auf innerHTML */
        nachZiehStapel.innerHTML = nachziehen;
        document.getElementById("ziehstapelHTML").appendChild(nachZiehStapel);
    }
}
/*Funktion, um eine beliebige Karte zu generieren*/
function karteGenerieren(): Karte {
    /* Eine beliebige Zahl wird mit der Länge multipliziert und die Karte nehmen wir*/
    let random: number = Math.floor(Math.random() * alle32Karten.length);
    console.log('random Number: ' + random);
    let karte = alle32Karten[random];
    alle32Karten.splice(random, 1);
    return karte;
}

//}
