/*
Aufgabe: 10 - Aquarium
Name: Michel Orlik
Matrikel: 261370
Datum: 03.06.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
let canvas = document.querySelector('canvas');
canvas.width = 1000;
canvas.height = 1000;
let c = canvas.getContext('2d');
document.addEventListener("DOMContentLoaded", init);
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    c = canvas.getContext("2d");
    zeichnebackground();
    for (let i = 0; i < 45; i++) {
        let x = 500 + Math.random() * 300 ;
        let y = Math.random() * canvas.height - 200;
        zeichneluftblase(x, y);
    }
    for (let i = 0; i < 4; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height - 300;
        zeichnefischFroehlich(x, y);
    }
    for (let i = 0; i < 3; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height - 300;
        zeichneaal(x, y);
    }
    for (let i = 0; i < 2; i++) {
        let x = Math.random() * canvas.width;
        let y = 750;
        zeichnewelsm(x, y);
    }
    for (let i = 0; i < 2; i++) {
        let x = Math.random() * canvas.width;
        let y = 750;
        zeichnewelsw(x, y);
    }
    for (let i = 0; i < 8; i++) {
        let x = Math.random() * canvas.width;
        let y = 750;
        zeichnegras(x, y);
    }
    for (let i = 0; i < 2; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height - 200;
        zeichnefischNeutral(x, y);
    }
    for (let i = 0; i < 2; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        zeichnefischTraurig(x, y);
    }
    for (let i = 0; i < 3; i++) {
        let x = Math.random() * canvas.width;
        let y = 800;
        zeichnestein(x, y);
    }
}
function zeichnebackground() {
    let wasser = new Path2D();
    wasser.rect(0, 0, 1000, canvas.width);
    c.fillStyle = "#65a0f3";
    c.strokeStyle = "#65a0f3";
    c.fill(wasser);
    c.stroke(wasser);
    let sand = new Path2D();
    sand.rect(0, 800, 1000, canvas.width);
    c.fillStyle = "#e1c41d";
    c.strokeStyle = "#e1c41d";
    c.fill(sand);
    c.stroke(sand);
}
function zeichnestein(_x, _y) {
    c.fillStyle = 'brown';
    c.beginPath(); //rechte Kante
    c.moveTo(_x + 100, _y + 100);
    c.quadraticCurveTo(_x + 150, _y + 100, _x + 100, _y + 60);
    c.stroke();
    c.fill();
    c.fillStyle = 'brown';
    c.beginPath(); //linke Kante
    c.moveTo(_x + 100, _y + 60);
    c.quadraticCurveTo(_x + 0, _y + 5, _x + 100, _y + 100);
    c.stroke();
    c.fill();
}
function zeichnewelsm(_x, _y) {
    c.fillStyle = 'rgb(169,169,169)';
    c.beginPath(); // Saugmund
    c.moveTo(_x + 50, _y + 50);
    c.lineTo(_x + 80, _y + 50);
    c.stroke();
    c.fill();
    c.beginPath(); //dorsale Linie
    c.moveTo(_x + 80, _y + 50);
    c.quadraticCurveTo(_x + 80, _y + 40, _x + 200, _y + 50);
    c.stroke();
    c.fill();
    c.beginPath(); //ventrale Linie
    c.moveTo(_x + 50, _y + 50);
    c.quadraticCurveTo(_x + 50, _y + 5, _x + 200, _y + 50);
    c.stroke();
    c.fill();
    c.beginPath(); //Auge
    c.fillStyle = 'rgb(0,0,0)';
    c.arc(_x + 60, _y + 40, 3, 0, 2 * Math.PI);
    c.stroke();
    c.fill();
    c.fillStyle = 'rgb(169,169,169)';
    c.beginPath(); //dorsale Flosse vorne
    c.moveTo(_x + 90, _y + 28);
    c.quadraticCurveTo(_x + 100, _y + 5, _x + 120, _y + 15);
    c.stroke();
    c.fill();
    c.beginPath(); //dorsale Flosse hinten
    c.moveTo(_x + 120, _y + 15);
    c.lineTo(_x + 115, _y + 30);
    c.stroke();
    c.fill();
    c.beginPath(); //pectorale Flosse vorne
    c.moveTo(_x + 90, _y + 40);
    c.quadraticCurveTo(_x + 75, _y + 50, _x + 120, _y + 50);
    c.stroke();
    c.fill();
    c.beginPath(); //pectorale Flosse hinten
    c.moveTo(_x + 90, _y + 40);
    c.lineTo(_x + 120, _y + 50);
    c.stroke();
    c.fill();
    c.beginPath(); //Geschlechtsdimorphismus oben
    c.moveTo(_x + 55, _y + 45);
    c.lineTo(_x + 45, _y + 40);
    c.stroke();
    c.beginPath(); //Geschlechtsdimorphismus mitte
    c.moveTo(_x + 57, _y + 47);
    c.lineTo(_x + 40, _y + 42);
    c.stroke();
    c.beginPath(); //Geschlechtsdimorphismus unten
    c.moveTo(_x + 55, _y + 47);
    c.lineTo(_x + 40, _y + 47);
    c.stroke();
}
function zeichnewelsw(_x, _y) {
    c.fillStyle = 'rgb(169,169,169)';
    c.beginPath(); // Saugmund
    c.moveTo(_x + 50, _y + 50);
    c.lineTo(_x + 80, _y + 50);
    c.stroke();
    c.fill();
    c.beginPath(); //dorsale Linie
    c.moveTo(_x + 80, _y + 50);
    c.quadraticCurveTo(_x + 80, _y + 40, _x + 200, _y + 50);
    c.stroke();
    c.fill();
    c.beginPath(); //ventrale Linie
    c.moveTo(_x + 50, _y + 50);
    c.quadraticCurveTo(_x + 50, _y + 5, _x + 200, _y + 50);
    c.stroke();
    c.fill();
    c.beginPath(); //Auge
    c.fillStyle = 'rgb(0,0,0)';
    c.arc(_x + 60, _y + 40, 3, 0, 2 * Math.PI);
    c.stroke();
    c.fill();
    c.fillStyle = 'rgb(169,169,169)';
    c.beginPath(); //dorsale Flosse vorne
    c.moveTo(_x + 90, _y + 28);
    c.quadraticCurveTo(_x + 100, _y + 5, _x + 120, _y + 15);
    c.stroke();
    c.fill();
    c.beginPath(); //dorsale Flosse hinten
    c.moveTo(_x + 120, _y + 15);
    c.lineTo(_x + 115, _y + 30);
    c.stroke();
    c.fill();
    c.beginPath(); //pectorale Flosse vorne
    c.moveTo(_x + 90, _y + 40);
    c.quadraticCurveTo(_x + 75, _y + 50, _x + 120, _y + 50);
    c.stroke();
    c.fill();
    c.beginPath(); //pectorale Flosse hinten
    c.moveTo(_x + 90, _y + 40);
    c.lineTo(_x + 120, _y + 50);
    c.stroke();
    c.fill();
}
function zeichneaal(_x, _y) {
    c.fillStyle = 'rgb(72,61,139)';
    c.beginPath(); // ventraler Linie
    c.moveTo(_x + 20, _y + 20);
    c.quadraticCurveTo(_x + 20, _y + 35, _x + 250, _y + 20);
    c.stroke();
    c.fill();
    c.beginPath(); // dorsale Linie
    c.moveTo(_x + 20, _y + 20);
    c.quadraticCurveTo(_x + 20, _y + 5, _x + 250, _y + 20);
    c.stroke();
    c.fill();
    c.beginPath(); //Auge
    c.fillStyle = 'rgb(0,0,0)';
    c.arc(_x + 30, _y + 19, 2, 0, 2 * Math.PI);
    c.stroke();
    c.fill();
    c.fillStyle = 'rgb(95,158,160)';
    c.beginPath(); // dorsale Flosse
    c.moveTo(_x + 50, _y + 12.5);
    c.quadraticCurveTo(_x + 100, _y + 0, _x + 270, _y + 20);
    c.stroke();
    c.fill();
    c.beginPath(); // ventrale Flosse
    c.moveTo(_x + 50, _y + 27);
    c.quadraticCurveTo(_x + 100, _y + 40, _x + 270, _y + 20);
    c.stroke();
    c.fill();
}
function zeichnefischFroehlich(_x, _y) {
    c.fillStyle = 'rgba(235, 151, 78, 1)';
    c.beginPath(); // Kaudale Flosse
    c.moveTo(_x + 50, _y + 50);
    c.lineTo(_x + 50, _y + 80);
    c.stroke();
    c.beginPath(); // Kaudale Flosse oben
    c.moveTo(_x + 50, _y + 50);
    c.quadraticCurveTo(_x + 70, _y + 70, _x + 80, _y + 60);
    c.stroke();
    c.beginPath(); // Kaudale Flosse unten
    c.moveTo(_x + 50, _y + 80);
    c.quadraticCurveTo(_x + 70, _y + 60, _x + 80, _y + 70);
    c.stroke();
    c.beginPath(); // ventrale Linie
    c.moveTo(_x + 80, _y + 70);
    c.quadraticCurveTo(_x + 150, _y + 100, _x + 200, _y + 70);
    c.stroke();
    c.fill();
    c.beginPath(); // dorsale Linie
    c.moveTo(_x + 80, _y + 60);
    c.quadraticCurveTo(_x + 150, _y + 30, _x + 200, _y + 70);
    c.stroke();
    c.fill();
    c.beginPath(); //Auge
    c.fillStyle = 'rgb(0,0,0)';
    c.arc(_x + 180, _y + 65, 3, 0, 4 * Math.PI);
    c.stroke();
    c.fill();
    c.beginPath(); // dorsale Linie
    c.moveTo(_x + 190, _y + 75);
    c.quadraticCurveTo(_x + 180, _y + 80, _x + 170, _y + 75); //75 neutral 70 traurig 80 fröhlich
    c.stroke();
    c.beginPath(); // dorsale Linie
    c.moveTo(_x + 80, _y + 60);
    c.quadraticCurveTo(_x + 150, _y + 30, _x + 200, _y + 70);
    c.stroke();
}
function zeichnefischNeutral(_x, _y) {
    c.fillStyle = 'rgba(235, 151, 78, 1)';
    c.strokeStyle = 'rgb(0,0,0)';
    c.beginPath(); // Kaudale Flosse
    c.moveTo(_x + 50, _y + 50);
    c.lineTo(_x + 50, _y + 80);
    c.stroke();
    c.fill();
    c.beginPath(); // Kaudale Flosse oben
    c.moveTo(_x + 50, _y + 50);
    c.quadraticCurveTo(_x + 70, _y + 70, _x + 80, _y + 60);
    c.stroke();
    c.beginPath(); // Kaudale Flosse unten
    c.moveTo(_x + 50, _y + 80);
    c.quadraticCurveTo(_x + 70, _y + 60, _x + 80, _y + 70);
    c.stroke();
    c.beginPath(); // ventrale Linie
    c.moveTo(_x + 80, _y + 70);
    c.quadraticCurveTo(_x + 150, _y + 100, _x + 200, _y + 70);
    c.stroke();
    c.fill();
    c.beginPath(); // dorsale Linie
    c.moveTo(_x + 80, _y + 60);
    c.quadraticCurveTo(_x + 150, _y + 30, _x + 200, _y + 70);
    c.stroke();
    c.beginPath(); //Auge
    c.fillStyle = 'rgb(0,0,0)';
    c.arc(_x + 180, _y + 65, 3, 0, 4 * Math.PI);
    c.stroke();
    c.fill();
    c.beginPath(); // dorsale Linie
    c.moveTo(_x + 190, _y + 75);
    c.quadraticCurveTo(_x + 180, _y + 75, _x + 170, _y + 75); //75 neutral 70 traurig 80 fröhlich
    c.stroke();
    c.beginPath(); // dorsale Linie
    c.moveTo(_x + 80, _y + 60);
    c.quadraticCurveTo(_x + 150, _y + 30, _x + 200, _y + 70);
    c.stroke();
}
function zeichnefischTraurig(_x, _y) {
    c.beginPath(); // Kaudale Flosse
    c.moveTo(_x + 50, _y + 50);
    c.lineTo(_x + 50, _y + 80);
    c.stroke();
    c.beginPath(); // Kaudale Flosse oben
    c.moveTo(_x + 50, _y + 50);
    c.quadraticCurveTo(_x + 70, _y + 70, _x + 80, _y + 60);
    c.stroke();
    c.beginPath(); // Kaudale Flosse unten
    c.moveTo(_x + 50, _y + 80);
    c.quadraticCurveTo(_x + 70, _y + 60, _x + 80, _y + 70);
    c.stroke();
    c.beginPath(); // ventrale Linie
    c.moveTo(_x + 80, _y + 70);
    c.quadraticCurveTo(_x + 150, _y + 100, _x + 200, _y + 70);
    c.stroke();
    c.beginPath(); // dorsale Linie
    c.moveTo(_x + 80, _y + 60);
    c.quadraticCurveTo(_x + 150, _y + 30, _x + 200, _y + 70);
    c.stroke();
    c.beginPath(); //Auge
    c.fillStyle = 'rgb(0,0,0)';
    c.arc(_x + 180, _y + 65, 3, 0, 4 * Math.PI);
    c.stroke();
    c.fill();
    c.beginPath(); // dorsale Linie
    c.moveTo(_x + 190, _y + 75);
    c.quadraticCurveTo(_x + 180, _y + 70, _x + 170, _y + 75); //75 neutral 70 traurig 80 fröhlich
    c.stroke();
    c.beginPath(); // dorsale Linie
    c.moveTo(_x + 80, _y + 60);
    c.quadraticCurveTo(_x + 150, _y + 30, _x + 200, _y + 70);
    c.stroke();
}
function zeichnegras(_x, _y) {
    c.strokeStyle = 'rgba(46, 204, 113, 1)';
    c.beginPath(); // linker Stiel 
    c.moveTo(_x + 60, _y + 60);
    c.quadraticCurveTo(_x + 50, _y + 20, _x + 20, _y + 20);
    c.stroke();
    c.beginPath(); // zweiter von links - Stiel 
    c.moveTo(_x + 60, _y + 60);
    c.quadraticCurveTo(_x + 60, _y + 30, _x + 50, _y + 20);
    c.stroke();
    c.beginPath(); // dritter von links - Stiel 
    c.moveTo(_x + 60, _y + 60);
    c.quadraticCurveTo(_x + 70, _y + 0, _x + 80, _y + 20);
    c.stroke();
    c.beginPath(); // rechter Stiel 
    c.moveTo(_x + 60, _y + 60);
    c.quadraticCurveTo(_x + 90, _y + 0, _x + 90, _y + 40);
    c.stroke();
    c.beginPath(); // linker Stiel 
    c.moveTo(_x + 61, _y + 60);
    c.quadraticCurveTo(_x + 51, _y + 20, _x + 21, _y + 20);
    c.stroke();
    c.beginPath(); // zweiter von links - Stiel 
    c.moveTo(_x + 61, _y + 60);
    c.quadraticCurveTo(_x + 61, _y + 30, _x + 51, _y + 20);
    c.stroke();
    c.beginPath(); // dritter von links - Stiel 
    c.moveTo(_x + 61, _y + 60);
    c.quadraticCurveTo(_x + 71, _y + 0, _x + 81, _y + 20);
    c.stroke();
    c.beginPath(); // rechter Stiel 
    c.moveTo(_x + 61, _y + 60);
    c.quadraticCurveTo(_x + 91, _y + 0, _x + 91, _y + 40);
    c.stroke();
    c.beginPath(); // linker Stiel 
    c.moveTo(_x + 62, _y + 60);
    c.quadraticCurveTo(_x + 52, _y + 20, _x + 22, _y + 20);
    c.stroke();
    c.beginPath(); // zweiter von links - Stiel 
    c.moveTo(_x + 62, _y + 60);
    c.quadraticCurveTo(_x + 62, _y + 30, _x + 52, _y + 20);
    c.stroke();
    c.beginPath(); // dritter von links - Stiel 
    c.moveTo(_x + 62, _y + 60);
    c.quadraticCurveTo(_x + 72, _y + 0, _x + 82, _y + 20);
    c.stroke();
    c.beginPath(); // rechter Stiel 
    c.moveTo(_x + 62, _y + 60);
    c.quadraticCurveTo(_x + 92, _y + 0, _x + 92, _y + 40);
    c.stroke();
}
function zeichneluftblase(_x, _y) {
    c.beginPath();
    c.fillStyle = 'rgb(135,206,255)';
    c.arc(_x, _y, 6, 0, 2 * Math.PI);
    c.stroke();
    c.strokeStyle = 'rgb(0,0,0)';
    c.fill();
}
//# sourceMappingURL=canvas.js.map
