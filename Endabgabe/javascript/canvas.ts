namespace HabosHaihappen {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", habosbewegung);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let bewegendeObjekteArray: BewegendeObjekte[] = [];

    let fps: number = 40;
    let imgData: ImageData;
 export let habo: Habo;


    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", futterservice);
        crc = canvas.getContext("2d");
        zeichneHintergrund();
        imgData = crc.getImageData(0, 0, canvas.width, canvas.height);

        //Kleiner Fisch
        for (let i: number = 0; i < 10; i++) {
            let kleinerfisch: KleinerFisch = new KleinerFisch();
            bewegendeObjekteArray.push(kleinerfisch);
            kleinerfisch.draw();
            console.log(kleinerfisch);
        }
        //Mittlerer Fisch
        for (let i: number = 0; i < 8; i++) {
            let mittlererfisch: MittlererFisch = new MittlererFisch();
            bewegendeObjekteArray.push(mittlererfisch);
            mittlererfisch.draw();
            console.log(mittlererfisch);
        }

        //Großer Fisch
        for (let i: number = 0; i < 5; i++) {
            let grosserfisch: GrosserFisch = new GrosserFisch();
            bewegendeObjekteArray.push(grosserfisch);
            grosserfisch.draw();
            console.log(grosserfisch);
        }
        //Kugelfisch
        for (let i: number = 0; i < 10; i++) {
            let kugelfisch: Kugelfisch = new Kugelfisch();
            bewegendeObjekteArray.push(kugelfisch);
            kugelfisch.draw();
            console.log(kugelfisch);
        }
        //Stern
        for (let i: number = 0; i < 4; i++) {
            let stern: Stern = new Stern();
            bewegendeObjekteArray.push(stern);
            stern.draw();
            console.log(stern);
        }
        //Qualle
        for (let i: number = 0; i < 7; i++) {
            let qualle: Qualle = new Qualle();
            bewegendeObjekteArray.push(qualle);
            qualle.draw();
            console.log(qualle);
        }
        //Habo
        for (let i: number = 0; i < 1; i++) {
            let habo: Habo = new Habo();
            bewegendeObjekteArray.push(habo);
            habo.draw();
            console.log(habo);
        }
        //Luftblasen
        for (let i: number = 0; i < 50; i++) {
            let luftblasen: Luftblasen = new Luftblasen();
            bewegendeObjekteArray.push(luftblasen);
            luftblasen.draw();
            console.log(luftblasen);
        }

        update();

    }
    function habosbewegung(_event: KeyboardEvent){
        if (_event.keyCode == 39) {
            habo.x += 10;
        }
        if (_event.keyCode == 37) {
            habo.x -= 10;
        }
        if (_event.keyCode == 40) {
            habo.y += 10;
        }
        if (_event.keyCode == 38) {
            habo.y -= 10;
        }
    }
    function futterservice(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let food: Futter = new Futter();
        food.x = x;
        food.y = y;
        bewegendeObjekteArray.push(food);
        food.draw();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < bewegendeObjekteArray.length; i++) {
            console.log(bewegendeObjekteArray[i]);
            bewegendeObjekteArray[i].update();
        }

    }
    function zeichneHintergrund(): void {
        let wasser: Path2D = new Path2D();
        wasser.rect(0, 0, 1500, 850);
        crc.fillStyle = "#66d0f4";
        crc.strokeStyle = "#66d0f4";
        crc.fill(wasser);
        crc.stroke(wasser);
        //1. Hügel
        crc.beginPath();
        crc.moveTo(-200, 850);
        crc.quadraticCurveTo(400, 700, 800, 850);
        crc.moveTo(1500, 850);
        crc.moveTo(0, 850);
        crc.strokeStyle = "#C2B280";
        crc.fillStyle = "#C2B280";
        crc.fill();
        crc.stroke();
        crc.closePath();
        //2. Hügel
        crc.beginPath();
        crc.moveTo(300, 850);
        crc.quadraticCurveTo(500, 700, 900, 850);
        crc.strokeStyle = "#C2B280";
        crc.fillStyle = "##C2B280";
        crc.fill();
        crc.stroke();
        crc.closePath();
        //3. Hügel
        crc.beginPath();
        crc.moveTo(500, 850);
        crc.quadraticCurveTo(1000, 700, 1200, 850);
        crc.strokeStyle = "#C2B280";
        crc.fillStyle = "#C2B280";
        crc.fill();
        crc.stroke();
        crc.closePath();
        //4. Hügel
        crc.moveTo(1000, 850);
        crc.quadraticCurveTo(1200, 700, 1900, 850);
        crc.moveTo(1500, 850);
        crc.moveTo(0, 850);
        crc.moveTo(0, 800);
        crc.strokeStyle = "#C2B280";
        crc.fillStyle = "#C2B280";
        crc.fill();
        crc.stroke();
        crc.closePath();
        //Stein1
        crc.beginPath();
        crc.moveTo(200, 800);
        crc.quadraticCurveTo(250, 850, 250, 770);
        crc.quadraticCurveTo(240, 750, 220, 780)
        crc.quadraticCurveTo(150, 790, 230, 810)
        crc.fillStyle = "grey";
        crc.strokeStyle = "grey";
        crc.fill();
        crc.stroke();
        crc.closePath();
        //Stein2
        crc.beginPath();
        crc.moveTo(600, 800);
        crc.quadraticCurveTo(650, 850, 650, 770);
        crc.quadraticCurveTo(640, 750, 620, 780)
        crc.quadraticCurveTo(550, 790, 630, 810)
        crc.fillStyle = "grey";
        crc.strokeStyle = "grey";
        crc.fill();
        crc.stroke();
        crc.closePath();
        //Stein3
        crc.beginPath();
        crc.moveTo(800, 800);
        crc.quadraticCurveTo(850, 850, 850, 770);
        crc.quadraticCurveTo(840, 750, 820, 780)
        crc.quadraticCurveTo(750, 790, 830, 810)
        crc.fillStyle = "grey";
        crc.strokeStyle = "grey";
        crc.fill();
        crc.stroke();
        crc.closePath();
        //Gras1
        crc.beginPath();
        crc.moveTo(1000, 800),
        crc.quadraticCurveTo(1000, 760, 900, 700);
        crc.fillStyle = "green";
        crc.fill();
        crc.beginPath();
        crc.moveTo(1000, 800),
        crc.quadraticCurveTo(960, 660, 1000, 650);
        crc.fillStyle = "green";
        crc.fill();
        crc.beginPath();
        crc.moveTo(1000, 800),
        crc.quadraticCurveTo(970, 660, 970, 670);
        crc.fillStyle = "green";
        crc.fill();
        //Gras2
        crc.beginPath();
        crc.moveTo(1300, 800),
        crc.quadraticCurveTo(1300, 760, 1200, 700);
        crc.fillStyle = "green";
        crc.fill();
        crc.beginPath();
        crc.moveTo(1300, 800),
        crc.quadraticCurveTo(1260, 660, 1300, 650);
        crc.fillStyle = "green";
        crc.fill();
        crc.beginPath();
        crc.moveTo(1300, 800),
        crc.quadraticCurveTo(1270, 660, 1270, 670);
        crc.fillStyle = "green";
        crc.fill();
        //Gras3
        crc.beginPath();
        crc.moveTo(300, 800),
        crc.quadraticCurveTo(300, 760, 200, 700);
        crc.fillStyle = "green";
        crc.fill();
        crc.beginPath();
        crc.moveTo(300, 800),
        crc.quadraticCurveTo(260, 660, 300, 650);
        crc.fillStyle = "green";
        crc.fill();
        crc.beginPath();
        crc.moveTo(300, 800),
        crc.quadraticCurveTo(270, 660, 270, 670);
        crc.fillStyle = "green";
        crc.fill();
    }
}