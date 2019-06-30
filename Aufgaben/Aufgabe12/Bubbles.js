var Task12;
(function (Task12) {
    class Bubbles extends Task12.MovingCompany {
        constructor() {
            super();
            this.x = Math.random() * Task12.crc.canvas.width;
            this.y = Math.random() * Task12.crc.canvas.height;
            this.dx = 0;
            this.dy = Math.random() * 2 - 1;
            this.r = Math.random() * 30;
        }
        draw() {
            let bubbles = new Path2D();
            bubbles.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            Task12.crc.fillStyle = "#7FFFD4";
            Task12.crc.strokeStyle = "#6495ED";
            Task12.crc.fill(bubbles);
            Task12.crc.stroke(bubbles);
        }
        move() {
            this.dy = -Math.abs(this.dy);
            this.y += this.dy;
            if (this.y + 5 < 0) {
                this.y = 790;
            }
        }
    }
    Task12.Bubbles = Bubbles;
})(Task12 || (Task12 = {}));
//# sourceMappingURL=Bubbles.js.map
