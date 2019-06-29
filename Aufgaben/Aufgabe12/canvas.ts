
namespace Task12 {
	document.addEventListener("DOMContentLoaded", init);
	export let crc: CanvasRenderingContext2D;
	export let canvas: HTMLCanvasElement;
	let renderableObjectsArray: RenderableObjects[] = [];

	let fps: number = 25;
	let imgData: ImageData;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		canvas.addEventListener("click", foodoraDelivery);
		crc = canvas.getContext("2d");
		drawBackground();
		imgData = crc.getImageData(0, 0, canvas.width, canvas.height);

		//Fisch
		for (let i: number = 0; i < 10; i++) {
			let fish1: Fish1 = new Fish1();
			renderableObjectsArray.push(fish1);
			fish1.draw();
			console.log(fish1);
		}
		//Aal
		for (let i: number = 0; i < 10; i++) {
			let fish2: Fish2 = new Fish2();
			renderableObjectsArray.push(fish2);
			fish2.draw();
			console.log(fish2);
		}
		//Luftblasen
		for (let i: number = 0; i < 65; i++) {

			let buble: Bubbles = new Bubbles();
			renderableObjectsArray.push(buble);
			buble.draw();
			console.log(buble);
		}

		update();

	}

	function foodoraDelivery(_event: MouseEvent): void {
		let x: number = _event.clientX;
		let y: number = _event.clientY;
		let food: Foodora = new Foodora();
		food.x = x - 3;
		food.y = y;
		renderableObjectsArray.push(food);
		food.draw();
	}

	function update(): void {
		window.setTimeout(update, 1000 / fps);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imgData, 0, 0);

		for (let i: number = 0; i < renderableObjectsArray.length; i++) {
			console.log(renderableObjectsArray[i]);
			renderableObjectsArray[i].update();
		}

	}



	function drawBackground(): void {
		imgData = crc.getImageData(0, 0, canvas.width, canvas.height);
		let wasser = new Path2D();
		wasser.rect(0, 0, 1000, 1000);
		crc.fillStyle = "#65a0f3";
		crc.strokeStyle = "#65a0f3";
		crc.fill(wasser);
		crc.stroke(wasser);
		let sand = new Path2D();
		sand.rect(0, 800, 1000, 1800);
		crc.fillStyle = "#e1c41d";
		crc.strokeStyle = "#e1c41d";
		crc.fill(sand);
		crc.stroke(sand);
		crc.fillStyle = "brown";
		crc.strokeStyle = "rgba(46, 204, 113, 1)";
		//Gras
		crc.beginPath(); // linker Stiel 
		crc.moveTo(200, 800);
		crc.quadraticCurveTo(180, 500, 161, 701);
		crc.stroke();
		crc.beginPath(); // linker Stiel 
		crc.moveTo(200, 800);
		crc.quadraticCurveTo(180, 500, 162, 702);
		crc.stroke();
		crc.beginPath(); // linker Stiel 
		crc.moveTo(200, 800);
		crc.quadraticCurveTo(180, 500, 163, 703);
		crc.stroke();
		crc.beginPath(); // linker Stiel 
		crc.moveTo(200, 800);
		crc.quadraticCurveTo(220, 400, 200, 785);
		crc.stroke();
		crc.beginPath(); // linker Stiel 
		crc.moveTo(200, 800);
		crc.quadraticCurveTo(220, 400, 201, 786);
		crc.stroke();
		crc.beginPath(); // linker Stiel 
		crc.moveTo(200, 800);
		crc.quadraticCurveTo(220, 400, 202, 787);
		crc.stroke();
		//Stein
		crc.beginPath();
		crc.fillStyle = "brown";
		crc.arc(900, 850, 50, 0, 2 * Math.PI);
		crc.stroke();
		crc.strokeStyle = "brown";
		crc.fill();
		//Stein2
		crc.beginPath();
		crc.fillStyle = "brown";
		crc.arc(500, 800, 50, 0, 2 * Math.PI);
		crc.stroke();
		crc.strokeStyle = "brown";
		crc.fill();
		//Stein3
		crc.beginPath();
		crc.fillStyle = "brown";
		crc.arc(200, 900, 50, 0, 2 * Math.PI);
		crc.stroke();
		crc.strokeStyle = "brown";
		crc.fill();

	}





}