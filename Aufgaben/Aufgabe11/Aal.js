/*
Aufgabe: 11
Name: Michel Orlik
Matrikel: 261370
Datum: 16.06.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe11;
(function (Aufgabe11) {
    class Aal {
        draw() {
            Aufgabe11.crc.fillStyle = 'rgb(72,61,139)';
            Aufgabe11.crc.beginPath(); // ventraler Linie
            Aufgabe11.crc.moveTo(this.x + 20, this.y + 20);
            Aufgabe11.crc.quadraticCurveTo(this.x + 20, this.y + 35, this.x + 250, this.y + 20);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); // dorsale Linie
            Aufgabe11.crc.moveTo(this.x + 20, this.y + 20);
            Aufgabe11.crc.quadraticCurveTo(this.x + 20, this.y + 5, this.x + 250, this.y + 20);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); //Auge
            Aufgabe11.crc.fillStyle = 'rgb(0,0,0)';
            Aufgabe11.crc.arc(this.x + 30, this.y + 19, 2, 0, 2 * Math.PI);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.fillStyle = 'rgb(95,158,160)';
            Aufgabe11.crc.beginPath(); // dorsale Flosse
            Aufgabe11.crc.moveTo(this.x + 50, this.y + 12.5);
            Aufgabe11.crc.quadraticCurveTo(this.x + 100, this.y + 0, this.x + 270, this.y + 20);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); // ventrale Flosse
            Aufgabe11.crc.moveTo(this.x + 50, this.y + 27);
            Aufgabe11.crc.quadraticCurveTo(this.x + 100, this.y + 40, this.x + 270, this.y + 20);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x < -150) {
                this.x = 1200;
                this.y = Math.random() * 800;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    Aufgabe11.Aal = Aal;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Aal.js.map