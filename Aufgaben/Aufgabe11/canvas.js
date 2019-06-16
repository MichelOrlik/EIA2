/*
Aufgabe: 11
Name: Michel Orlik
Matrikel: 261370
Datum: 16.06.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe11;
(function (Aufgabe11) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let welse = [];
    let aal = [];
    let froehlicherFisch = [];
    let aufsteigendeLuftblasen = [];
    let fps = 25;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc = canvas.getContext("2d");
        zeichnebackground();
        imageData = Aufgabe11.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 7; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height - 100;
            let dx = Math.random() * 5; //Langsame Fische
            let dy = -0.2; //Leicht nach oben schwimmend
            let fischi;
            fischi = new Aufgabe11.Froehlich();
            fischi.x = x;
            fischi.y = y;
            fischi.dx = dx;
            fischi.dy = dy;
            froehlicherFisch.push(fischi);
            fischi.draw();
        }
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 750; //Höhe
            let dx = Math.random() * -15;
            let dy = 0;
            let aali;
            aali = new Aufgabe11.Aal();
            aali.x = x;
            aali.y = y;
            aali.dx = dx;
            aali.dy = dy;
            aal.push(aali);
            aali.draw();
        }
        for (let i = 0; i < 7; i++) {
            let y = Math.random() * canvas.width;
            let x = Math.random() * canvas.height - 300;
            let dx = Math.random() * 10 - 10;
            let dy = 0;
            let wels;
            wels = new Aufgabe11.Wels();
            wels.x = x;
            wels.y = y;
            wels.dx = dx;
            wels.dy = dy;
            welse.push(wels);
            wels.draw();
        }
        for (let i = 0; i < 80; i++) {
            let x = Math.random() * 700;
            let y = Math.random() * 20;
            let r = Math.random() * 20;
            let dx = Math.random() * 0;
            let dy = Math.random() * 5 - 5;
            let luftblasli;
            luftblasli = new Aufgabe11.AufsteigendeLuftblasen();
            luftblasli.x = x;
            luftblasli.y = y;
            luftblasli.r = r;
            luftblasli.dx = dx;
            luftblasli.dy = dy;
            aufsteigendeLuftblasen.push(luftblasli);
            luftblasli.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe11.crc.clearRect(0, 0, canvas.width, canvas.height);
        Aufgabe11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < froehlicherFisch.length; i++) {
            froehlicherFisch[i].update();
        }
        for (let i = 0; i < aal.length; i++) {
            aal[i].update();
        }
        for (let i = 0; i < welse.length; i++) {
            welse[i].update();
        }
        for (let i = 0; i < aufsteigendeLuftblasen.length; i++) {
            aufsteigendeLuftblasen[i].update();
        }
    }
    function zeichnebackground() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 1000, 1800);
        Aufgabe11.crc.fillStyle = "#65a0f3";
        Aufgabe11.crc.strokeStyle = "#65a0f3";
        Aufgabe11.crc.fill(wasser);
        Aufgabe11.crc.stroke(wasser);
        let sand = new Path2D();
        sand.rect(0, 800, 1000, 1800);
        Aufgabe11.crc.fillStyle = "#e1c41d";
        Aufgabe11.crc.strokeStyle = "#e1c41d";
        Aufgabe11.crc.fill(sand);
        Aufgabe11.crc.stroke(sand);
        Aufgabe11.crc.fillStyle = 'brown';
        Aufgabe11.crc.strokeStyle = 'rgba(46, 204, 113, 1)';
        //Gras
        Aufgabe11.crc.beginPath(); // linker Stiel 
        Aufgabe11.crc.moveTo(200, 800);
        Aufgabe11.crc.quadraticCurveTo(180, 500, 161, 701);
        Aufgabe11.crc.stroke();
        Aufgabe11.crc.beginPath(); // linker Stiel 
        Aufgabe11.crc.moveTo(200, 800);
        Aufgabe11.crc.quadraticCurveTo(180, 500, 162, 702);
        Aufgabe11.crc.stroke();
        Aufgabe11.crc.beginPath(); // linker Stiel 
        Aufgabe11.crc.moveTo(200, 800);
        Aufgabe11.crc.quadraticCurveTo(180, 500, 163, 703);
        Aufgabe11.crc.stroke();
        Aufgabe11.crc.beginPath(); // linker Stiel 
        Aufgabe11.crc.moveTo(200, 800);
        Aufgabe11.crc.quadraticCurveTo(220, 400, 200, 785);
        Aufgabe11.crc.stroke();
        Aufgabe11.crc.beginPath(); // linker Stiel 
        Aufgabe11.crc.moveTo(200, 800);
        Aufgabe11.crc.quadraticCurveTo(220, 400, 201, 786);
        Aufgabe11.crc.stroke();
        Aufgabe11.crc.beginPath(); // linker Stiel 
        Aufgabe11.crc.moveTo(200, 800);
        Aufgabe11.crc.quadraticCurveTo(220, 400, 202, 787);
        Aufgabe11.crc.stroke();
        //Stein
        Aufgabe11.crc.beginPath();
        Aufgabe11.crc.fillStyle = 'brown';
        Aufgabe11.crc.arc(900, 850, 50, 0, 2 * Math.PI);
        Aufgabe11.crc.stroke();
        Aufgabe11.crc.strokeStyle = 'brown';
        Aufgabe11.crc.fill();
        //Stein2
        Aufgabe11.crc.beginPath();
        Aufgabe11.crc.fillStyle = 'brown';
        Aufgabe11.crc.arc(500, 800, 50, 0, 2 * Math.PI);
        Aufgabe11.crc.stroke();
        Aufgabe11.crc.strokeStyle = 'brown';
        Aufgabe11.crc.fill();
        //Stein3
        Aufgabe11.crc.beginPath();
        Aufgabe11.crc.fillStyle = 'brown';
        Aufgabe11.crc.arc(200, 900, 50, 0, 2 * Math.PI);
        Aufgabe11.crc.stroke();
        Aufgabe11.crc.strokeStyle = 'brown';
        Aufgabe11.crc.fill();
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=canvas.js.map