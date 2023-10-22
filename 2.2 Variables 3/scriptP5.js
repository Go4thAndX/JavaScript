let circleR = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    circleR = 0;
}

function draw() {
    background(0);
    noStroke();
    fill(255);
    circle(width / 2, height / 2, circleR * 2);
    circleR++;
}