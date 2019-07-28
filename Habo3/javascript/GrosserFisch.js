/*
Aufgabe: Endabgabe
Name: Orlik, Michel
Matrikel: 261370
Datum: 28.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var HabosHaihappen;
(function (HabosHaihappen) {
    class GrosserFisch extends HabosHaihappen.BewegendeObjekte {
        constructor() {
            super();
            this.x = Math.random() * HabosHaihappen.canvas.width + 300;
            this.y = Math.random() * HabosHaihappen.canvas.height;
            this.dx = Math.random() * 5 - 5;
            this.dy = 0;
            this.type = "GroßerFisch";
        }
        draw() {
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.quadraticCurveTo(this.x + 20, this.y - 50, this.x + 100, this.y);
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.quadraticCurveTo(this.x + 20, this.y + 50, this.x + 100, this.y);
            HabosHaihappen.crc.moveTo(this.x + 100, this.y);
            HabosHaihappen.crc.lineTo(this.x + 110, this.y - 30);
            HabosHaihappen.crc.lineTo(this.x + 110, this.y + 30);
            HabosHaihappen.crc.lineTo(this.x + 100, this.y);
            HabosHaihappen.crc.fillStyle = "red";
            HabosHaihappen.crc.strokeStyle = "red";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x + 15, this.y - 4, 5, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "white";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x + 13, this.y - 4, 3, 0, 2 * Math.PI);
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
    HabosHaihappen.GrosserFisch = GrosserFisch;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=GrosserFisch.js.map