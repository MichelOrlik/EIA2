namespace HabosHaihappen {
    export class Habo extends BewegendeObjekte {
        wert: number;
        constructor() {
            super();
            this.x = 300;
            this.y = Math.random() * canvas.height;
            this.dx = 0;
            this.dy = 0;
            this.wert = 1;
        }
        draw(): void {
            //Körper
            crc.beginPath();
            crc.moveTo(this.x, this.y); //Spitze
            crc.quadraticCurveTo(this.x - this.wert * 100, this.y + this.wert * 40, this.x - this.wert * 200, this.y);
            crc.fillStyle = "crimson";
            crc.fill();
            crc.beginPath();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x - this.wert * 100, this.y + this.wert * 20, this.x - this.wert * 200, this.y);
            crc.fillStyle = "purple";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.quadraticCurveTo(this.x - this.wert * 100, this.y - this.wert * 40, this.x - this.wert * 200, this.y);
            crc.fillStyle = "purple";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x - this.wert * 200, this.y);
            crc.quadraticCurveTo(this.x - this.wert * 250, this.y - this.wert * 50, this.x - this.wert * 160, this.y);
            crc.fill();
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x - this.wert * 200, this.y);
            crc.quadraticCurveTo(this.x - this.wert * 250, this.y + this.wert * 50, this.x - this.wert * 160, this.y);
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x - this.wert * 100, this.y);
            crc.quadraticCurveTo(this.x - this.wert * 100, this.y - this.wert * 40, this.x - this.wert * 130, this.y - this.wert * 30);
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x - this.wert * 40, this.y + this.wert * 13);
            crc.quadraticCurveTo(this.x - this.wert * 90, this.y - this.wert * 35, this.x - this.wert * 60, this.y + this.wert * 17);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x - this.wert * 60, this.y + this.wert * 17);
            crc.lineTo(this.x - this.wert * 46, this.y + this.wert * 7);
            crc.lineTo(this.x - this.wert * 64, this.y + this.wert * 10);
            crc.lineTo(this.x - this.wert * 54, this.y - this.wert * 0);
            crc.lineTo(this.x - this.wert * 68, this.y + this.wert * 2);
            crc.lineTo(this.x - this.wert * 62, this.y - this.wert * 6);
            crc.lineTo(this.x - this.wert * 71, this.y - this.wert * 7);
            crc.lineTo(this.x - this.wert * 68, this.y - this.wert * 10);
            crc.strokeStyle = "black";
            crc.stroke();
            crc.beginPath();
            crc.moveTo(this.x - this.wert * 100, this.y);
            crc.quadraticCurveTo(this.x - this.wert * 100, this.y + this.wert * 40, this.x - this.wert * 130, this.y + this.wert * 30);
            crc.fillStyle = "purple";
            crc.fill();
            //Auge
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x - this.wert * 35, this.y - this.wert * 3, this.wert * 4, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill();
            crc.beginPath();
            crc.moveTo(this.x, this.y);
            crc.arc(this.x - this.wert * 34, this.y - this.wert * 3, this.wert * 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill();
        }
        move(): void {

        }
        fischFressen() {
            for (let i = 0; i < HabosHaihappen.bewegendeObjekteArray.length; i++) {
                let xdistanz: number = HabosHaihappen.bewegendeObjekteArray[i].x - this.x;
                let ydistanz: number = HabosHaihappen.bewegendeObjekteArray[i].y - this.y;
                let distanz: number = Math.sqrt(Math.pow(xdistanz, 2) + Math.pow(ydistanz, 2));
                //Kleiner Fisch -> Lecker!
                if (distanz < 20 && HabosHaihappen.bewegendeObjekteArray[i].type == "KleinerFisch") {
                    HabosHaihappen.bewegendeObjekteArray.splice(i, 1);
                    if (this.wert > 3){
                        this.wert + 0
                    }
                    else{
                        this.wert += 0.05;  
                    }
                    HabosHaihappen.highscore = HabosHaihappen.highscore + 1;
                    console.log("Dein Punktestand beträgt " + highscore + " Punkte");
                    console.log("wert. " + this.wert);
                    HabosHaihappen.highscoreAnzeigen();
                    let kleinerFisch = new HabosHaihappen.KleinerFisch();
                    HabosHaihappen.bewegendeObjekteArray.push(kleinerFisch);
                }
                //Stern -> Lecker!
                if (distanz < 20 && HabosHaihappen.bewegendeObjekteArray[i].type == "Stern" ) {
                    HabosHaihappen.bewegendeObjekteArray.splice(i, 1);
                    if (this.wert > 3){
                        this.wert + 0
                    }
                    else{
                        this.wert += 0.05;  
                    }
                    HabosHaihappen.highscore = HabosHaihappen.highscore + 5;
                    console.log("Dein Punktestand beträgt " + highscore + " Punkte");
                    console.log("wert. " + this.wert);
                    HabosHaihappen.highscoreAnzeigen();
                    let stern = new HabosHaihappen.Stern();
                    HabosHaihappen.bewegendeObjekteArray.push(stern);
                }
                //Mittlerer Fisch -> Lecker!
                if (distanz < 20 && HabosHaihappen.bewegendeObjekteArray[i].type == "MittlererFisch" && HabosHaihappen.highscore > 10) {
                    HabosHaihappen.bewegendeObjekteArray.splice(i, 1);
                    if (this.wert > 3){
                        this.wert + 0
                    }
                    else{
                        this.wert += 0.05;  
                    }
                    HabosHaihappen.highscore = HabosHaihappen.highscore + 5;
                    console.log("Dein Punktestand beträgt " + highscore + " Punkte");
                    console.log("wert. " + this.wert);
                    HabosHaihappen.highscoreAnzeigen();
                    let mittlererFisch = new HabosHaihappen.MittlererFisch();
                    HabosHaihappen.bewegendeObjekteArray.push(mittlererFisch);
                    }
                //Mittlerer Fisch -> Tot
                if (distanz < 20 && HabosHaihappen.bewegendeObjekteArray[i].type == "MittlererFisch" && HabosHaihappen.highscore < 10) {
                    this.wert = 0;
                    nameEingeben();
                    console.log("Der Fisch war leider zu groß!");
                    }
                //Großer Fisch -> Lecker!
                if (distanz < 20 && HabosHaihappen.bewegendeObjekteArray[i].type == "GroßerFisch" && HabosHaihappen.highscore > 50) {
                    HabosHaihappen.bewegendeObjekteArray.splice(i, 1);
                    if (this.wert > 3){
                        this.wert + 0
                    }
                    else{
                        this.wert += 0.05;  
                    }
                    HabosHaihappen.highscore = HabosHaihappen.highscore + 10;
                    
                    console.log("Dein Punktestand beträgt " + highscore + " Punkte");
                    console.log("wert. " + this.wert)
                    HabosHaihappen.highscoreAnzeigen();
                    let grosserFisch = new HabosHaihappen.GrosserFisch();
                    HabosHaihappen.bewegendeObjekteArray.push(grosserFisch);
                    }
                //Großer Fisch -> Tot
                if (distanz < 20 && HabosHaihappen.bewegendeObjekteArray[i].type == "GroßerFisch" && HabosHaihappen.highscore < 50) {
                    this.wert = 0;
                    nameEingeben();
                    console.log("Der Fisch war leider zu groß!");
                    }
                //Qualle -> Habo stirbt
                if (distanz < 15 && HabosHaihappen.bewegendeObjekteArray[i].type == "Qualle") {
                    this.wert = 0;
                    console.log("Du wurdest gestochen! Ouch!");
                    //Hier muss noch das Spiel beendet werden
                    nameEingeben();
                    console.log("Funktion wurde übersprungen")
                }
                //Kugelfisch -> Habo schrumpft
                if (distanz < 15 && HabosHaihappen.bewegendeObjekteArray[i].type == "Kugelfisch") {
                    this.wert = 1;
                    HabosHaihappen.highscore = 0;
                    HabosHaihappen.highscoreAnzeigen();
                    console.log("wert. " + this.wert);
                    console.log("Dein Punktestand beträgt " + highscore + " Punkte");
                }
                
            }
        }


        }
    }

