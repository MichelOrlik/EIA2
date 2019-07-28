/*
Aufgabe: Endabgabe
Name: Orlik, Michel
Matrikel: 261370
Datum: 28.07.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var HabosHaihappen;
(function (HabosHaihappen) {
    class BewegendeObjekte extends HabosHaihappen.AlleObjekte {
        constructor() {
            super();
        }
        draw() {
            //;
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
        update() {
            this.move();
            this.draw();
            this.fischFressen();
        }
        fischFressen() {
        }
    }
    HabosHaihappen.BewegendeObjekte = BewegendeObjekte;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=BewegendeObjekte.js.map