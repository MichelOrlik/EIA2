/*
Aufgabe: Endabgabe
Name: Orlik, Michel
Matrikel: 261370
Datum: 28.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var HabosHaihappen;
(function (HabosHaihappen) {
    class KleinerFisch extends HabosHaihappen.BewegendeObjekte {
        constructor() {
            super();
            this.x = Math.random() * HabosHaihappen.canvas.width + 300;
            this.y = Math.random() * HabosHaihappen.canvas.height;
            this.dx = Math.random() * 8 - 8;
            this.dy = 0;
            this.type = "KleinerFisch";
        }
        draw() {
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.quadraticCurveTo(this.x + 10, this.y - 20, this.x + 50, this.y);
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.quadraticCurveTo(this.x + 10, this.y + 20, this.x + 50, this.y);
            HabosHaihappen.crc.moveTo(this.x + 50, this.y);
            HabosHaihappen.crc.lineTo(this.x + 60, this.y - 10);
            HabosHaihappen.crc.lineTo(this.x + 60, this.y + 10);
            HabosHaihappen.crc.lineTo(this.x + 50, this.y);
            HabosHaihappen.crc.fillStyle = "hotpink";
            HabosHaihappen.crc.strokeStyle = "hotpink";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x + 10, this.y - 4, 3, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "white";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x + 9, this.y - 4, 2, 0, 2 * Math.PI);
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
    HabosHaihappen.KleinerFisch = KleinerFisch;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=KleinerFisch.js.map