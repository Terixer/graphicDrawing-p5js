
let stars = [];
let canvas;
let numberOfStars = 1200;
let speed = 20;
let img;

function setup() {
    canvas = createCanvas(document.body.clientWidth, document.body.clientHeight);
    cockpitCanvas = createCanvas(document.body.clientWidth, document.body.clientHeight);
    canvas.background(0);
    for (let i = 0; i < numberOfStars; i++) {
        stars.push(new Star);
    }
    img = loadImage('/cockpit.png');
    noCursor();

}

function draw() {

    canvas.background(0);


    canvas.translate(mouseX, mouseY);
    for (let i = 0; i < stars.length; i++) {
        stars[i].show();
        stars[i].update();
    }
    translate(-mouseX, -mouseY);

    image(img, 0, 0);



}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        console.log("up")
        speed = speed + random(5);
        console.log(speed);
    } else if (keyCode === DOWN_ARROW) {
        console.log("down")
        if (speed > 6) {
            speed = speed - random(5);
        }
    }
}


class Star {
    constructor() {
        this.x = random(-canvas.width, canvas.width);
        this.y = random(-canvas.width, canvas.height);
        this.z = random(width);
        this.pz = this.z;
    }

    show() {

        fill(255);
        noStroke();

        const sx = map(this.x / this.z, 0, 1, 0, width);
        const sy = map(this.y / this.z, 0, 1, 0, height);

        const r = map(this.z, 0, width, 16, 0);
        ellipse(sx, sy, r, r);

        stroke(255);

        var px = map(this.x / this.pz, 0, 1, 0, width);
        var py = map(this.y / this.pz, 0, 1, 0, height);


        this.pz = this.z;

        line(px, py, sx, sy);


    }

    update() {
        this.z -= speed;
        if (this.z < 1) {
            this.x = random(-canvas.width, canvas.width);
            this.y = random(-canvas.width, canvas.height);
            this.z = random(width);
            this.pz = this.z
        }
    }
}