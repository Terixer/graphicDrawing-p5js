let color = 0;

function setup() {
    canvas = createCanvas(960, 680);
    canvas.background(0);

}

function draw() {
    color = map(mouseX, 0, width, 0, 255);

    background(color);
    fill(250, 30, 55);
}


