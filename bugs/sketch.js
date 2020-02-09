
let stars = [];
let canvas;
let numberOfStars = 100;
let clickedStatus = 0;

function setup() {
    canvas = createCanvas(document.body.clientWidth, document.body.clientHeight);
    canvas.background(0);
    for (let i = 0; i < numberOfStars; i++) {
        stars[i] = new Star([
            random(255),
            random(255),
            random(255)
        ]);
    }
}

function draw() {
    canvas.background(0);

    for (let i = 0; i < stars.length; i++) {
        stars[i].show();
        stars[i].update();
    }
}


class Star {
    constructor(color) {
        this.x = random(0, canvas.width);
        this.y = random(0, canvas.height);
        this.z = random(canvas.width);
        this.color = color
    }

    show() {
        circle(this.x, this.y, 10);
        fill(this.color[0], this.color[1], this.color[2]);
        noStroke();
    }

    update() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);

    }
}