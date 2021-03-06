/* Aufgabe 6 - Erster Node-Server
Name: Michel Orlik
Matrikel: 261370
Datum: 02.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */

namespace Aufgabe6 {
    export interface HeteroPredefined {
        name: string;
        preis: number;
        anzahl: number;
    }
    export interface HomogenousArray {
        [key: string]: HeteroPredefined[];
    }
    export let data: HomogenousArray
        = {
        "Eissorten": [
            { name: "Cosmic-Splash", preis: 2, anzahl: 0 },
            { name: "Cosmic-Wave", preis: 2, anzahl: 0 },
            { name: "Seven-Lightyears", preis: 2, anzahl: 0 },
            { name: "Galactical-Splash", preis: 2, anzahl: 0 },
            { name: "Eternal-Splash", preis: 2, anzahl: 0 },
            { name: "Captain-Kirk", preis: 2, anzahl: 0 },
            { name: "Orbital-Order", preis: 2, anzahl: 0 },
            { name: "Space-Mission", preis: 2, anzahl: 0 },
            { name: "Deathstar-Explosion", preis: 2, anzahl: 0 },
            { name: "Vaders-Favorite", preis: 2, anzahl: 0 },
            { name: "Skyrider", preis: 2, anzahl: 0 },
            { name: "Favorite-Yoda-Sort", preis: 2, anzahl: 0 }

        ],

        "zutat": [
            { name: "Mooncrystal", preis: 4, anzahl: 0 },
            { name: "Star-Flakes", preis: 4, anzahl: 0 },
            { name: "Sparkle", preis: 4, anzahl: 0 },
            { name: "Moonlight-Sauce", preis: 4, anzahl: 0 }
        ],

        "waffelBecher": [
            { name: "Waffel", preis: 0, anzahl: 0 },
            { name: "Becher", preis: 0, anzahl: 0 }
        ],

        "logistik": [
            { name: "Spaceshuttle", preis: 0, anzahl: 0 },
            { name: "Warp", preis: 2, anzahl: 0 },
            { name: "Wurmloch", preis: 5, anzahl: 0 }
        ]
    };

}
