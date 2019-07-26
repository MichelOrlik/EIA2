var HabosHaihappen;
(function (HabosHaihappen) {
    class Habo extends HabosHaihappen.BewegendeObjekte {
        constructor() {
            super();
            this.x = 300;
            this.y = Math.random() * HabosHaihappen.canvas.height;
            this.dx = 0;
            this.dy = 0;
            this.koerpergroesse = 0;
        }
        draw() {
            //Körper
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.quadraticCurveTo(this.x - 100, this.y + 40, this.x - 200, this.y);
            HabosHaihappen.crc.fillStyle = "crimson";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.quadraticCurveTo(this.x - 100, this.y + 20, this.x - 200, this.y);
            HabosHaihappen.crc.fillStyle = "blueviolet";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.quadraticCurveTo(this.x - 100, this.y - 40, this.x - 200, this.y);
            HabosHaihappen.crc.fillStyle = "blueviolet";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x - 200, this.y);
            HabosHaihappen.crc.quadraticCurveTo(this.x - 250, this.y - 50, this.x - 160, this.y);
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x - 200, this.y);
            HabosHaihappen.crc.quadraticCurveTo(this.x - 250, this.y + 50, this.x - 160, this.y);
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x - 100, this.y);
            HabosHaihappen.crc.quadraticCurveTo(this.x - 100, this.y - 40, this.x - 130, this.y - 30);
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x - 40, this.y + 13);
            HabosHaihappen.crc.quadraticCurveTo(this.x - 90, this.y - 35, this.x - 60, this.y + 20);
            HabosHaihappen.crc.fillStyle = "white";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x - 60, this.y + 20);
            HabosHaihappen.crc.lineTo(this.x - 45, this.y + 7);
            HabosHaihappen.crc.lineTo(this.x - 66, this.y + 10);
            HabosHaihappen.crc.lineTo(this.x - 57, this.y - 4);
            HabosHaihappen.crc.lineTo(this.x - 70, this.y);
            HabosHaihappen.crc.strokeStyle = "black";
            HabosHaihappen.crc.stroke();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x - 100, this.y);
            HabosHaihappen.crc.quadraticCurveTo(this.x - 100, this.y + 40, this.x - 130, this.y + 30);
            HabosHaihappen.crc.fillStyle = "blueviolet";
            HabosHaihappen.crc.fill();
            //Auge
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x - 35, this.y - 3, 4, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "white";
            HabosHaihappen.crc.fill();
            HabosHaihappen.crc.beginPath();
            HabosHaihappen.crc.moveTo(this.x, this.y);
            HabosHaihappen.crc.arc(this.x - 34, this.y - 3, 3, 0, 2 * Math.PI);
            HabosHaihappen.crc.fillStyle = "black";
            HabosHaihappen.crc.fill();
        }
        move() {
            //
        }
        fischFressen() {
            for (let i = 0; i < HabosHaihappen.bewegendeObjekteArray.length; i++) {
                let xdistanz = HabosHaihappen.bewegendeObjekteArray[i].x - this.x;
                let ydistanz = HabosHaihappen.bewegendeObjekteArray[i].y - this.y;
                let distanz = Math.sqrt(Math.pow(xdistanz, 2) + Math.pow(ydistanz, 2));
                if (distanz < 30 && HabosHaihappen.bewegendeObjekteArray[i] != HabosHaihappen.habo && HabosHaihappen.bewegendeObjekteArray[i].type == "kleinerFisch") {
                    HabosHaihappen.bewegendeObjekteArray.splice(i, 1);
                    this.koerpergroesse += 1;
                    HabosHaihappen.highscore = HabosHaihappen.highscore + 1;
                    HabosHaihappen.highscoreAnzeigen();
                    let kleinerFisch = new HabosHaihappen.KleinerFisch();
                    HabosHaihappen.bewegendeObjekteArray.push(kleinerFisch);
                }
            }
        }
    }
    HabosHaihappen.Habo = Habo;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=Habo.js.map