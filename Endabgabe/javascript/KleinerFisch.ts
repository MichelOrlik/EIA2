namespace HabosHaihappen {
    export class KleinerFisch extends BewegendeObjekte {

        constructor() {
            super();
            this.x = Math.random() * canvas.width + 300;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 8 - 8;
            this.dy = 0;
            this.type = "KleinerFisch"



        }
        draw(): void {
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x + 10, this.y - 20, this.x + 50, this.y);
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x + 10, this.y + 20, this.x + 50, this.y);
            crc.moveTo(this.x + 50, this.y);
            crc.lineTo(this.x + 60, this.y - 10);
            crc.lineTo(this.x + 60, this.y + 10);
            crc.lineTo(this.x + 50, this.y);
            crc.fillStyle = "hotpink";
            crc.strokeStyle = "hotpink";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x + 10, this.y - 4, 3, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x + 9, this.y - 4, 2, 0, 2 * Math.PI);
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
