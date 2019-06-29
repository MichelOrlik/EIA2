namespace Task12 {
	export class Fish2 extends MovingCompany {

		constructor() {
			super();
			this.x = Math.random() * 725 + 50;
			this.y = Math.random() * 450 + 50;
			this.dx = Math.random() * 10 - 5;
			this.dy = Math.random() * 10 - 5;

		}
		draw(): void {
			crc.fillStyle = "rgba(235, 151, 78, 1)";
			crc.beginPath(); // Kaudale Flosse
			crc.moveTo(this.x + 50, this.y + 50);
			crc.lineTo(this.x + 50, this.y + 80);
			crc.stroke();
			crc.beginPath(); // Kaudale Flosse oben
			crc.moveTo(this.x + 50, this.y + 50);
			crc.quadraticCurveTo(this.x + 70, this.y + 70, this.x + 80, this.y + 60);
			crc.stroke();
			crc.beginPath(); // Kaudale Flosse unten
			crc.moveTo(this.x + 50, this.y + 80);
			crc.quadraticCurveTo(this.x + 70, this.y + 60, this.x + 80, this.y + 70);
			crc.stroke();
			crc.beginPath(); // ventrale Linie
			crc.moveTo(this.x + 80, this.y + 70);
			crc.quadraticCurveTo(this.x + 150, this.y + 100, this.x + 200, this.y + 70);
			crc.stroke();
			crc.fill();
			crc.beginPath(); // dorsale Linie
			crc.moveTo(this.x + 80, this.y + 60);
			crc.quadraticCurveTo(this.x + 150, this.y + 30, this.x + 200, this.y + 70);
			crc.stroke();
			crc.fill();
			crc.beginPath(); //Auge
			crc.fillStyle = "rgb(0,0,0)";
			crc.arc(this.x + 180, this.y + 65, 3, 0, 4 * Math.PI);
			crc.stroke();
			crc.fill();
			crc.beginPath(); // dorsale Linie
			crc.moveTo(this.x + 190, this.y + 75);
			crc.quadraticCurveTo(this.x + 180, this.y + 80, this.x + 170, this.y + 75); //75 neutral 70 traurig 80 fröhlich
			crc.stroke();
			crc.beginPath(); // dorsale Linie
			crc.moveTo(this.x + 80, this.y + 60);
			crc.quadraticCurveTo(this.x + 150, this.y + 30, this.x + 200, this.y + 70);
			crc.stroke();


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