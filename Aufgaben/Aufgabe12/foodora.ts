namespace Task12 {
	export class Foodora extends MovingCompany {
       
        constructor() {
            super(); 
            this.dx = 0;
            this.dy  = 5;
        }

		draw(): void {
            let food: Path2D = new Path2D();
            food.arc(this.x, this.y, 9, 1, Math.PI);
            crc.fillStyle = "red";
            crc.fill(food);
		}

		move(): void {
            this.y += this.dy;
            if (this.y > 900) {
                this.y = 900;
            }
        }

    }
}