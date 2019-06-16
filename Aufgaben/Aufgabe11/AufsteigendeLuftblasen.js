/*
Aufgabe: 11
Name: Michel Orlik
Matrikel: 261370
Datum: 16.06.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe11;
(function (Aufgabe11) {
    class AufsteigendeLuftblasen {
        draw() {
            let luftblase = new Path2D();
            luftblase.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Aufgabe11.crc.beginPath();
            Aufgabe11.crc.fillStyle = 'rgb(135,206,255)';
            Aufgabe11.crc.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            Aufgabe11.crc.stroke();
            Aufgabe11.crc.strokeStyle = 'rgb(0,0,0)';
            Aufgabe11.crc.fill();
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 10) {
                this.x = 170 + (Math.random() * 50);
                this.y = 650;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    Aufgabe11.AufsteigendeLuftblasen = AufsteigendeLuftblasen;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=AufsteigendeLuftblasen.js.map