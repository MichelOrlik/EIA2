/* Gedankengang der Funktion als Kommentar */
/* Bei Aufgabe 0 muss, laut den Geboten, noch kein Kommentar hier her. */
   function helloworld() {
    var person: string = prompt("Enter name for free Shrek 2 DVD", "Your name"); /* So wird ein prompt erstellt, wie ich aus w3schools erfahren habe */
    var hola: string = person + "! Was geht ab?"; /* Erstelle eine neue Variabel die den Satz enthält */
    console.log(hola); /* Aus Aufgabe: Noch auf der Konsole anzeigen */
    document.getElementById("Text").innerHTML = hola; /* Erstelle im HTML Dokument den davor definierten Satz, welcher als Variabel "hola" erstellt wurde */
    }
