var HabosHaihappen;
(function (HabosHaihappen) {
    class Luftblasen extends HabosHaihappen.BewegendeObjekte {
        constructor() {
            super();
            this.x = Math.random() * HabosHaihappen.crc.canvas.width;
            this.y = Math.random() * HabosHaihappen.crc.canvas.height;
            this.dx = -0.2;
            this.dy = Math.random() * 2 - 2;
        }
        draw() {
            let luftblase = new Path2D();
            luftblase.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.fillStyle = 'rgb(135,206,255)';
            HabosHaihappen.crc.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.strokeStyle = 'rgb(0,0,0)';
            HabosHaihappen.crc.fill();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 10) {
                this.x = 1270 + (Math.random() * 50);
                this.y = 800;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    HabosHaihappen.Luftblasen = Luftblasen;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=Luftblasen.js.map