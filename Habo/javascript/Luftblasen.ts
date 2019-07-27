namespace HabosHaihappen {

    export class Luftblasen extends BewegendeObjekte {


        constructor() {
            super();
            this.x = Math.random() * crc.canvas.width;
            this.y = Math.random() * crc.canvas.height;
            this.dx = -0.2;
            this.dy = Math.random() * 2 - 2;
        }

        draw(): void {
            let luftblase: Path2D = new Path2D();
            luftblase.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc.beginPath();
            crc.fillStyle = 'rgb(135,206,255)';
            crc.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            crc.stroke();
            crc.strokeStyle = 'rgb(0,0,0)';
            crc.fill();
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
}
