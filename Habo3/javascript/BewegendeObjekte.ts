/*
Aufgabe: Endabgabe
Name: Orlik, Michel
Matrikel: 261370
Datum: 28.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
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
