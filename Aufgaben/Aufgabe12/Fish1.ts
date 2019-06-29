namespace Task12 {
	export class Fish1 extends MovingCompany {

		constructor() {
			super();
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.dx = Math.random() * 10 - 5;
			this.dy = Math.random() * 10 - 5;

		}

		draw(): void {
			crc.fillStyle = "rgb(72,61,139)";
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
			crc.fillStyle = "rgb(0,0,0)";
			crc.arc(this.x + 30, this.y + 19, 2, 0, 2 * Math.PI);
			crc.stroke();
			crc.fill();
			crc.fillStyle = "rgb(95,158,160)";
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
		move(): void {
			this.x -= this.dx;
			this.y += this.dy;
			if (this.x + 100 < 0) {
				this.x = 1330;
			}
			if (this.y > 750) {
				this.y = 0;
			}
			if (this.x > 1330) {
				this.x = -50;
			}
			if (this.y + 5 < 0) {
				this.y = 750;
			}
		}

	}
}
