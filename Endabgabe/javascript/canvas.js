var HabosHaihappen;
(function (HabosHaihappen) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", habosbewegung);
    HabosHaihappen.bewegendeObjekteArray = [];
    HabosHaihappen.punktzahl = 0;
    let fps = 40;
    let imgData;
    HabosHaihappen.highscore = 0;
    console.log(HabosHaihappen.highscore);
    function init() {
        HabosHaihappen.canvas = document.getElementsByTagName("canvas")[0];
        HabosHaihappen.canvas.addEventListener("click", futterservice);
        HabosHaihappen.crc = HabosHaihappen.canvas.getContext("2d");
        zeichneHintergrund();
        imgData = HabosHaihappen.crc.getImageData(0, 0, HabosHaihappen.canvas.width, HabosHaihappen.canvas.height);
        //Kleiner Fisch
        for (let i = 0; i < 10; i++) {
            let kleinerfisch = new HabosHaihappen.KleinerFisch();
            HabosHaihappen.bewegendeObjekteArray.push(kleinerfisch);
            kleinerfisch.draw();
            console.log(kleinerfisch);
        }
        //Mittlerer Fisch
        for (let i = 0; i < 8; i++) {
            let mittlererfisch = new HabosHaihappen.MittlererFisch();
            HabosHaihappen.bewegendeObjekteArray.push(mittlererfisch);
            mittlererfisch.draw();
            console.log(mittlererfisch);
        }
        //Großer Fisch
        for (let i = 0; i < 5; i++) {
            let grosserfisch = new HabosHaihappen.GrosserFisch();
            HabosHaihappen.bewegendeObjekteArray.push(grosserfisch);
            grosserfisch.draw();
            console.log(grosserfisch);
        }
        //Kugelfisch
        for (let i = 0; i < 10; i++) {
            let kugelfisch = new HabosHaihappen.Kugelfisch();
            HabosHaihappen.bewegendeObjekteArray.push(kugelfisch);
            kugelfisch.draw();
            console.log(kugelfisch);
        }
        //Stern
        for (let i = 0; i < 4; i++) {
            let stern = new HabosHaihappen.Stern();
            HabosHaihappen.bewegendeObjekteArray.push(stern);
            stern.draw();
            console.log(stern);
        }
        //Qualle
        for (let i = 0; i < 7; i++) {
            let qualle = new HabosHaihappen.Qualle();
            HabosHaihappen.bewegendeObjekteArray.push(qualle);
            qualle.draw();
            console.log(qualle);
        }
        //Habo
        for (let i = 0; i < 1; i++) {
            let habo = new HabosHaihappen.Habo();
            HabosHaihappen.bewegendeObjekteArray.push(habo);
            habo.draw();
            console.log(habo);
        }
        //Luftblasen
        for (let i = 0; i < 50; i++) {
            let luftblasen = new HabosHaihappen.Luftblasen();
            HabosHaihappen.bewegendeObjekteArray.push(luftblasen);
            luftblasen.draw();
            console.log(luftblasen);
        }
        update();
    }
    function habosbewegung(_event) {
        for (let i = 0; i < HabosHaihappen.bewegendeObjekteArray.length; i++) {
            if (HabosHaihappen.bewegendeObjekteArray[i] instanceof HabosHaihappen.Habo) {
                if (_event.keyCode == 68) { //d
                    HabosHaihappen.bewegendeObjekteArray[i].x += 10;
                    //rechts
                }
                if (_event.keyCode == 65) { //a
                    HabosHaihappen.bewegendeObjekteArray[i].x -= 10;
                    //links
                }
                if (_event.keyCode == 83) { //s
                    HabosHaihappen.bewegendeObjekteArray[i].y += 10;
                    //unten
                }
                if (_event.keyCode == 87) { //w
                    HabosHaihappen.bewegendeObjekteArray[i].y -= 10;
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
    let timeout;
    function update() {
        window.setTimeout(update, 1000 / fps);
        HabosHaihappen.crc.clearRect(0, 0, HabosHaihappen.canvas.width, HabosHaihappen.canvas.height);
        HabosHaihappen.crc.putImageData(imgData, 0, 0);
        for (let i = 0; i < HabosHaihappen.bewegendeObjekteArray.length; i++) {
            console.log(HabosHaihappen.bewegendeObjekteArray[i]);
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
        HabosHaihappen.crc.fillStyle = "##C2B280";
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
        let divInHTML = document.createElement("div");
        divInHTML.innerHTML = `<div> Dein Highscore: ${HabosHaihappen.highscore}</div>`;
        document.getElementById("highscore").appendChild(divInHTML);
    }
    HabosHaihappen.highscoreAnzeigen = highscoreAnzeigen;
})(HabosHaihappen || (HabosHaihappen = {}));
//# sourceMappingURL=canvas.js.map