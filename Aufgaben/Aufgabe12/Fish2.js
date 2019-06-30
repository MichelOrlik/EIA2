var Task12;
(function (Task12) {
    class Fish2 extends Task12.MovingCompany {
        constructor() {
            super();
            this.x = Math.random() * 725 + 10;
            this.y = Math.random() * 450 + 10;
            this.dx = Math.random() * 10 - 2;
            this.dy = Math.random() * 10 - 2;
        }
        draw() {
            Task12.crc.fillStyle = "rgba(235, 151, 78, 1)";
            Task12.crc.beginPath(); // Kaudale Flosse
            Task12.crc.moveTo(this.x + 50, this.y + 50);
            Task12.crc.lineTo(this.x + 50, this.y + 80);
            Task12.crc.stroke();
            Task12.crc.beginPath(); // Kaudale Flosse oben
            Task12.crc.moveTo(this.x + 50, this.y + 50);
            Task12.crc.quadraticCurveTo(this.x + 70, this.y + 70, this.x + 80, this.y + 60);
            Task12.crc.stroke();
            Task12.crc.beginPath(); // Kaudale Flosse unten
            Task12.crc.moveTo(this.x + 50, this.y + 80);
            Task12.crc.quadraticCurveTo(this.x + 70, this.y + 60, this.x + 80, this.y + 70);
            Task12.crc.stroke();
            Task12.crc.beginPath(); // ventrale Linie
            Task12.crc.moveTo(this.x + 80, this.y + 70);
            Task12.crc.quadraticCurveTo(this.x + 150, this.y + 100, this.x + 200, this.y + 70);
            Task12.crc.stroke();
            Task12.crc.fill();
            Task12.crc.beginPath(); // dorsale Linie
            Task12.crc.moveTo(this.x + 80, this.y + 60);
            Task12.crc.quadraticCurveTo(this.x + 150, this.y + 30, this.x + 200, this.y + 70);
            Task12.crc.stroke();
            Task12.crc.fill();
            Task12.crc.beginPath(); //Auge
            Task12.crc.fillStyle = "rgb(0,0,0)";
            Task12.crc.arc(this.x + 180, this.y + 65, 3, 0, 4 * Math.PI);
            Task12.crc.stroke();
            Task12.crc.fill();
            Task12.crc.beginPath(); // dorsale Linie
            Task12.crc.moveTo(this.x + 190, this.y + 75);
            Task12.crc.quadraticCurveTo(this.x + 180, this.y + 80, this.x + 170, this.y + 75); //75 neutral 70 traurig 80 fröhlich
            Task12.crc.stroke();
            Task12.crc.beginPath(); // dorsale Linie
            Task12.crc.moveTo(this.x + 80, this.y + 60);
            Task12.crc.quadraticCurveTo(this.x + 150, this.y + 30, this.x + 200, this.y + 70);
            Task12.crc.stroke();
        }
        move() {
            this.x -= this.dx;
            this.y += this.dy;
            if (this.x + 100 < 0) {
                this.x = 1330;
            }
            if (this.y > 1500) {
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
    Task12.Fish2 = Fish2;
})(Task12 || (Task12 = {}));
//# sourceMappingURL=Fish2.js.map
