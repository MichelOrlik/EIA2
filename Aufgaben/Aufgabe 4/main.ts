window.addEventListener("load", init);
let summe: number = 0;
let summeAlsString: string = "0";
let anzahlDerKugeln1: number = 0;
let anzahlDerKugeln2: number = 0;
let anzahlDerKugeln3: number = 0;
let eisSorte1: string;
let eisSorte2: string;
let eisSorte3: string;
let lieferKosten: number = 0;
let anzahlDerZutaten: number = 0;
let waffelOderBecher: string = undefined;
let shipping: string = undefined;
let valName: string = undefined;
let valStreet: string = undefined;
let valTown: string = undefined;

function init(_event: Event): void {
    let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

    for (let i: number = 0; i < fieldsets.length; i++) {
        let fieldset: HTMLElement = fieldsets[i];
        fieldset.addEventListener("change", handleChange);
    }

    let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
    button.addEventListener("click", checkWhetherComplete);
}
function handleChange(_event: Event): void {
    console.log(_event);  

    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    console.log("Changed " + target.name + " to " + target.value);

    if (this.id == "zusatz") {
        console.log("Changed " + target.name + " to " + target.checked);

        if (target.checked == true) {
            document.getElementById(target.name).innerHTML = target.name;
            anzahlDerZutaten += 2.40;
        }

        if (target.checked == false) {
            document.getElementById(target.name).innerHTML = "";
            anzahlDerZutaten -= 2.40;
        }

    }

    else if (target.name == "anzahlSorte1") {
        anzahlDerKugeln1 = parseInt(target.value);
        console.log("1", anzahlDerKugeln1);
    }

    else if (target.name == "anzahlSorte2") {
        anzahlDerKugeln2 = parseInt(target.value);
        console.log("2", anzahlDerKugeln2);
    }

    else if (target.name == "anzahlSorte3") {
        anzahlDerKugeln3 = parseInt(target.value);
        console.log("3", anzahlDerKugeln3);
    }

    else if (target.name == "Eissorte1") {
        eisSorte1 = target.value;
        console.log("Sorte 1", eisSorte1);
    }

    else if (target.name == "Eissorte2") {
        eisSorte2 = target.value;
        console.log("Sorte 2", eisSorte2);
    }

    else if (target.name == "Eissorte3") {
        eisSorte3 = target.value;
        console.log("Sorte 3", eisSorte3);
    }

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

    else if (target.name == "WaffelOderBecher") {
        waffelOderBecher = target.value;
        document.getElementById(target.name).innerHTML = waffelOderBecher;
    }

    else if (target.name == "Nachname") {
        valName = target.value;
        document.getElementById(target.name).innerHTML = valName;
    }

    else if (target.name == "E-Mail") {
        valStreet = target.value;
        document.getElementById(target.name).innerHTML = valStreet;
    }

    else if (target.name == "Postleitzahl") {
        valTown = target.value;
        document.getElementById(target.name).innerHTML = valTown;
    }

    else if (target.name == "Stadt") {
        valTown = target.value;
        document.getElementById(target.name).innerHTML = valTown;
    }
    else if (target.name == "Nummer") {
        valTown = target.value;
        document.getElementById(target.name).innerHTML = valTown;
    }

else if (target.name == "Versichertennummer") {
    valTown = target.value;
    document.getElementById(target.name).innerHTML = valTown;
}
    else {
        document.getElementById(target.name).innerHTML = target.value;
    }

    summe = 4.2 * (anzahlDerKugeln1 + anzahlDerKugeln2 + anzahlDerKugeln3) + lieferKosten + anzahlDerZutaten;
    summeAlsString = summe.toFixed(2);

    console.log(summeAlsString);
    document.getElementById("sumSumme").innerHTML = "" + summeAlsString;

    if (anzahlDerKugeln1 == 0) {
        document.getElementById("eisZusammen1").innerHTML = "";
    }

    else if (anzahlDerKugeln2 == 1) {
        document.getElementById("eisZusammen1").innerHTML = anzahlDerKugeln1 + " Kugel(n) " + eisSorte1;
    }

    else if (anzahlDerKugeln1 > 1) {
        document.getElementById("eisZusammen1").innerHTML = anzahlDerKugeln1 + " Kugel(n) " + eisSorte1;
    }

    if (anzahlDerKugeln2 == 0) {
        document.getElementById("eisZusammen2").innerHTML = "";
    }

    else if (anzahlDerKugeln2 == 1) {
        document.getElementById("eisZusammen2").innerHTML = anzahlDerKugeln2 + " Kugel(n) " + eisSorte2;
    }

    else if (anzahlDerKugeln2 > 1) {
        document.getElementById("eisZusammen2").innerHTML = anzahlDerKugeln2 + " Kugel(n) " + eisSorte2;
    }

    if (anzahlDerKugeln3 == 0) {
        document.getElementById("eisZusammen3").innerHTML = "";
    }

    else if (anzahlDerKugeln3 == 1) {
        document.getElementById("eisZusammen3").innerHTML = anzahlDerKugeln3 + " Kugel(n) " + eisSorte3;
    }

    else if (anzahlDerKugeln3 > 1) {
        document.getElementById("eisZusammen3").innerHTML = anzahlDerKugeln3 + " Kugel(n) " + eisSorte3;
    }


}

function checkWhetherComplete(): void {
    if (anzahlDerKugeln1 + anzahlDerKugeln2 + anzahlDerKugeln3 < 1) {
        alert("Bitte mindestens eine Kugel bestellen.");
    }

    else if (anzahlDerKugeln1 > 0 && (eisSorte1 == "[Eissorte auswählen!]" || eisSorte1 == undefined)) {
        alert("Eissorte auswählen.");
    }

    else if (anzahlDerKugeln2 > 0 && (eisSorte2 == "[Eissorte auswählen!]" || eisSorte2 == undefined)) {
        alert("Eissorte auswählen.");
    }

    else if (anzahlDerKugeln3 > 0 && (eisSorte3 == "[Eissorte auswählen!]" || eisSorte3 == undefined)) {
        alert("Eissorte auswählen.");
    }

    else if (waffelOderBecher == undefined) {
        alert("Waffel oder Becher?");
    }

    else if (shipping == undefined) {
        alert("Wie möchten Sie Ihr Eis geliefert bekommen?");
    }

    else if (valName == undefined) {
        alert("Geben Sie Ihren Namen ein.");
    }

    else if (valStreet == undefined) {
        alert("Geben Sie die Straße und Hausnummer ein.");
    }

    else if (valTown == undefined) {
        alert("Wählen Sie einen Ort aus.");
    }

    else {
        alert("Alle Eingaben sind vollständig.");
    }
}
