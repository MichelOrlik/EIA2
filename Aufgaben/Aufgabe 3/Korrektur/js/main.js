/* Kreuz ♣ */
let kreuzSieben = {
    kartenFarbe: "♣",
    kartenWert: "Sieben",
};
let kreuzAcht = {
    kartenFarbe: "♣",
    kartenWert: "Acht",
};
let kreuzNeun = {
    kartenFarbe: "♣",
    kartenWert: "Neun",
};
let kreuzZehn = {
    kartenFarbe: "♣",
    kartenWert: "Zehn",
};
let kreuzBube = {
    kartenFarbe: "♣",
    kartenWert: "Bube",
};
let kreuzDame = {
    kartenFarbe: "♣",
    kartenWert: "Dame",
};
let kreuzKoenig = {
    kartenFarbe: "♣",
    kartenWert: "Koenig",
};
let kreuzAss = {
    kartenFarbe: "♣",
    kartenWert: "Ass",
};
/* Herz ♥ */
let herzSieben = {
    kartenFarbe: "♥",
    kartenWert: "Sieben"
};
let herzAcht = {
    kartenFarbe: "♥",
    kartenWert: "Acht"
};
let herzNeun = {
    kartenFarbe: "♥",
    kartenWert: "Neun"
};
let herzZehn = {
    kartenFarbe: "♥",
    kartenWert: "Zehn"
};
let herzBube = {
    kartenFarbe: "♥",
    kartenWert: "Bube"
};
let herzDame = {
    kartenFarbe: "♥",
    kartenWert: "Dame"
};
let herzKoenig = {
    kartenFarbe: "♥",
    kartenWert: "Koenig"
};
let herzAss = {
    kartenFarbe: "♥",
    kartenWert: "Ass"
};
/* Pik ♠*/
let pikSieben = {
    kartenFarbe: "♠",
    kartenWert: "Sieben"
};
let pikAcht = {
    kartenFarbe: "♠",
    kartenWert: "Acht"
};
let pikNeun = {
    kartenFarbe: "♠",
    kartenWert: "Neun"
};
let pikZehn = {
    kartenFarbe: "♠",
    kartenWert: "Zehn"
};
let pikBube = {
    kartenFarbe: "♠",
    kartenWert: "Bube"
};
let pikDame = {
    kartenFarbe: "♠",
    kartenWert: "Dame"
};
let pikKoenig = {
    kartenFarbe: "♠",
    kartenWert: "Koenig"
};
let pikAss = {
    kartenFarbe: "♠",
    kartenWert: "Ass"
};
/* Karo ♦ */
let karoSieben = {
    kartenFarbe: "♦",
    kartenWert: "Sieben"
};
let karoAcht = {
    kartenFarbe: "♦",
    kartenWert: "Acht"
};
let karoNeun = {
    kartenFarbe: "♦",
    kartenWert: "Neun"
};
let karoZehn = {
    kartenFarbe: "♦",
    kartenWert: "Zehn"
};
let karoBube = {
    kartenFarbe: "♦",
    kartenWert: "Bube"
};
let karoDame = {
    kartenFarbe: "♦",
    kartenWert: "Dame"
};
let karoKoenig = {
    kartenFarbe: "♦",
    kartenWert: "Koenig"
};
let karoAss = {
    kartenFarbe: "♦",
    kartenWert: "Ass"
};
/* Array mit allen 36 Karten */
let alle32Karten = [
    kreuzSieben, kreuzAcht, kreuzNeun, kreuzZehn, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss,
    herzSieben, herzAcht, herzNeun, herzZehn, herzBube, herzDame, herzKoenig, herzAss,
    pikSieben, pikAcht, pikNeun, pikZehn, pikBube, pikDame, pikKoenig, pikAss,
    karoSieben, karoAcht, karoNeun, karoZehn, karoBube, karoDame, karoKoenig, karoAss,
];
/* Array für Handkarten genau wie für alle36Karten erstellen und die Anzahl der Handkarten auf 0 setzen */
let handKarten = [];
let anzahlHandKarten = 0;
/* Abfragefunktion der Frage beim Laden der Internetseite (Hier auf html verlinken)*/
function abfrageHandKarten() {
    if (anzahlHandKarten == 0) {
        let anzahl = parseInt(prompt("Hallo Abenteurer, mit wievielen Karten forderst du mich heraus?"));
        if (anzahl <= 15 && anzahl >= 1) {
            anzahlHandKarten = anzahl;
            handkartenAuswählen();
        }
        /* Wenn Anzahl nicht zwischen 1 und 15 liegt, dann nochmal nachfragen */
        else {
            abfrageHandKarten();
        }
        /* Return der Anzahl der generierten Handkartenanzahl */
        return anzahlHandKarten;
    }
}
function handkartenAuswählen() {
    console.log(anzahlHandKarten);
    /*For Schleife, die die gewünschte Anzahl der Handkarten, die davor ausgewählt wurden generiert */
    for (let a = 0; a < anzahlHandKarten; a++) {
        let karte = karteZiehen();
        /* Hier erstellen wir eine neue Karte, als div */
        let handKarte = document.createElement("div");
        let html = `
            <!--Folgendes entspricht einer Karte-->
            
            <p>${karte.kartenWert}</p>
            <p>${karte.kartenFarbe}</p>
            
        `;
        handKarte.innerHTML = html;
        document.getElementById("handKartenHTML").appendChild(handKarte); /* Rückwärtsdenken erleichtert Erklärung */
    }
    let ablegestapel = document.createElement("div");
    /*eine beliebige Karte für den Ablagestapell ziehen, um das Spiel beginnen zu können */
    let karte = karteZiehen();
    let kartenHtml = `
        <p>${karte.kartenWert}</p>
        <p>${karte.kartenFarbe}</p>
    `;
    /* Zugriff auf die innerHTML */
    ablegestapel.innerHTML = kartenHtml;
    document.getElementById("ziehUndAblegestapelHTML").appendChild(ablegestapel);
    /* Nachlegestapel erstellen, solange genügend Karten (Mehr als 0) */
    if (alle32Karten.length > 0) {
        let nachZiehStapel = document.createElement("div");
        let nachziehen = `
    <p>Hier ziehen!</p>
    `;
        /* Hier wieder zugriff auf innerHTML */
        nachZiehStapel.innerHTML = nachziehen;
        document.getElementById("ziehUndAblegestapelHTML").appendChild(nachZiehStapel);
    }
}
/*Funktion, um eine beliebige Karte zu "ziehen"*/
function karteZiehen() {
    /* Eine beliebige Zahl wird mit der Länge multipliziert und die Karte nehmen wir*/
    let random = Math.floor(Math.random() * alle32Karten.length);
    console.log('random Number: ' + random);
    let karte = alle32Karten[random];
    alle32Karten.splice(random, 1);
    return karte;
}
//# sourceMappingURL=main.js.map