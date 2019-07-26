namespace HabosHaihappen {

    export class BewegendeObjekte extends AlleObjekte {
        dx: number;
        dy: number; 

        constructor() {
            super();
		//;
        }
 
		draw(): void {
			//;
		}
		move(): void {
            //;
        }
		update(): void {
            this.move();
            this.draw();
            }
    }

}
