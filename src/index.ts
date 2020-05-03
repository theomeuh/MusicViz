import { plotCircle } from "./draw";

var frame = 0;  // Animation frame
init();

function init() {
    window.requestAnimationFrame(draw);
}

function draw() {
    const canvas = <HTMLCanvasElement>document.getElementById("canvas");
    const context = canvas.getContext("2d");

    canvas.style.border = '1px solid #63eccd';
    canvas.width = 1600;
    canvas.height = 850;

    context.translate(canvas.width / 2, canvas.height / 2)
    context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    // context.save();

    plotCircle(context, 200, frame);
    // context.restore();

    frame++;
    window.requestAnimationFrame(draw);
}
