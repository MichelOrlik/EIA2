/*
Aufgabe: Endabgabe
Name: Orlik, Michel
Matrikel: 261370
Datum: 28.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace HabosHaihappen {
	export class Stern extends BewegendeObjekte {

		constructor() {
			super();
                  this.x = Math.random() * canvas.width + 300;
			this.y = Math.random() * canvas.height;
			this.dx = Math.random() * 4 - 4;
                  this.dy = 0;
                  this.type = "Stern"


		}
		draw(): void {
            crc.beginPath();
            crc.moveTo(this.x - 5, this.y + 0);
            crc.lineTo(this.x + 45, this.y + 0);
            crc.lineTo(this.x + 0, this.y + 30);
            crc.lineTo(this.x + 20, this.y - 20);
            crc.lineTo(this.x + 40, this.y + 30);
            crc.closePath();
            crc.fillStyle = "blueviolet";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x + 15, this.y + 5, 3, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x + 14, this.y + 5, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x + 25, this.y + 5, 3, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x + 24, this.y + 5, 2, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill();


		}

		move(): void {
            if (this.x < -150) {
                this.x = 1500;
                this.y = Math.random() * 800;
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
		}
	}
}