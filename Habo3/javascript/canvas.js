var HabosHaihappen;
(function (HabosHaihappen) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", habosbewegung);
    HabosHaihappen.bewegendeObjekteArray = [];
    HabosHaihappen.highscore = 0;
    let fps = 40;
    let imgData;
    function init() {
        HabosHaihappen.canvas = document.getElementsByTagName("canvas")[0];
        HabosHaihappen.canvas.addEventListener("click", futterservice);
        HabosHaihappen.crc = HabosHaihappen.canvas.getContext("2d");
        zeichneHintergrund();
        imgData = HabosHaihappen.crc.getImageData(0, 0, HabosHaihappen.canvas.width, HabosHaihappen.canvas.height);
        HabosHaihappen.refresh();
        //Kleiner Fisch
        for (let i = 0; i < 10; i++) {
            let kleinerfisch = new HabosHaihappen.KleinerFisch();
            HabosHaihappen.bewegendeObjekteArray.push(kleinerfisch);
            kleinerfisch.draw();
        }
        //Mittlerer Fisch
        for (let i = 0; i < 8; i++) {
            let mittlererfisch = new HabosHaihappen.MittlererFisch();
            HabosHaihappen.bewegendeObjekteArray.push(mittlererfisch);
            mittlererfisch.draw();
        }
        //Großer Fisch
        for (let i = 0; i < 5; i++) {
            let grosserfisch = new HabosHaihappen.GrosserFisch();
            HabosHaihappen.bewegendeObjekteArray.push(grosserfisch);
            grosserfisch.draw();
        }
        //Kugelfisch
        for (let i = 0; i < 10; i++) {
            let kugelfisch = new HabosHaihappen.Kugelfisch();
            HabosHaihappen.bewegendeObjekteArray.push(kugelfisch);
            kugelfisch.draw();
        }
        //Stern
        for (let i = 0; i < 4; i++) {
            let stern = new HabosHaihappen.Stern();
            HabosHaihappen.bewegendeObjekteArray.push(stern);
            stern.draw();
        }
        //Qualle
        for (let i = 0; i < 7; i++) {
            let qualle = new HabosHaihappen.Qualle();
            HabosHaihappen.bewegendeObjekteArray.push(qualle);
            qualle.draw();
        }
        //Habo
        for (let i = 0; i < 1; i++) {
            let habo = new HabosHaihappen.Habo();
            HabosHaihappen.bewegendeObjekteArray.push(habo);
            habo.draw();
        }
        //Luftblasen
        for (let i = 0; i < 50; i++) {
            let luftblasen = new HabosHaihappen.Luftblasen();
            HabosHaihappen.bewegendeObjekteArray.push(luftblasen);
            luftblasen.draw();
        }
        update();
    }
    function habosbewegung(_event) {
        for (let i = 0; i < HabosHaihappen.bewegendeObjekteArray.length; i++) {
            if (HabosHaihappen.bewegendeObjekteArray[i] instanceof HabosHaihappen.Habo) {
                if (_event.keyCode == 68) { //d
                    HabosHaihappen.bewegendeObjekteArray[i].x += 10;
                    if (HabosHaihappen.bewegendeObjekteArray[i].x > 1300) { //Theoretisch müsste dieser Wert 1500 sein, oder canvas.width
                        HabosHaihappen.bewegendeObjekteArray[i].x = 100; //Habe ich aber extra so geschrieben, da sonst der Spieler nicht sehen kann welcher Fisch ihm entegegen kommt und dadurch evtl. sterben könnte
                    }
                    //rechts
                }
                if (_event.keyCode == 65) { //a
                    HabosHaihappen.bewegendeObjekteArray[i].x -= 10;
                    if (HabosHaihappen.bewegendeObjekteArray[i].x < 100) { //Habe ich extra so geschrieben, da sonst der Spieler nicht sehen kann welcher Fisch ihm entegegen kommt und dadurch evtl. sterben könnte
                        HabosHaihappen.bewegendeObjekteArray[i].x = 1300; //Theoretisch müsste dieser Wert 1500 sein, oder canvas.width
                    }
                    //links
                }
                if (_event.keyCode == 83) { //s
                    HabosHaihappen.bewegendeObjekteArray[i].y += 10;
                    if (HabosHaihappen.bewegendeObjekteArray[i].y > 850) { //Wenn die y Koordinate des Fisches größer als 850 wird, dann setze ihn auf 0
                        HabosHaihappen.bewegendeObjekteArray[i].y = 0;
                    }
                    //unten
                }
                if (_event.keyCode == 87) { //w
                    HabosHaihappen.bewegendeObjekteArray[i].y -= 10;
                    if (HabosHaihappen.bewegendeObjekteArray[i].y < 0) { //Wenn die y Koordinate des Fisches kleiner als 0 ist, dann setze den Fisch auf 850
                        HabosHaihappen.bewegendeObjekteArray[i].y = 850;
                    }
                    //oben
                }
            }
        }
    }
    function futterservice(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let food = new HabosHaihappen.Futter();
        food.x = x;
        food.y = y;
        HabosHaihappen.bewegendeObjekteArray.push(food);
        food.draw();
    }
    function nameEingeben() {
        HabosHaihappen.spielerName = prompt("Deine Punkte: " + HabosHaihappen.highscore, "Bitte deinen Namen eingeben...");
        HabosHaihappen.insert();
        window.location.reload();
    }
    HabosHaihappen.nameEingeben = nameEingeben;
    function update() {
        window.setTimeout(update, 1000 / fps);
        HabosHaihappen.crc.clearRect(0, 0, HabosHaihappen.canvas.width, HabosHaihappen.canvas.height);
        HabosHaihappen.crc.putImageData(imgData, 0, 0);
        for (let i = 0; i < HabosHaihappen.bewegendeObjekteArray.length; i++) {
            HabosHaihappen.bewegendeObjekteArray[i].update();
        }
    }
    function zeichneHintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 1500, 850);
        HabosHaihappen.crc.fillStyle = "#66d0f4";
        HabosHaihappen.crc.strokeStyle = "#66d0f4";
        HabosHaihappen.crc.fill(wasser);
        HabosHaihappen.crc.stroke(wasser);
        //1. Hügel
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(-200, 850);
        HabosHaihappen.crc.quadraticCurveTo(400, 700, 800, 850);
        HabosHaihappen.crc.moveTo(1500, 850);
        HabosHaihappen.crc.moveTo(0, 850);
        HabosHaihappen.crc.strokeStyle = "#C2B280";
        HabosHaihappen.crc.fillStyle = "#C2B280";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.stroke();
        HabosHaihappen.crc.closePath();
        //2. Hügel
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(300, 850);
        HabosHaihappen.crc.quadraticCurveTo(500, 700, 900, 850);
        HabosHaihappen.crc.strokeStyle = "#C2B280";
        HabosHaihappen.crc.fillStyle = "#C2B280";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.stroke();
        HabosHaihappen.crc.closePath();
        //3. Hügel
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(500, 850);
        HabosHaihappen.crc.quadraticCurveTo(1000, 700, 1200, 850);
        HabosHaihappen.crc.strokeStyle = "#C2B280";
        HabosHaihappen.crc.fillStyle = "#C2B280";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.stroke();
        HabosHaihappen.crc.closePath();
        //4. Hügel
        HabosHaihappen.crc.moveTo(1000, 850);
        HabosHaihappen.crc.quadraticCurveTo(1200, 700, 1900, 850);
        HabosHaihappen.crc.moveTo(1500, 850);
        HabosHaihappen.crc.moveTo(0, 850);
        HabosHaihappen.crc.moveTo(0, 800);
        HabosHaihappen.crc.strokeStyle = "#C2B280";
        HabosHaihappen.crc.fillStyle = "#C2B280";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.stroke();
        HabosHaihappen.crc.closePath();
        //Stein1
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(200, 800);
        HabosHaihappen.crc.quadraticCurveTo(250, 850, 250, 770);
        HabosHaihappen.crc.quadraticCurveTo(240, 750, 220, 780);
        HabosHaihappen.crc.quadraticCurveTo(150, 790, 230, 810);
        HabosHaihappen.crc.fillStyle = "grey";
        HabosHaihappen.crc.strokeStyle = "grey";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.stroke();
        HabosHaihappen.crc.closePath();
        //Stein2
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(600, 800);
        HabosHaihappen.crc.quadraticCurveTo(650, 850, 650, 770);
        HabosHaihappen.crc.quadraticCurveTo(640, 750, 620, 780);
        HabosHaihappen.crc.quadraticCurveTo(550, 790, 630, 810);
        HabosHaihappen.crc.fillStyle = "grey";
        HabosHaihappen.crc.strokeStyle = "grey";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.stroke();
        HabosHaihappen.crc.closePath();
        //Stein3
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(800, 800);
        HabosHaihappen.crc.quadraticCurveTo(850, 850, 850, 770);
        HabosHaihappen.crc.quadraticCurveTo(840, 750, 820, 780);
        HabosHaihappen.crc.quadraticCurveTo(750, 790, 830, 810);
        HabosHaihappen.crc.fillStyle = "grey";
        HabosHaihappen.crc.strokeStyle = "grey";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.stroke();
        HabosHaihappen.crc.closePath();
        //Gras1
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(1000, 800),
            HabosHaihappen.crc.quadraticCurveTo(1000, 760, 900, 700);
        HabosHaihappen.crc.fillStyle = "green";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(1000, 800),
            HabosHaihappen.crc.quadraticCurveTo(960, 660, 1000, 650);
        HabosHaihappen.crc.fillStyle = "green";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(1000, 800),
            HabosHaihappen.crc.quadraticCurveTo(970, 660, 970, 670);
        HabosHaihappen.crc.fillStyle = "green";
        HabosHaihappen.crc.fill();
        //Gras2
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(1300, 800),
            HabosHaihappen.crc.quadraticCurveTo(1300, 760, 1200, 700);
        HabosHaihappen.crc.fillStyle = "green";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(1300, 800),
            HabosHaihappen.crc.quadraticCurveTo(1260, 660, 1300, 650);
        HabosHaihappen.crc.fillStyle = "green";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(1300, 800),
            HabosHaihappen.crc.quadraticCurveTo(1270, 660, 1270, 670);
        HabosHaihappen.crc.fillStyle = "green";
        HabosHaihappen.crc.fill();
        //Gras3
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(300, 800),
            HabosHaihappen.crc.quadraticCurveTo(300, 760, 200, 700);
        HabosHaihappen.crc.fillStyle = "green";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(300, 800),
            HabosHaihappen.crc.quadraticCurveTo(260, 660, 300, 650);
        HabosHaihappen.crc.fillStyle = "green";
        HabosHaihappen.crc.fill();
        HabosHaihappen.crc.beginPath();
        HabosHaihappen.crc.moveTo(300, 800),
            HabosHaihappen.crc.quadraticCurveTo(270, 660, 270, 670);
        HabosHaihappen.crc.fillStyle = "green";
        HabosHaihappen.crc.fill();
    }
    function highscoreAnzeigen() {
        document.getElementById("highscore").innerHTML = "";
        let prodElement = document.createElement("div");
        prodElement.innerHTML = `<div> Dein Highscore beträgt <span> ${HabosHaihappen.highscore} </span>Punkte</div>`;
        document.getElementById("highscore").appendChild(prodElement);
    }
    HabosHaihappen.highscoreAnzeigen = highscoreAnzeigen;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=canvas.js.map