var HabosHaihappen;
(function (HabosHaihappen) {
    class Kugelfisch extends HabosHaihappen.BewegendeObjekte {
        constructor() {
            super();
            this.x = Math.random() * HabosHaihappen.canvas.width + 600;
            this.y = Math.random() * HabosHaihappen.canvas.height;
            this.dx = Math.random() * 9 - 9;
            this.dy = 0;
            this.type = "Kugelfisch";
        }
        draw() {
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "orange";
            HabosHaihappen.crc.strokeStyle = "orange";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.stroke();
            //Auge Links
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x - 10, this.y - 8, 6, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "white";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x - 12, this.y - 8, 3, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "black";
            HabosHaihappen.crc.fill();
            //Auge Rechts
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x + 10, this.y - 8, 6, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "white";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x + 8, this.y - 8, 3, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "black";
            HabosHaihappen.crc.fill();
            //Mund
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.arc(this.x, this.y + 10, 5, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "black";
            HabosHaihappen.crc.strokeStyle = "black";
            HabosHaihappen.crc.stroke();
            //Stachel Rechts
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y + 5);
            HabosHaihappen.crc.lineTo(this.x + 50, this.y);
            HabosHaihappen.crc.lineTo(this.x + 20, this.y - 5);
            HabosHaihappen.crc.fillStyle = "orange";
            HabosHaihappen.crc.strokeStyle = "orange";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.fill();
            //Stachel Links
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x - 20, this.y + 5);
            HabosHaihappen.crc.lineTo(this.x - 50, this.y);
            HabosHaihappen.crc.lineTo(this.x - 20, this.y - 5);
            HabosHaihappen.crc.fillStyle = "orange";
            HabosHaihappen.crc.strokeStyle = "orange";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.fill();
            //Stachel Unten
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x - 5, this.y + 20);
            HabosHaihappen.crc.lineTo(this.x, this.y + 50);
            HabosHaihappen.crc.lineTo(this.x + 5, this.y + 20);
            HabosHaihappen.crc.fillStyle = "orange";
            HabosHaihappen.crc.strokeStyle = "orange";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.fill();
            //Stachel 4
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 5, this.y - 20);
            HabosHaihappen.crc.lineTo(this.x, this.y - 50);
            HabosHaihappen.crc.lineTo(this.x - 5, this.y - 20);
            HabosHaihappen.crc.fillStyle = "orange";
            HabosHaihappen.crc.strokeStyle = "orange";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.fill();
            //Stachel li.u
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 10, this.y + 20);
            HabosHaihappen.crc.lineTo(this.x + 30, this.y + 28);
            HabosHaihappen.crc.lineTo(this.x + 20, this.y + 10);
            HabosHaihappen.crc.fillStyle = "orange";
            HabosHaihappen.crc.strokeStyle = "orange";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.fill();
            //Stachel li.u
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 10, this.y - 20);
            HabosHaihappen.crc.lineTo(this.x + 30, this.y - 28);
            HabosHaihappen.crc.lineTo(this.x + 20, this.y - 10);
            HabosHaihappen.crc.fillStyle = "orange";
            HabosHaihappen.crc.strokeStyle = "orange";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.fill();
            //Stachel li.u
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x - 10, this.y + 20);
            HabosHaihappen.crc.lineTo(this.x - 30, this.y + 28);
            HabosHaihappen.crc.lineTo(this.x - 20, this.y + 10);
            HabosHaihappen.crc.fillStyle = "orange";
            HabosHaihappen.crc.strokeStyle = "orange";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.fill();
            //Stachel li.u
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x - 10, this.y - 20);
            HabosHaihappen.crc.lineTo(this.x - 30, this.y - 28);
            HabosHaihappen.crc.lineTo(this.x - 20, this.y - 10);
            HabosHaihappen.crc.fillStyle = "orange";
            HabosHaihappen.crc.strokeStyle = "orange";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.fill();
        }
        move() {
            if (this.x < -150) {
                this.x = 1500;
                this.y = Math.random() * 800;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    HabosHaihappen.Kugelfisch = Kugelfisch;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=Kugelfisch.js.map