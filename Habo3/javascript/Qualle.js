/*
Aufgabe: Endabgabe
Name: Orlik, Michel
Matrikel: 261370
Datum: 28.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var HabosHaihappen;
(function (HabosHaihappen) {
    class Qualle extends HabosHaihappen.BewegendeObjekte {
        constructor() {
            super();
            this.x = Math.random() * HabosHaihappen.canvas.width + 600;
            this.y = Math.random() * HabosHaihappen.canvas.height;
            this.dx = Math.random() * 8 - 8;
            this.dy = 0;
            this.type = "Qualle";
        }
        draw() {
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "green";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.fillRect(this.x + 16, this.y - 20, 6, 40);
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.arc(this.x + 19, this.y - 20, 3, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "green";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.arc(this.x + 19, this.y + 20, 3, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "green";
            HabosHaihappen.crc.fill();
            //Auge re
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x - 7, this.y - 8, 4, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "white";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x - 8, this.y - 8, 3, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "black";
            HabosHaihappen.crc.fill();
            //Auge li
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x - 7, this.y + 8, 4, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "white";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x - 8, this.y + 8, 3, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "black";
            HabosHaihappen.crc.fill();
            //oben
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y - 19);
            HabosHaihappen.crc.bezierCurveTo(this.x + 26, this.y - 4, this.x + 36, this.y - 29, this.x + 61, this.y - 19);
            HabosHaihappen.crc.strokeStyle = "green";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y - 18);
            HabosHaihappen.crc.bezierCurveTo(this.x + 27, this.y - 3, this.x + 37, this.y - 28, this.x + 62, this.y - 18);
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y - 17);
            HabosHaihappen.crc.bezierCurveTo(this.x + 28, this.y - 2, this.x + 38, this.y - 27, this.x + 63, this.y - 17);
            HabosHaihappen.crc.stroke();
            //oben
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y - 5);
            HabosHaihappen.crc.bezierCurveTo(this.x + 26, this.y - 4, this.x + 36, this.y - 29, this.x + 61, this.y - 5);
            HabosHaihappen.crc.strokeStyle = "green";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y - 4);
            HabosHaihappen.crc.bezierCurveTo(this.x + 27, this.y - 3, this.x + 37, this.y - 28, this.x + 62, this.y - 4);
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y - 3);
            HabosHaihappen.crc.bezierCurveTo(this.x + 28, this.y - 2, this.x + 38, this.y - 27, this.x + 63, this.y - 3);
            HabosHaihappen.crc.stroke();
            //unten
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y + 5);
            HabosHaihappen.crc.bezierCurveTo(this.x + 26, this.y + 4, this.x + 36, this.y + 29, this.x + 61, this.y + 5);
            HabosHaihappen.crc.strokeStyle = "green";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y + 4);
            HabosHaihappen.crc.bezierCurveTo(this.x + 27, this.y + 3, this.x + 37, this.y + 28, this.x + 62, this.y + 4);
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.beginPath();
            +HabosHaihappen.crc.moveTo(this.x + 20, this.y + 3);
            HabosHaihappen.crc.bezierCurveTo(this.x + 28, this.y + 2, this.x + 38, this.y + 27, this.x + 63, this.y + 3);
            HabosHaihappen.crc.stroke();
            //unten
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y + 19);
            HabosHaihappen.crc.bezierCurveTo(this.x + 26, this.y + 4, this.x + 36, this.y + 29, this.x + 61, this.y + 19);
            HabosHaihappen.crc.strokeStyle = "green";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y + 18);
            HabosHaihappen.crc.bezierCurveTo(this.x + 27, this.y + 3, this.x + 37, this.y + 28, this.x + 62, this.y + 18);
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x + 20, this.y + 17);
            HabosHaihappen.crc.bezierCurveTo(this.x + 28, this.y + 2, this.x + 38, this.y + 27, this.x + 63, this.y + 17);
            HabosHaihappen.crc.stroke();
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
    HabosHaihappen.Qualle = Qualle;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=Qualle.js.map