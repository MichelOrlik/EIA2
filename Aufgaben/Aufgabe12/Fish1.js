var Task12;
(function (Task12) {
    class Fish1 extends Task12.MovingCompany {
        constructor() {
            super();
            this.x = Math.random() * Task12.canvas.width;
            this.y = Math.random() * Task12.canvas.height;
            this.dx = Math.random() * 10 - 5;
            this.dy = Math.random() * 10 - 5;
        }
        draw() {
            Task12.crc.fillStyle = "rgb(72,61,139)";
            Task12.crc.beginPath(); // ventraler Linie
            Task12.crc.moveTo(this.x + 20, this.y + 20);
            Task12.crc.quadraticCurveTo(this.x + 20, this.y + 35, this.x + 250, this.y + 20);
            Task12.crc.stroke();
            Task12.crc.fill();
            Task12.crc.beginPath(); // dorsale Linie
            Task12.crc.moveTo(this.x + 20, this.y + 20);
            Task12.crc.quadraticCurveTo(this.x + 20, this.y + 5, this.x + 250, this.y + 20);
            Task12.crc.stroke();
            Task12.crc.fill();
            Task12.crc.beginPath(); //Auge
            Task12.crc.fillStyle = "rgb(0,0,0)";
            Task12.crc.arc(this.x + 30, this.y + 19, 2, 0, 2 * Math.PI);
            Task12.crc.stroke();
            Task12.crc.fill();
            Task12.crc.fillStyle = "rgb(95,158,160)";
            Task12.crc.beginPath(); // dorsale Flosse
            Task12.crc.moveTo(this.x + 50, this.y + 12.5);
            Task12.crc.quadraticCurveTo(this.x + 100, this.y + 0, this.x + 270, this.y + 20);
            Task12.crc.stroke();
            Task12.crc.fill();
            Task12.crc.beginPath(); // ventrale Flosse
            Task12.crc.moveTo(this.x + 50, this.y + 27);
            Task12.crc.quadraticCurveTo(this.x + 100, this.y + 40, this.x + 270, this.y + 20);
            Task12.crc.stroke();
            Task12.crc.fill();
        }
        move() {
            this.x -= this.dx;
            this.y += this.dy;
            if (this.x + 100 < 0) {
                this.x = 1330;
            }
            if (this.y > 170) {
                this.y = 0;
            }
            if (this.x > 1330) {
                this.x = -50;
            }
            if (this.y + 2 < 0) {
                this.y = 750;
            }
        }
    }
    Task12.Fish1 = Fish1;
})(Task12 || (Task12 = {}));
//# sourceMappingURL=Fish1.js.map
