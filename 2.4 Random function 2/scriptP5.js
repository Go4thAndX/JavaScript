let x, y, r, g, b;
let fillA = 0;
let circleR = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    r = random(255);
    g = 0;
    b = random(255);
    x = random(width);
    y = random(height);
    fillA = random(255);
    circleR = random(50);
    noStroke();
    fill(r, g, b, fillA);
    circle(x, y, circleR);
}