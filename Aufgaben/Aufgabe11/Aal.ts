/*
Aufgabe: 11
Name: Michel Orlik
Matrikel: 261370
Datum: 16.06.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe11 {
    export class Aal {
        x: number;
        y: number;
        dx: number;
        dy: number;
        draw(): void {
            crc.fillStyle = 'rgb(72,61,139)';
            crc.beginPath(); // ventraler Linie
            crc.moveTo(this.x + 20, this.y + 20);
            crc.quadraticCurveTo(this.x + 20, this.y + 35, this.x + 250, this.y + 20);
            crc.stroke();
            crc.fill();
            crc.beginPath(); // dorsale Linie
            crc.moveTo(this.x + 20, this.y + 20);
            crc.quadraticCurveTo(this.x + 20, this.y + 5, this.x + 250, this.y + 20);
            crc.stroke();
            crc.fill();
            crc.beginPath(); //Auge
            crc.fillStyle = 'rgb(0,0,0)';
            crc.arc(this.x + 30, this.y + 19, 2, 0, 2 * Math.PI);
            crc.stroke();
            crc.fill();
            crc.fillStyle = 'rgb(95,158,160)';
            crc.beginPath(); // dorsale Flosse
            crc.moveTo(this.x + 50, this.y + 12.5);
            crc.quadraticCurveTo(this.x + 100, this.y + 0, this.x + 270, this.y + 20);
            crc.stroke();
            crc.fill();
            crc.beginPath(); // ventrale Flosse
            crc.moveTo(this.x + 50, this.y + 27);
            crc.quadraticCurveTo(this.x + 100, this.y + 40, this.x + 270, this.y + 20);
            crc.stroke();
            crc.fill();
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {

            if (this.x < -150) {
                this.x = 1200;
                this.y = Math.random() * 800;
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();

        }
    }
}