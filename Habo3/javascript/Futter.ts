/*
Aufgabe: Endabgabe
Name: Orlik, Michel
Matrikel: 261370
Datum: 28.07.2019
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace HabosHaihappen {
	export class Futter extends BewegendeObjekte {
       
        constructor() {
            super(); 
            this.dx = 0;
            this.dy  = 5; //Geschwindigkeit nach unten fallend
        }

		draw(): void {
            let food: Path2D = new Path2D();
            food.arc(this.x, this.y, 9, 1, Math.PI);
            crc.fillStyle = "red";
            crc.fill(food);
		}

		move(): void {
            this.y += this.dy;
            if (this.y > 800) {
                this.y = 800; //Position an der es liegen bleibt
            }
        }

    }
}