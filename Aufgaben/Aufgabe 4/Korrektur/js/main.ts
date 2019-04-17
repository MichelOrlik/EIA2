/* Aufgabe: 3 - Mau Mau
Name: Michel Orlik
Matrikel: 261370
Datum: 17.04.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe mit der Hilfe von Iven. Er wurde nicht kopiert und auch nicht diktiert.*/



/* Sobald ich ein namespace erstelle wird die Funktion abfrageHandKarten (Zeile 321) als "declared but value never read" angezeigt*/
//namespace MauMauinteraktiv{
/* Interface für alle Karten mit je zwei Werten: Farbe und Wert. */
namespace MauMauInteraktiv {
    interface Karte {
        kartenFarbe: string;
        kartenWert: string;
        neuerZahlenwert: number;
    }
    /* Kreuz ♣ */
    let kreuzSieben: Karte = {
        kartenFarbe: "♣",
        kartenWert: "Sieben",
        neuerZahlenwert: 1,
    }
    let kreuzAcht: Karte = {
        kartenFarbe: "♣",
        kartenWert: "Acht",
        neuerZahlenwert: 2,
    }
    let kreuzNeun: Karte = {
        kartenFarbe: "♣",
        kartenWert: "Neun",
        neuerZahlenwert: 3
    }
    let kreuzZehn: Karte = {
        kartenFarbe: "♣",
        kartenWert: "Zehn",
        neuerZahlenwert: 4
    }
    let kreuzBube: Karte = {
        kartenFarbe: "♣",
        kartenWert: "Bube",
        neuerZahlenwert: 5
    }
    let kreuzDame: Karte = {
        kartenFarbe: "♣",
        kartenWert: "Dame",
        neuerZahlenwert: 6
    }
    let kreuzKoenig: Karte = {
        kartenFarbe: "♣",
        kartenWert: "Koenig",
        neuerZahlenwert: 7
    }
    let kreuzAss: Karte = {
        kartenFarbe: "♣",
        kartenWert: "Ass",
        neuerZahlenwert: 8,
    }
    /* Herz ♥ */
    let herzSieben: Karte = {
        kartenFarbe: "♥",
        kartenWert: "Sieben",
        neuerZahlenwert: 9,
    }
    let herzAcht: Karte = {
        kartenFarbe: "♥",
        kartenWert: "Acht",
        neuerZahlenwert: 10,
    }
    let herzNeun: Karte = {
        kartenFarbe: "♥",
        kartenWert: "Neun",
        neuerZahlenwert: 11
    }
    let herzZehn: Karte = {
        kartenFarbe: "♥",
        kartenWert: "Zehn",
        neuerZahlenwert: 12
    }
    let herzBube: Karte = {
        kartenFarbe: "♥",
        kartenWert: "Bube",
        neuerZahlenwert: 13
    }
    let herzDame: Karte = {
        kartenFarbe: "♥",
        kartenWert: "Dame",
        neuerZahlenwert: 14
    }
    let herzKoenig: Karte = {
        kartenFarbe: "♥",
        kartenWert: "Koenig",
        neuerZahlenwert: 15
    }
    let herzAss: Karte = {
        kartenFarbe: "♥",
        kartenWert: "Ass",
        neuerZahlenwert: 16
    }
    /* Pik ♠*/
    let pikSieben: Karte = {
        kartenFarbe: "♠",
        kartenWert: "Sieben",
        neuerZahlenwert: 17
    }
    let pikAcht: Karte = {
        kartenFarbe: "♠",
        kartenWert: "Acht",
        neuerZahlenwert: 18
    }
    let pikNeun: Karte = {
        kartenFarbe: "♠",
        kartenWert: "Neun",
        neuerZahlenwert: 19
    }
    let pikZehn: Karte = {
        kartenFarbe: "♠",
        kartenWert: "Zehn",
        neuerZahlenwert: 20
    }
    let pikBube: Karte = {
        kartenFarbe: "♠",
        kartenWert: "Bube",
        neuerZahlenwert: 21
    }
    let pikDame: Karte = {
        kartenFarbe: "♠",
        kartenWert: "Dame",
        neuerZahlenwert: 22
    }
    let pikKoenig: Karte = {
        kartenFarbe: "♠",
        kartenWert: "Koenig",
        neuerZahlenwert: 23
    }
    let pikAss: Karte = {
        kartenFarbe: "♠",
        kartenWert: "Ass",
        neuerZahlenwert: 24
    }
    /* Karo ♦ */
    let karoSieben: Karte = {
        kartenFarbe: "♦",
        kartenWert: "Sieben",
        neuerZahlenwert: 25
    }
    let karoAcht: Karte = {
        kartenFarbe: "♦",
        kartenWert: "Acht",
        neuerZahlenwert: 26
    }
    let karoNeun: Karte = {
        kartenFarbe: "♦",
        kartenWert: "Neun",
        neuerZahlenwert: 27
    }
    let karoZehn: Karte = {
        kartenFarbe: "♦",
        kartenWert: "Zehn",
        neuerZahlenwert: 28
    }
    let karoBube: Karte = {
        kartenFarbe: "♦",
        kartenWert: "Bube",
        neuerZahlenwert: 29
    }
    let karoDame: Karte = {
        kartenFarbe: "♦",
        kartenWert: "Dame",
        neuerZahlenwert: 30
    }
    let karoKoenig: Karte = {
        kartenFarbe: "♦",
        kartenWert: "Koenig",
        neuerZahlenwert: 31
    }
    let karoAss: Karte = {
        kartenFarbe: "♦",
        kartenWert: "Ass",
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
    let anzahlDerHandkarten: number = 0;
    /* Window.addEventListener ersetzt das Onload aus der vorherigen HTML und führt zudem loadEventListeners aus */
    window.addEventListener("load", init);

    function init(): void {
        anzahlHandkarten();
        addEventListeners();
    }

    function addEventListeners(): void {
        document.getElementById("nachZiehStapel").addEventListener("click", handKarteZiehen);
        document.addEventListener("keydown", leerTastenCheck);
        document.getElementById("sortierenKnopf").addEventListener("click", kartenSortieren);
    }

    function leerTastenCheck(_event: KeyboardEvent) {
        if (_event.keyCode == 32) {
            handKarteZiehen();
        }
    }

    function handKarteLegen(_event: Event): void {
        console.log("Ich lege den blauäugigen weißen Drachen!");
        let karte: HTMLElement = <HTMLElement>event.target;
        let nummer: string = karte.getAttribute("karteLegenWert");
        for (let i: number = 0; i < handKarten.length; i++) {
            let handKarte: Karte = handKarten[i];
            if (handKarte.neuerZahlenwert === parseInt(nummer)) {
                handKarten.splice(i, 1);
                kartenSortieren();

                let ablagestapel: HTMLElement = document.getElementById("ablegeStapel");

                let html: string =
                    `
                <p>${handKarte.kartenWert}</p>
                <p>${handKarte.kartenFarbe}</p>
                `;
                ablagestapel.innerHTML = html;
            }
        }

    }

    function handKarteZiehen(): void {
        if (alle32Karten.length <= 0) {
            console.log("keine Karten zum Nachziehen vorhanden!");
            document.getElementById("nachZiehStapel").innerHTML = "";
        }
        else {
            console.log("plus");
            let gezogeneKarte: Karte = karteZiehen();
            handKarten.push(gezogeneKarte);
            karteAbbilden(gezogeneKarte);
        }
    }

    function kartenSortieren(): void {
        console.log("Du möchtest dein Deck sortieren? Okay!");
        handKarten.sort(soSortieren);

        document.getElementById("handstapel").innerHTML = "";

        handKarten.forEach(karte => {
            karteAbbilden(karte);
        });


    }

    function soSortieren(a: Karte, b: Karte): 1 | 0 | -1 {
        let sortA: number = a.neuerZahlenwert;
        let sortB: number = b.neuerZahlenwert;
        if (sortA > sortB) { return 1; }
        if (sortA == sortB) { return 0; }
        if (sortA < sortB) { return -1; }
        return 0; /* Sonst wird das 1 | 0 | -1 unterkringelt. 1 | 0 | -1 anstelle von number, was davor unterkringelt wurde */
    }

    /* Funktion, um Anfrage beim Laden der Website zu stellen, wie viele Handkarten gezogen werden sollen */
    function anzahlHandkarten(): void {
        if (anzahlDerHandkarten == 0) {
            let menge: number = parseInt(prompt("Mit wie vielen Handkarten möchtest du spielen?"));
            if (menge <= 31 && menge >= 1) {
                anzahlDerHandkarten = menge;
                handkartenAuswählen();
            }
            else {
                anzahlHandkarten();
            }
        }
    }

    function handkartenAuswählen(): void {
        console.log("Ich teile die Karten aus!");
        console.log(anzahlDerHandkarten);
        for (let i: number = 0; i < anzahlDerHandkarten; i++) {
            let gezogeneKarte: Karte = karteZiehen();
            handKarten.push(gezogeneKarte);
            karteAbbilden(gezogeneKarte);
        }
        let ablagestapel: HTMLDivElement = document.createElement("div");
        let karte: Karte = karteZiehen();
        let kartenHtml: string =
            `
            <!--erstes div für den Ablagestapel-->
            <section>
            <div id="ablegeStapel">
            <p>${karte.kartenWert}</p>
            <p>${karte.kartenFarbe}</p>
            </div>
            </section>
        `;

        ablagestapel.innerHTML = kartenHtml;
        let container: HTMLElement = document.getElementById("container");
        container.appendChild(ablagestapel);
        if (alle32Karten.length > 0) {
            let nachziehstapel: HTMLDivElement = document.createElement("div");

            let nachziehen: string =
                `
                    <!--zweites div für den Nachziehstapel-->
                    <section>
                    <div id="nachZiehStapel"></div> 
                    </section>
                    `;

            nachziehstapel.innerHTML = nachziehen;
            container.appendChild(nachziehstapel);
        }
    }
    function karteAbbilden(karte: Karte): void {

        let handKarte: HTMLDivElement = document.createElement("div");

        let html: string =
            `
            <section>
                <div id="handkarte" karteLegenWert="${karte.neuerZahlenwert}">
                    <p karteLegenWert="${karte.neuerZahlenwert}">${karte.kartenWert}</p>
                    <p karteLegenWert="${karte.neuerZahlenwert}">${karte.kartenFarbe}</p>
                 </div>
            </section>
            `;

        handKarte.innerHTML = html;
        document.getElementById("handstapel").appendChild(handKarte);
        handKarte.addEventListener("click", handKarteLegen);
    }

    /*Funktion, um eine beliebige Karte zu ziehen*/
    function karteZiehen(): Karte {
        /*eine beliebige Nummer aus dem Array rasuziehen, um eine beliebige Karte zu gewinnen */
        let random: number = Math.floor(Math.random() * alle32Karten.length);
        console.log("random Number: " + random);
        let karte: Karte = alle32Karten[random];
        console.log(karte.kartenWert);

        alle32Karten.splice(random, 1);
        console.log(alle32Karten.length);
        return karte;
    }
}