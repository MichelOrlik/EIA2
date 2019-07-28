/*
Aufgabe: Endabgabe
Name: Orlik, Michel
Matrikel: 261370
Datum: 28.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var HabosHaihappen;
(function (HabosHaihappen) {
    class Futter extends HabosHaihappen.BewegendeObjekte {
        constructor() {
            super();
            this.dx = 0;
            this.dy = 5; //Geschwindigkeit nach unten fallend
        }
        draw() {
            let food = new Path2D();
            food.arc(this.x, this.y, 9, 1, Math.PI);
            HabosHaihappen.crc.fillStyle = "red";
            HabosHaihappen.crc.fill(food);
        }
        move() {
            this.y += this.dy;
            if (this.y > 800) {
                this.y = 800; //Position an der es liegen bleibt
            }
        }
    }
    HabosHaihappen.Futter = Futter;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=Futter.js.map