namespace HabosHaihappen {
	export class Kugelfisch extends BewegendeObjekte {

		constructor() {
			super();
            this.x = Math.random() * canvas.width + 600 ;
			this.y = Math.random() * canvas.height;
			this.dx = Math.random() * 9 - 9;
            this.dy = 0;
            this.type = "Kugelfisch"

		}
		draw(): void {
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            crc.fillStyle = "orange";
            crc.strokeStyle = "orange";
            crc.fill();
            crc.stroke()
            //Auge Links
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x - 10, this.y - 8, 6, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x - 12, this.y - 8, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill();
            //Auge Rechts
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x + 10, this.y - 8, 6, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x + 8, this.y - 8, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill();
            //Mund
            crc.beginPath();
            crc.arc(this.x, this.y + 10, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.strokeStyle = "black";
            crc.stroke();
            //Stachel Rechts
            crc.beginPath();
            crc.moveTo(this.x + 20, this.y + 5);
            crc.lineTo(this.x + 50, this.y);
            crc.lineTo(this.x + 20, this.y - 5);
            crc.fillStyle = "orange";
            crc.strokeStyle = "orange";
            crc.stroke();
            crc.fill();
            //Stachel Links
            crc.beginPath();
            crc.moveTo(this.x - 20, this.y + 5);
            crc.lineTo(this.x - 50, this.y);
            crc.lineTo(this.x - 20, this.y - 5);
            crc.fillStyle = "orange";
            crc.strokeStyle = "orange";
            crc.stroke();
            crc.fill();
            //Stachel Unten
            crc.beginPath();
            crc.moveTo(this.x - 5, this.y + 20);
            crc.lineTo(this.x, this.y + 50);
            crc.lineTo(this.x + 5, this.y + 20);
            crc.fillStyle = "orange";
            crc.strokeStyle = "orange";
            crc.stroke();
            crc.fill();
            //Stachel 4
            crc.beginPath();
            crc.moveTo(this.x + 5, this.y - 20);
            crc.lineTo(this.x, this.y - 50);
            crc.lineTo(this.x - 5, this.y - 20);
            crc.fillStyle = "orange";
            crc.strokeStyle = "orange";
            crc.stroke();
            crc.fill();
            //Stachel li.u
            crc.beginPath();
            crc.moveTo(this.x + 10, this.y + 20);
            crc.lineTo(this.x + 30, this.y + 28);
            crc.lineTo(this.x + 20, this.y + 10);
            crc.fillStyle = "orange";
            crc.strokeStyle = "orange";
            crc.stroke();
            crc.fill();
            //Stachel li.u
            crc.beginPath();
            crc.moveTo(this.x + 10, this.y - 20);
            crc.lineTo(this.x + 30, this.y - 28);
            crc.lineTo(this.x + 20, this.y - 10);
            crc.fillStyle = "orange";
            crc.strokeStyle = "orange";
            crc.stroke();
            crc.fill();
            //Stachel li.u
            crc.beginPath();
            crc.moveTo(this.x - 10, this.y + 20);
            crc.lineTo(this.x - 30, this.y + 28);
            crc.lineTo(this.x - 20, this.y + 10);
            crc.fillStyle = "orange";
            crc.strokeStyle = "orange";
            crc.stroke();
            crc.fill();
            //Stachel li.u
            crc.beginPath();
            crc.moveTo(this.x - 10, this.y - 20);
            crc.lineTo(this.x - 30, this.y - 28);
            crc.lineTo(this.x - 20, this.y - 10);
            crc.fillStyle = "orange";
            crc.strokeStyle = "orange";
            crc.stroke();
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
