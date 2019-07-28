/*
Aufgabe: Endabgabe
Name: Orlik, Michel
Matrikel: 261370
Datum: 28.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace HabosHaihappen {
	export class GrosserFisch extends BewegendeObjekte {

		constructor() {
			super();
			this.x = Math.random() * canvas.width + 300;
			this.y = Math.random() * canvas.height ;
			this.dx = Math.random() * 5 - 5;
            this.dy = 0;
            this.type = "GroßerFisch"

		}

		draw(): void {
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x + 20, this.y - 50, this.x + 100, this.y);
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x + 20, this.y + 50, this.x + 100, this.y);
            crc.moveTo(this.x + 100, this.y);
            crc.lineTo(this.x + 110, this.y - 30);
            crc.lineTo(this.x + 110, this.y + 30);
            crc.lineTo(this.x + 100, this.y);
            crc.fillStyle = "red";
            crc.strokeStyle = "red";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x + 15, this.y - 4, 5, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x + 13, this.y - 4, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill();
        }
		move(): void {

            if (this.x < -150) {
                this.x = 1500
                this.y = Math.random() * 800;
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();

        }
    }
}

