var Task12;
(function (Task12) {
    document.addEventListener("DOMContentLoaded", init);
    let renderableObjectsArray = [];
    let fps = 25;
    let imgData;
    function init() {
        Task12.canvas = document.getElementsByTagName("canvas")[0];
        Task12.canvas.addEventListener("click", foodoraDelivery);
        Task12.crc = Task12.canvas.getContext("2d");
        drawBackground();
        imgData = Task12.crc.getImageData(0, 0, Task12.canvas.width, Task12.canvas.height);
        //Fisch
        for (let i = 0; i < 10; i++) {
            let fish1 = new Task12.Fish1();
            renderableObjectsArray.push(fish1);
            fish1.draw();
            console.log(fish1);
        }
        //Aal
        for (let i = 0; i < 10; i++) {
            let fish2 = new Task12.Fish2();
            renderableObjectsArray.push(fish2);
            fish2.draw();
            console.log(fish2);
        }
        //Luftblasen
        for (let i = 0; i < 65; i++) {
            let buble = new Task12.Bubbles();
            renderableObjectsArray.push(buble);
            buble.draw();
            console.log(buble);
        }
        update();
    }
    function foodoraDelivery(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let food = new Task12.Foodora();
        food.x = x - 3;
        food.y = y;
        renderableObjectsArray.push(food);
        food.draw();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Task12.crc.clearRect(0, 0, Task12.canvas.width, Task12.canvas.height);
        Task12.crc.putImageData(imgData, 0, 0);
        for (let i = 0; i < renderableObjectsArray.length; i++) {
            console.log(renderableObjectsArray[i]);
            renderableObjectsArray[i].update();
        }
    }
    function drawBackground() {
        imgData = Task12.crc.getImageData(0, 0, Task12.canvas.width, Task12.canvas.height);
        let wasser = new Path2D();
        wasser.rect(0, 0, 1000, 1000);
        Task12.crc.fillStyle = "#65a0f3";
        Task12.crc.strokeStyle = "#65a0f3";
        Task12.crc.fill(wasser);
        Task12.crc.stroke(wasser);
        let sand = new Path2D();
        sand.rect(0, 800, 1000, 1800);
        Task12.crc.fillStyle = "#e1c41d";
        Task12.crc.strokeStyle = "#e1c41d";
        Task12.crc.fill(sand);
        Task12.crc.stroke(sand);
        Task12.crc.fillStyle = "brown";
        Task12.crc.strokeStyle = "rgba(46, 204, 113, 1)";
        //Gras
        Task12.crc.beginPath(); // linker Stiel 
        Task12.crc.moveTo(200, 800);
        Task12.crc.quadraticCurveTo(180, 500, 161, 701);
        Task12.crc.stroke();
        Task12.crc.beginPath(); // linker Stiel 
        Task12.crc.moveTo(200, 800);
        Task12.crc.quadraticCurveTo(180, 500, 162, 702);
        Task12.crc.stroke();
        Task12.crc.beginPath(); // linker Stiel 
        Task12.crc.moveTo(200, 800);
        Task12.crc.quadraticCurveTo(180, 500, 163, 703);
        Task12.crc.stroke();
        Task12.crc.beginPath(); // linker Stiel 
        Task12.crc.moveTo(200, 800);
        Task12.crc.quadraticCurveTo(220, 400, 200, 785);
        Task12.crc.stroke();
        Task12.crc.beginPath(); // linker Stiel 
        Task12.crc.moveTo(200, 800);
        Task12.crc.quadraticCurveTo(220, 400, 201, 786);
        Task12.crc.stroke();
        Task12.crc.beginPath(); // linker Stiel 
        Task12.crc.moveTo(200, 800);
        Task12.crc.quadraticCurveTo(220, 400, 202, 787);
        Task12.crc.stroke();
        //Stein
        Task12.crc.beginPath();
        Task12.crc.fillStyle = "brown";
        Task12.crc.arc(900, 850, 50, 0, 2 * Math.PI);
        Task12.crc.stroke();
        Task12.crc.strokeStyle = "brown";
        Task12.crc.fill();
        //Stein2
        Task12.crc.beginPath();
        Task12.crc.fillStyle = "brown";
        Task12.crc.arc(500, 800, 50, 0, 2 * Math.PI);
        Task12.crc.stroke();
        Task12.crc.strokeStyle = "brown";
        Task12.crc.fill();
        //Stein3
        Task12.crc.beginPath();
        Task12.crc.fillStyle = "brown";
        Task12.crc.arc(200, 900, 50, 0, 2 * Math.PI);
        Task12.crc.stroke();
        Task12.crc.strokeStyle = "brown";
        Task12.crc.fill();
    }
})(Task12 || (Task12 = {}));
//# sourceMappingURL=canvas.js.map