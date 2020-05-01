init();

function init() {
    window.requestAnimationFrame(draw);
}

function plotSine(ctx: CanvasRenderingContext2D, xOffset: number, yOffset: number) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const scale = 20;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(66,44,255)";

    let x = 4;
    let y = 0;
    const amplitude = 40;
    const frequency = 20;
    ctx.moveTo(x, y + yOffset);
    while (x < width) {
        y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency);
        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke();

}
function draw() {
    const canvas = <HTMLCanvasElement>document.getElementById("canvas");
    const context = canvas.getContext("2d");

    canvas.style.border = '1px solid #63eccd';
    canvas.width = 1500;
    canvas.height = 700;

    context.clearRect(0, 0, canvas.width, canvas.height);
    // context.save();

    plotSine(context, step, 50);
    // context.restore();

    step += 4;
    window.requestAnimationFrame(draw);
}

var step = -4;
