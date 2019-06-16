/*
Aufgabe: 11
Name: Michel Orlik
Matrikel: 261370
Datum: 16.06.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe11 {
    export class Wels {
        x: number;
        y: number;
        dx: number;
        dy: number;
        draw(): void {
            crc.fillStyle = 'rgb(169,169,169)';
    crc.beginPath(); // Saugmund
    crc.moveTo(this.x + 50, this.y + 50);
    crc.lineTo(this.x + 80, this.y + 50);
    crc.stroke();
    crc.fill();
    crc.beginPath(); //dorsale Linie
    crc.moveTo(this.x + 80, this.y + 50);
    crc.quadraticCurveTo(this.x + 80, this.y + 40, this.x + 200, this.y + 50);
    crc.stroke();
    crc.fill();
    crc.beginPath(); //ventrale Linie
    crc.moveTo(this.x + 50, this.y + 50);
    crc.quadraticCurveTo(this.x + 50, this.y + 5, this.x + 200, this.y + 50);
    crc.stroke();
    crc.fill();
    crc.beginPath(); //Auge
    crc.fillStyle = 'rgb(0,0,0)';
    crc.arc(this.x+ 60, this.y + 40, 3, 0, 2 * Math.PI);
    crc.stroke();
    crc.fill();
    crc.fillStyle = 'rgb(169,169,169)';
    crc.beginPath(); //dorsale Flosse vorne
    crc.moveTo(this.x + 90, this.y + 28);
    crc.quadraticCurveTo(this.x + 100, this.y + 5, this.x + 120, this.y + 15);
    crc.stroke();
    crc.fill();
    crc.beginPath(); //dorsale Flosse hinten
    crc.moveTo(this.x + 120, this.y + 15);
    crc.lineTo(this.x + 115, this.y + 30);
    crc.stroke();
    crc.fill();
    crc.beginPath(); //pectorale Flosse vorne
    crc.moveTo(this.x + 90, this.y + 40);
    crc.quadraticCurveTo(this.x + 75, this.y + 50, this.x + 120, this.y + 50);
    crc.stroke();
    crc.fill();
    crc.beginPath(); //pectorale Flosse hinten
    crc.moveTo(this.x + 90, this.y + 40);
    crc.lineTo(this.x + 120, this.y + 50);
    crc.stroke();
    crc.fill();
    crc.beginPath(); //Geschlechtsdimorphismus oben
    crc.moveTo(this.x + 55, this.y + 45);
    crc.lineTo(this.x + 45, this.y + 40);
    crc.stroke();
    crc.beginPath(); //Geschlechtsdimorphismus mitte
    crc.moveTo(this.x + 57, this.y + 47);
    crc.lineTo(this.x + 40, this.y + 42);
    crc.stroke();
    crc.beginPath(); //Geschlechtsdimorphismus unten
    crc.moveTo(this.x + 55, this.y + 47);
    crc.lineTo(this.x + 40, this.y + 47);
    crc.stroke();
}
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
           
            if (this.x < -130) {
                this.x = 1300;
                this.y = 800 + (Math.random() * 200); 
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        
        }
    }
}