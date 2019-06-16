/*
Aufgabe: 11
Name: Michel Orlik
Matrikel: 261370
Datum: 16.06.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe11 {
    export class AufsteigendeLuftblasen {
        x: number;
        y: number;
        r: number;
        dx: number;
        dy: number;
        draw(): void {
            let luftblase: Path2D = new Path2D();
            luftblase.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc.beginPath();
            crc.fillStyle = 'rgb(135,206,255)';
            crc.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            crc.stroke();
            crc.strokeStyle = 'rgb(0,0,0)';
            crc.fill();
        }
        update(): void {
            this.move();
            this.draw();
        }

        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 10) {
                this.x = 170 + (Math.random() * 50);
                this.y = 650;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }}