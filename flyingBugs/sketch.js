
let stars = [];
let canvas;
let numberOfStars = 10;

function setup() {
    canvas = createCanvas(document.body.clientWidth, document.body.clientHeight);
    canvas.background(0);
    setInterval(createDots, 50);
    for (let i = 0; i < numberOfStars; i++) {
        createDots();
    }
}

function createDots() {
    stars.push(new Star([
        random(255),
        random(255),
        random(255)
    ]));
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
        this.x = random(-canvas.width, canvas.width);
        this.y = random(-canvas.width, canvas.height);
        this.z = random(canvas.width);
        this.color = color
    }

    show() {
        circle(this.x, this.y, 10);
        fill(this.color[0], this.color[1], this.color[2]);
        noStroke();
    }

    update() {
        this.x += (mouseX - this.x) / random(10, 50);
        this.y += (mouseY - this.y) / random(10, 50);

    }
}