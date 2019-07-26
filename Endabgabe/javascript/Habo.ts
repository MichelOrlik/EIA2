namespace HabosHaihappen {
    export class Habo extends BewegendeObjekte {
        constructor() {
            super();
            this.x = 300;
            this.y = Math.random() * canvas.height;
        }
        draw(): void {
            //Körper
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x - 100, this.y + 40, this.x - 200, this.y);
            crc.fillStyle = "crimson";
            crc.fill();
            crc.beginPath();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x - 100, this.y + 20, this.x - 200, this.y);
            crc.fillStyle = "blueviolet";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x - 100, this.y - 40, this.x - 200, this.y);
            crc.fillStyle = "blueviolet";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x - 200, this.y);
            crc.quadraticCurveTo(this.x - 250, this.y - 50, this.x - 160, this.y);
            crc.fill();
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x - 200, this.y);
            crc.quadraticCurveTo(this.x - 250, this.y + 50, this.x - 160, this.y);
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x - 100, this.y);
            crc.quadraticCurveTo(this.x - 100, this.y - 40, this.x - 130, this.y - 30);
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x - 40, this.y + 13);
            crc.quadraticCurveTo(this.x - 90, this.y - 35, this.x - 60, this.y + 20);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x - 60, this.y + 20);
            crc.lineTo(this.x - 45, this.y + 7);
            crc.lineTo(this.x - 66, this.y + 10);
            crc.lineTo(this.x - 57, this.y - 4);
            crc.lineTo(this.x - 70, this.y)
            crc.strokeStyle = "black";
            crc.stroke();
            crc.beginPath();
            crc.moveTo(this.x - 100, this.y);
            crc.quadraticCurveTo(this.x - 100, this.y + 40, this.x - 130, this.y + 30);
            crc.fillStyle = "blueviolet";
            crc.fill();
            //Auge
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x - 35, this.y - 3, 4, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x - 34, this.y - 3, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill();
        }
        move(): void {
            if (this.x < -150) {
                this.x = 1500
                this.y = Math.random() * 800;
            }
            this.draw();
        }
    }
}