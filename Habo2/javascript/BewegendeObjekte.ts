namespace HabosHaihappen {

    export class BewegendeObjekte extends AlleObjekte {
        dx: number;
        dy: number;
        color: number;

        constructor() {
            super();

        }

        draw(): void {
            //;
        }
        move(): void {
            this.x += this.dx;
            this.y += this.dy;

        }
        update(): void {
            this.move();
            this.draw();
            this.fischFressen();
        }
        fischFressen(){
        }
    }

}
