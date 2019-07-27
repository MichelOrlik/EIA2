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