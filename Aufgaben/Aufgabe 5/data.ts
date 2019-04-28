/*
Aufgabe: 5 - Eisdealer reloaded
Name: Michel Orlik
Matrikel: 261370
Datum: 28.04.2018
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe5 {
    export interface Eis {
        name: string;
        price: number;
    }
    export let eisElemente: { [key: string]: Eis[] } = {
        "select": [
            { name: "Waffel", price: 0.30 },
            { name: "Schwarze Waffel", price: 0.50 },
            { name: "Papp-Becher", price: 0.30 },
            { name: "Plastikbecher", price: 13.00 }
        ],
        "stepper": [
            { name: "Schokolade", price: 1.4 },
            { name: "Vanille", price: 1.4 },
            { name: "Erdbeere", price: 1.4 },
            { name: "Nougat", price: 1.4 },
            { name: "Pistazie", price: 1.4 },
            { name: "Minze", price: 1.4 }
        ],
        "checkbox": [
            { name: "Schokosoße", price: 0.70 },
            { name: "Vanillesoße", price: 0.70 },
            { name: "Erdbeersoße", price: 0.70 }

        ],
        "checkbox2": [
            { name: "Schokostückchen", price: 0.80 },
            { name: "getrocknete Erdbeeren", price: 0.80 },
            { name: "getrocknete Himbeeren", price: 0.80 },
            { name: "Oreo", price: 0.80 }

        ]
    };

}

