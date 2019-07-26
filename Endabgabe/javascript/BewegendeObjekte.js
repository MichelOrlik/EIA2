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
        }
    }
    HabosHaihappen.BewegendeObjekte = BewegendeObjekte;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=BewegendeObjekte.js.map