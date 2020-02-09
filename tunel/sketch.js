
let circles = [];
let canvas;
let timer;

function setup() {
    canvas = createCanvas(960, 680);
    addTunelCircle();
    setInterval(addTunelCircle, 1300);
    setInterval(clearUnusedCircles, 1000);

}

function draw() {
    for (let i = 0; i < circles.length; i++) {
        circles[i].show();
        circles[i].update();
    }
}

function clearUnusedCircles() {
    for (let i = 0; i < circles.length; i++) {
        if (circles[i].diameter >= 960) {
            circles[i].destroy();
            circles.splice(i, 1);
        }
    }
}

function addTunelCircle() {
    circles.push(new TunelCircle());
}



class TunelCircle {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.diameter = 10;
        this.background = [
            random(255),
            random(255),
            random(255)
        ]
    }

    show() {
        circle(this.x, this.y, this.diameter);
        fill(this.background[0], this.background[1], this.background[2]);
        strokeWeight(3);
    }

    update() {
        this.diameter *= 1.055;
    }

    destroy() {
        remove();
    }
}