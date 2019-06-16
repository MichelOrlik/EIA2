/*
Aufgabe: 11
Name: Michel Orlik
Matrikel: 261370
Datum: 16.06.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe11;
(function (Aufgabe11) {
    class Wels {
        draw() {
            Aufgabe11.crc.fillStyle = 'rgb(169,169,169)';
            Aufgabe11.crc.beginPath(); // Saugmund
            Aufgabe11.crc.moveTo(this.x + 50, this.y + 50);
            Aufgabe11.crc.lineTo(this.x + 80, this.y + 50);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); //dorsale Linie
            Aufgabe11.crc.moveTo(this.x + 80, this.y + 50);
            Aufgabe11.crc.quadraticCurveTo(this.x + 80, this.y + 40, this.x + 200, this.y + 50);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); //ventrale Linie
            Aufgabe11.crc.moveTo(this.x + 50, this.y + 50);
            Aufgabe11.crc.quadraticCurveTo(this.x + 50, this.y + 5, this.x + 200, this.y + 50);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); //Auge
            Aufgabe11.crc.fillStyle = 'rgb(0,0,0)';
            Aufgabe11.crc.arc(this.x + 60, this.y + 40, 3, 0, 2 * Math.PI);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.fillStyle = 'rgb(169,169,169)';
            Aufgabe11.crc.beginPath(); //dorsale Flosse vorne
            Aufgabe11.crc.moveTo(this.x + 90, this.y + 28);
            Aufgabe11.crc.quadraticCurveTo(this.x + 100, this.y + 5, this.x + 120, this.y + 15);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); //dorsale Flosse hinten
            Aufgabe11.crc.moveTo(this.x + 120, this.y + 15);
            Aufgabe11.crc.lineTo(this.x + 115, this.y + 30);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); //pectorale Flosse vorne
            Aufgabe11.crc.moveTo(this.x + 90, this.y + 40);
            Aufgabe11.crc.quadraticCurveTo(this.x + 75, this.y + 50, this.x + 120, this.y + 50);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); //pectorale Flosse hinten
            Aufgabe11.crc.moveTo(this.x + 90, this.y + 40);
            Aufgabe11.crc.lineTo(this.x + 120, this.y + 50);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.fill();
            Aufgabe11.crc.beginPath(); //Geschlechtsdimorphismus oben
            Aufgabe11.crc.moveTo(this.x + 55, this.y + 45);
            Aufgabe11.crc.lineTo(this.x + 45, this.y + 40);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.beginPath(); //Geschlechtsdimorphismus mitte
            Aufgabe11.crc.moveTo(this.x + 57, this.y + 47);
            Aufgabe11.crc.lineTo(this.x + 40, this.y + 42);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.beginPath(); //Geschlechtsdimorphismus unten
            Aufgabe11.crc.moveTo(this.x + 55, this.y + 47);
            Aufgabe11.crc.lineTo(this.x + 40, this.y + 47);
            Aufgabe11.crc.stroke();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x < -130) {
                this.x = 1300;
                this.y = 800 + (Math.random() * 200);
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    Aufgabe11.Wels = Wels;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Wels.js.map