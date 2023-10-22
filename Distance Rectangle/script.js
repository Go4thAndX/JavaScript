function setup() {
    createCanvas(600, 300);
}

function draw() {
    background(100);
    fill(255);
    stroke(0);
    strokeWeight(2);
    
    let x1 = 100;
    let y1 = 50;
    let w1 = 100;
    let h1 = 50
    let x2 = 300;
    let y2 = 100;
    let w2 = 100;
    let h2 = 100
    rect(x1, y1, w1, h1);
    rect(x2, y2, w2, h2);
}

function testOverlap(){
    
}