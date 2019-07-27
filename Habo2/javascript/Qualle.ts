namespace HabosHaihappen {
	export class Qualle extends BewegendeObjekte {

		constructor() {
			super();
                  this.x = Math.random() * canvas.width + 600;
			this.y = Math.random() * canvas.height ;
			this.dx = Math.random() * 8 - 8;
                  this.dy = 0;
                  this.type = "Qualle";

		}
		draw(): void {
            crc.beginPath();
            crc.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc.fillStyle = "green";
            crc.fill();
            crc.fillRect(this.x + 16, this.y - 20, 6, 40)
            crc.beginPath();
            crc.arc(this.x + 19, this.y - 20, 3, 0, 2 * Math.PI);
            crc.fillStyle = "green";
            crc.fill();
            crc.beginPath();
            crc.arc(this.x + 19, this.y + 20, 3, 0, 2 * Math.PI);
            crc.fillStyle = "green";
            crc.fill();
            //Auge re
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x - 7, this.y - 8, 4, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x - 8, this.y - 8, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill();
            //Auge li
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x - 7, this.y + 8, 4, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x - 8, this.y + 8, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill();
            //oben
            crc.beginPath();
            crc.moveTo(this.x + 20, this.y - 19);
            crc.bezierCurveTo(this.x + 26, this.y - 4, this.x + 36, this.y - 29, this.x + 61, this.y - 19);
            crc.strokeStyle = "green";
            crc.stroke();
            crc.beginPath();
            crc.moveTo(this.x + 20, this.y - 18);
            crc.bezierCurveTo(this.x + 27, this.y - 3, this.x + 37, this.y - 28, this.x + 62, this.y - 18);
            crc.stroke();
            crc.beginPath();
            crc.moveTo(this.x + 20, this.y - 17);
            crc.bezierCurveTo(this.x + 28, this.y - 2, this.x + 38, this.y - 27, this.x + 63, this.y - 17);
            crc.stroke();
            //oben
            crc.beginPath();
            crc.moveTo(this.x + 20, this.y - 5);
            crc.bezierCurveTo(this.x + 26, this.y - 4, this.x + 36, this.y - 29, this.x + 61, this.y - 5);
            crc.strokeStyle = "green";
            crc.stroke();
            crc.beginPath();
            crc.moveTo(this.x + 20, this.y - 4);
            crc.bezierCurveTo(this.x + 27, this.y - 3, this.x + 37, this.y - 28, this.x + 62, this.y - 4);
            crc.stroke();
            crc.beginPath();
            crc.moveTo(this.x + 20, this.y - 3);
            crc.bezierCurveTo(this.x + 28, this.y - 2, this.x + 38, this.y - 27, this.x + 63, this.y - 3);
            crc.stroke();
            //unten
            crc.beginPath();
            crc.moveTo(this.x + 20,this.y + 5);
            crc.bezierCurveTo(this.x + 26, this.y + 4, this.x + 36, this.y + 29, this.x + 61, this.y + 5);
            crc.strokeStyle = "green";
            crc.stroke();
            crc.beginPath();
            crc.moveTo(this.x + 20, this.y + 4);
            crc.bezierCurveTo(this.x + 27, this.y + 3, this.x + 37, this.y + 28, this.x + 62, this.y + 4);
            crc.stroke();
            crc.beginPath();
            +crc.moveTo(this.x + 20, this.y + 3);
            crc.bezierCurveTo(this.x + 28, this.y + 2, this.x + 38, this.y + 27, this.x + 63, this.y + 3);
            crc.stroke();
            //unten
            crc.beginPath();
            crc.moveTo(this.x + 20, this.y + 19);
            crc.bezierCurveTo(this.x + 26, this.y + 4, this.x + 36, this.y + 29, this.x + 61, this.y + 19);
            crc.strokeStyle = "green";
            crc.stroke();
            crc.beginPath();
            crc.moveTo(this.x + 20, this.y + 18);
            crc.bezierCurveTo(this.x + 27, this.y + 3, this.x + 37, this.y + 28, this.x + 62, this.y + 18);
            crc.stroke();
            crc.beginPath();
            crc.moveTo(this.x + 20, this.y + 17);
            crc.bezierCurveTo(this.x + 28, this.y + 2, this.x + 38, this.y + 27, this.x + 63, this.y + 17);
            crc.stroke();

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