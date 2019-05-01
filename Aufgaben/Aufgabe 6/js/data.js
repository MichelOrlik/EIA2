/* Aufgabe 6 - Erster Node-Server
Name: Michel Orlik
Matrikel: 261370
Datum: 05.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var Aufgabe6;
(function (Aufgabe6) {
    // Beispieldaten auf Basis der oben angegebenen Strukturen
    Aufgabe6.data = {
        "eis": [
            { name: "Schokolade", preis: 1.4, anzahl: 0 },
            { name: "Vanille", preis: 1.4, anzahl: 0 },
            { name: "Stracciatella", preis: 1.4, anzahl: 0 },
            { name: "Haselnuss", preis: 1.4, anzahl: 0 },
            { name: "Walnuss", preis: 1.4, anzahl: 0 },
            { name: "Kokos", preis: 1.4, anzahl: 0 },
            { name: "Dunkle Schokolade", preis: 1.4, anzahl: 0 },
            { name: "Cookies", preis: 1.4, anzahl: 0 },
            { name: "Zimt", preis: 1.4, anzahl: 0 },
            { name: "Joghurt", preis: 1.4, anzahl: 0 },
            { name: "Kaffee", preis: 1.4, anzahl: 0 },
            { name: "Erdbeere", preis: 1.4, anzahl: 0 },
            { name: "Banane", preis: 1.4, anzahl: 0 },
            { name: "Zitrone", preis: 1.4, anzahl: 0 },
            { name: "Himbeere", preis: 1.4, anzahl: 0 },
            { name: "Kirsche", preis: 1.4, anzahl: 0 },
            { name: "Melone", preis: 1.4, anzahl: 0 }
        ],
        "zutat": [
            { name: "Schlagsahne", preis: 1, anzahl: 0 },
            { name: "Schokosoße", preis: 1, anzahl: 0 },
            { name: "Erdbeersoße", preis: 1, anzahl: 0 },
            { name: "Schokostreusel", preis: 1, anzahl: 0 },
            { name: "Bunte Zuckerstreusel", preis: 1, anzahl: 0 },
            { name: "Schokolinsen", preis: 1, anzahl: 0 },
            { name: "Waffel aufs Eis", preis: 1, anzahl: 0 }
        ],
        "waffelBecher": [
            { name: "Waffel", preis: 0, anzahl: 0 },
            { name: "Becher", preis: 0, anzahl: 0 }
        ],
        "logistik": [
            { name: "Standardlieferung", preis: 0, anzahl: 0 },
            { name: "Fahrrad-Express (+ 4,00 Euro)", preis: 4, anzahl: 0 },
            { name: "Taxi-Express (+ 9,81 Euro)", preis: 9.81, anzahl: 0 }
        ]
    };
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=data.js.map