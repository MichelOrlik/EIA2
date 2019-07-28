/*
Aufgabe: Endabgabe
Name: Orlik, Michel
Matrikel: 261370
Datum: 28.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var HabosHaihappen;
(function (HabosHaihappen) {
    class Stern extends HabosHaihappen.BewegendeObjekte {
        constructor() {
            super();
            this.x = Math.random() * HabosHaihappen.canvas.width + 300;
            this.y = Math.random() * HabosHaihappen.canvas.height;
            this.dx = Math.random() * 4 - 4;
            this.dy = 0;
            this.type = "Stern";
        }
        draw() {
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x - 5, this.y + 0);
            HabosHaihappen.crc.lineTo(this.x + 45, this.y + 0);
            HabosHaihappen.crc.lineTo(this.x + 0, this.y + 30);
            HabosHaihappen.crc.lineTo(this.x + 20, this.y - 20);
            HabosHaihappen.crc.lineTo(this.x + 40, this.y + 30);
            HabosHaihappen.crc.closePath();
            HabosHaihappen.crc.fillStyle = "blueviolet";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x + 15, this.y + 5, 3, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "white";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x + 14, this.y + 5, 2, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "black";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x + 25, this.y + 5, 3, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "white";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x + 24, this.y + 5, 2, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "black";
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
    HabosHaihappen.Stern = Stern;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=Stern.js.map