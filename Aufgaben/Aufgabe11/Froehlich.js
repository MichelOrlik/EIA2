/*
Aufgabe: 11
Name: Michel Orlik
Matrikel: 261370
Datum: 16.06.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe11;
(function (Aufgabe11) {
    class Froehlich {
        draw() {
            Aufgabe11.crc.fillStyle = 'rgba(235, 151, 78, 1)';
            Aufgabe11.crc.beginPath(); // Kaudale Flosse
            Aufgabe11.crc.moveTo(this.x + 50, this.y + 50);
            Aufgabe11.crc.lineTo(this.x + 50, this.y + 80);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.beginPath(); // Kaudale Flosse oben
            Aufgabe11.crc.moveTo(this.x + 50, this.y + 50);
            Aufgabe11.crc.quadraticCurveTo(this.x + 70, this.y + 70, this.x + 80, this.y + 60);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.beginPath(); // Kaudale Flosse unten
            Aufgabe11.crc.moveTo(this.x + 50, this.y + 80);
            Aufgabe11.crc.quadraticCurveTo(this.x + 70, this.y + 60, this.x + 80, this.y + 70);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.beginPath(); // ventrale Linie
            Aufgabe11.crc.moveTo(this.x + 80, this.y + 70);
            Aufgabe11.crc.quadraticCurveTo(this.x + 150, this.y + 100, this.x + 200, this.y + 70);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); // dorsale Linie
            Aufgabe11.crc.moveTo(this.x + 80, this.y + 60);
            Aufgabe11.crc.quadraticCurveTo(this.x + 150, this.y + 30, this.x + 200, this.y + 70);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); //Auge
            Aufgabe11.crc.fillStyle = 'rgb(0,0,0)';
            Aufgabe11.crc.arc(this.x + 180, this.y + 65, 3, 0, 4 * Math.PI);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); // dorsale Linie
            Aufgabe11.crc.moveTo(this.x + 190, this.y + 75);
            Aufgabe11.crc.quadraticCurveTo(this.x + 180, this.y + 80, this.x + 170, this.y + 75); //75 neutral 70 traurig 80 fröhlich
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.beginPath(); // dorsale Linie
            Aufgabe11.crc.moveTo(this.x + 80, this.y + 60);
            Aufgabe11.crc.quadraticCurveTo(this.x + 150, this.y + 30, this.x + 200, this.y + 70);
            Aufgabe11.crc.stroke();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x > 900) {
                this.y = Math.random() * 800;
                this.x = -200;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    Aufgabe11.Froehlich = Froehlich;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Froehlich.js.map