/* Aufgabe: 2 - Mau Mau
Name: Michel Orlik
Matrikel: 261370
Datum: 14.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe mit der Hilfe von Iven. Er wurde nicht kopiert und auch nicht diktiert.*/
/* Kreuz ♣ */
let kreuzSieben = {
    kartenFarbe: "♣",
    kartenWert: "Sieben",
    neuerWert: "1",
    neuerZahlenwert: 1,
};
let kreuzAcht = {
    kartenFarbe: "♣",
    kartenWert: "Acht",
    neuerWert: "2",
    neuerZahlenwert: 2,
};
let kreuzNeun = {
    kartenFarbe: "♣",
    kartenWert: "Neun",
    neuerWert: "3",
    neuerZahlenwert: 3
};
let kreuzZehn = {
    kartenFarbe: "♣",
    kartenWert: "Zehn",
    neuerWert: "4",
    neuerZahlenwert: 4
};
let kreuzBube = {
    kartenFarbe: "♣",
    kartenWert: "Bube",
    neuerWert: "5",
    neuerZahlenwert: 5
};
let kreuzDame = {
    kartenFarbe: "♣",
    kartenWert: "Dame",
    neuerWert: "6",
    neuerZahlenwert: 6
};
let kreuzKoenig = {
    kartenFarbe: "♣",
    kartenWert: "Koenig",
    neuerWert: "7",
    neuerZahlenwert: 7
};
let kreuzAss = {
    kartenFarbe: "♣",
    kartenWert: "Ass",
    neuerWert: "8",
    neuerZahlenwert: 8,
};
/* Herz ♥ */
let herzSieben = {
    kartenFarbe: "♥",
    kartenWert: "Sieben",
    neuerWert: "9",
    neuerZahlenwert: 9,
};
let herzAcht = {
    kartenFarbe: "♥",
    kartenWert: "Acht",
    neuerWert: "10",
    neuerZahlenwert: 10,
};
let herzNeun = {
    kartenFarbe: "♥",
    kartenWert: "Neun",
    neuerWert: "11",
    neuerZahlenwert: 11
};
let herzZehn = {
    kartenFarbe: "♥",
    kartenWert: "Zehn",
    neuerWert: "12",
    neuerZahlenwert: 12
};
let herzBube = {
    kartenFarbe: "♥",
    kartenWert: "Bube",
    neuerWert: "13",
    neuerZahlenwert: 13
};
let herzDame = {
    kartenFarbe: "♥",
    kartenWert: "Dame",
    neuerWert: "14",
    neuerZahlenwert: 14
};
let herzKoenig = {
    kartenFarbe: "♥",
    kartenWert: "Koenig",
    neuerWert: "15",
    neuerZahlenwert: 15
};
let herzAss = {
    kartenFarbe: "♥",
    kartenWert: "Ass",
    neuerWert: "16",
    neuerZahlenwert: 16
};
/* Pik ♠*/
let pikSieben = {
    kartenFarbe: "♠",
    kartenWert: "Sieben",
    neuerWert: "17",
    neuerZahlenwert: 17
};
let pikAcht = {
    kartenFarbe: "♠",
    kartenWert: "Acht",
    neuerWert: "18",
    neuerZahlenwert: 18
};
let pikNeun = {
    kartenFarbe: "♠",
    kartenWert: "Neun",
    neuerWert: "19",
    neuerZahlenwert: 19
};
let pikZehn = {
    kartenFarbe: "♠",
    kartenWert: "Zehn",
    neuerWert: "20",
    neuerZahlenwert: 20
};
let pikBube = {
    kartenFarbe: "♠",
    kartenWert: "Bube",
    neuerWert: "21",
    neuerZahlenwert: 21
};
let pikDame = {
    kartenFarbe: "♠",
    kartenWert: "Dame",
    neuerWert: "22",
    neuerZahlenwert: 22
};
let pikKoenig = {
    kartenFarbe: "♠",
    kartenWert: "Koenig",
    neuerWert: "23",
    neuerZahlenwert: 23
};
let pikAss = {
    kartenFarbe: "♠",
    kartenWert: "Ass",
    neuerWert: "24",
    neuerZahlenwert: 24
};
/* Karo ♦ */
let karoSieben = {
    kartenFarbe: "♦",
    kartenWert: "Sieben",
    neuerWert: "25",
    neuerZahlenwert: 25
};
let karoAcht = {
    kartenFarbe: "♦",
    kartenWert: "Acht",
    neuerWert: "26",
    neuerZahlenwert: 26
};
let karoNeun = {
    kartenFarbe: "♦",
    kartenWert: "Neun",
    neuerWert: "27",
    neuerZahlenwert: 27
};
let karoZehn = {
    kartenFarbe: "♦",
    kartenWert: "Zehn",
    neuerWert: "28",
    neuerZahlenwert: 28
};
let karoBube = {
    kartenFarbe: "♦",
    kartenWert: "Bube",
    neuerWert: "29",
    neuerZahlenwert: 29
};
let karoDame = {
    kartenFarbe: "♦",
    kartenWert: "Dame",
    neuerWert: "30",
    neuerZahlenwert: 30
};
let karoKoenig = {
    kartenFarbe: "♦",
    kartenWert: "Koenig",
    neuerWert: "31",
    neuerZahlenwert: 31
};
let karoAss = {
    kartenFarbe: "♦",
    kartenWert: "Ass",
    neuerWert: "32",
    neuerZahlenwert: 32
};
/* Array mit allen 32 Karten */
let alle32Karten = [
    kreuzSieben, kreuzAcht, kreuzNeun, kreuzZehn, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss,
    herzSieben, herzAcht, herzNeun, herzZehn, herzBube, herzDame, herzKoenig, herzAss,
    pikSieben, pikAcht, pikNeun, pikZehn, pikBube, pikDame, pikKoenig, pikAss,
    karoSieben, karoAcht, karoNeun, karoZehn, karoBube, karoDame, karoKoenig, karoAss,
];
/* Array für Handkarten genau wie für alle32Karten erstellen und die Anzahl der Handkarten auf 0 setzen */
let handKarten = [];
let anzahlHandKarten = 0;
let abgelegteKarten = [];
document.addEventListener('DOMContentLoaded', addListeners);
function addListeners() {
    document.addEventListener("keydown", event => {
        console.log(event);
        if (event.keyCode == 32) {
            leertastenHinzufuegen();
            console.log("Zeit für ein D-D-D-Duell!");
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
    return;
    ;
}
;
function leertastenHinzufuegen() {
    console.log(anzahlHandKarten);
    if (alle32Karten.length >= 0) {
        let karte = karteGenerieren();
        let handKarte = document.createElement("div");
        let html = `
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
function karteSpielen(_event) {
    console.log("Karte legen wurde gewählt");
    let geklickteKarte = event.target;
    console.log(geklickteKarte.getAttribute("id")); /* Bis hier wird es ausgeführt. */
    for (let i = 0; i < handKarten.length; i++) { /* Habe ich etwa hier den Fehler gemacht?*/
        if (geklickteKarte.getAttribute("id") == handKarten[i].neuerWert) {
            abgelegteKarten.push(handKarten.splice(i, 1)[0]); /* Aus dem Handkarten-Array wird die Karte gespliced, und auf den ablegeStapel gepusht */
            console.log(abgelegteKarten);
            let a = abgelegteKarten.length;
            gespielteKartenAnzeigen('legeKarte', abgelegteKarten[a - 1]);
        }
    }
}
function gespielteKartenAnzeigen(htmlID /*ID aus der vorherigen Funktion*/, karte) {
    let ablegestapel = document.createElement("div");
    let kartenHtml = `
            <div id="${karte.neuerWert}">
            <p>${karte.kartenWert}</p>
            <p>${karte.kartenFarbe}</p>
            </div>
            `;
    /* Zugriff auf die innerHTML */
    ablegestapel.innerHTML = kartenHtml;
    document.getElementById("ablegestapelHTML").appendChild(ablegestapel);
}
function sortieren() {
    handKarten.sort(sortierBedingungen);
    document.getElementById("handKartenHTML").innerHTML = "Hier sollten ja eigentlich die neu generierten Handkarten sein";
    console.log(handKarten); /* Es zeigt an, dass das Array leer ist... Das müsste das Problem sein */
}
function sortierBedingungen(a, b) {
    let zahlA = a.neuerZahlenwert;
    let zahlB = b.neuerZahlenwert;
    if (zahlA == zahlB) {
        return 0;
    }
    ;
    if (zahlA > zahlB) {
        return 1;
    }
    ;
    if (zahlA < zahlB) {
        return -1;
    }
    ;
}
/* Alter Code */
/* Abfragefunktion der Frage beim Laden der Internetseite*/
function abfrageHandKarten() {
    if (anzahlHandKarten == 0) {
        let anzahl = parseInt(prompt("Hallo Abenteurer, mit wievielen Karten forderst du mich heraus?"));
        if (anzahl <= 15 && anzahl >= 1) {
            anzahlHandKarten = anzahl;
            kartenErstellen();
        }
        /* Wenn Anzahl nicht zwischen 1 und 15 liegt, dann nochmal nachfragen */
        else {
            abfrageHandKarten();
        }
        /* Return der Anzahl der generierten Handkartenanzahl */
        return anzahlHandKarten;
    }
}
function kartenErstellen() {
    /*For Schleife, die die gewünschte Anzahl der Handkarten, die davor ausgewählt wurden generiert */
    for (let a = 0; a < anzahlHandKarten; a++) {
        let karte = karteGenerieren();
        /* Hier erstellen wir eine neue Karte, als div */
        let handKarte = document.createElement("div");
        let html = `
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
    let karte = karteGenerieren();
    let kartenHtml = `
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
        let nachziehen = `
    <p>Hier ziehen!</p>
    `;
        /* Hier wieder Zugriff auf innerHTML */
        nachZiehStapel.innerHTML = nachziehen;
        document.getElementById("ziehstapelHTML").appendChild(nachZiehStapel);
    }
}
/*Funktion, um eine beliebige Karte zu generieren*/
function karteGenerieren() {
    /* Eine beliebige Zahl wird mit der Länge multipliziert und die Karte nehmen wir*/
    let random = Math.floor(Math.random() * alle32Karten.length);
    console.log('random Number: ' + random);
    let karte = alle32Karten[random];
    alle32Karten.splice(random, 1);
    return karte;
}
//}
//# sourceMappingURL=main.js.map