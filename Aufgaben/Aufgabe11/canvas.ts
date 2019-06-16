/*
Aufgabe: 11
Name: Michel Orlik
Matrikel: 261370
Datum: 16.06.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe11 {

    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let welse: Wels[] = [];
    let aal: Aal[] = [];
    let froehlicherFisch: Froehlich[] = [];
    let aufsteigendeLuftblasen: AufsteigendeLuftblasen[] = [];
    let fps: number = 25;
    let imageData: ImageData;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        zeichnebackground();
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i: number = 0; i < 7; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height - 100;
            let dx: number = Math.random() * 5; //Langsame Fische
            let dy: number = -0.2; //Leicht nach oben schwimmend
            let fischi: Froehlich;
            fischi = new Aufgabe11.Froehlich();
            fischi.x = x;
            fischi.y = y;
            fischi.dx = dx;
            fischi.dy = dy;
            froehlicherFisch.push(fischi);
            fischi.draw();
        }

        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * 750; //Höhe
            let dx: number = Math.random() * -15;
            let dy: number = 0;
            let aali: Aal;
            aali = new Aufgabe11.Aal();
            aali.x = x;
            aali.y = y;
            aali.dx = dx;
            aali.dy = dy;
            aal.push(aali);
            aali.draw();
        }

        for (let i: number = 0; i < 7; i++) {
            let y: number = Math.random() * canvas.width;
            let x: number = Math.random() * canvas.height - 300;
            let dx: number = Math.random() * 10 - 10;
            let dy: number = 0;
            let wels: Wels;
            wels = new Aufgabe11.Wels();
            wels.x = x;
            wels.y = y;
            wels.dx = dx;
            wels.dy = dy;
            welse.push(wels);
            wels.draw();
        }


        for (let i: number = 0; i < 80; i++) {
            let x: number = Math.random() * 700;
            let y: number = Math.random() * 20;
            let r: number = Math.random() * 20;
            let dx: number = Math.random() * 0;
            let dy: number = Math.random() * 5 - 5;
            let luftblasli: AufsteigendeLuftblasen;
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

    
    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < froehlicherFisch.length; i++) {
            froehlicherFisch[i].update();
        }
        for (let i: number = 0; i < aal.length; i++) {
            aal[i].update();
        }
        for (let i: number = 0; i < welse.length; i++) {
            welse[i].update();
        }
        for (let i: number = 0; i < aufsteigendeLuftblasen.length; i++) {
            aufsteigendeLuftblasen[i].update();
        }
    }

    function zeichnebackground(): void {
        let wasser = new Path2D();
        wasser.rect(0, 0, 1000, 1800);
        crc.fillStyle = "#65a0f3";
        crc.strokeStyle = "#65a0f3";
        crc.fill(wasser);
        crc.stroke(wasser);
        let sand = new Path2D();
        sand.rect(0, 800, 1000, 1800);
        crc.fillStyle = "#e1c41d";
        crc.strokeStyle = "#e1c41d";
        crc.fill(sand);
        crc.stroke(sand);
        crc.fillStyle = 'brown';
        crc.strokeStyle = 'rgba(46, 204, 113, 1)';
        //Gras
    crc.beginPath(); // linker Stiel 
    crc.moveTo(200, 800);
    crc.quadraticCurveTo(180,  500,  161,  701);
    crc.stroke();
    crc.beginPath(); // linker Stiel 
    crc.moveTo(200, 800);
    crc.quadraticCurveTo(180,  500,  162,  702);
    crc.stroke();
    crc.beginPath(); // linker Stiel 
    crc.moveTo(200, 800);
    crc.quadraticCurveTo(180,  500,  163,  703);
    crc.stroke();
    crc.beginPath(); // linker Stiel 
    crc.moveTo(200, 800);
    crc.quadraticCurveTo(220,  400,  200,  785);
    crc.stroke();
    crc.beginPath(); // linker Stiel 
    crc.moveTo(200, 800);
    crc.quadraticCurveTo(220,  400,  201,  786);
    crc.stroke();
    crc.beginPath(); // linker Stiel 
    crc.moveTo(200, 800);
    crc.quadraticCurveTo(220,  400,  202,  787);
    crc.stroke();
    //Stein
    crc.beginPath();
    crc.fillStyle = 'brown';
    crc.arc(900, 850, 50, 0, 2 * Math.PI);
    crc.stroke();
    crc.strokeStyle = 'brown';
    crc.fill();
    //Stein2
    crc.beginPath();
    crc.fillStyle = 'brown';
    crc.arc(500, 800, 50, 0, 2 * Math.PI);
    crc.stroke();
    crc.strokeStyle = 'brown';
    crc.fill();
    //Stein3
    crc.beginPath();
    crc.fillStyle = 'brown';
    crc.arc(200, 900, 50, 0, 2 * Math.PI);
    crc.stroke();
    crc.strokeStyle = 'brown';
    crc.fill();

}}
