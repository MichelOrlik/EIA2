var HabosHaihappen;
(function (HabosHaihappen) {
    class BewegendeObjekte extends HabosHaihappen.AlleObjekte {
        constructor() {
            super();
            //;
        }
        draw() {
            //;
        }
        move() {
            //;
        }
        update() {
            this.move();
            this.draw();
        }
    }
    HabosHaihappen.BewegendeObjekte = BewegendeObjekte;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=BewegendeObjekte.js.map