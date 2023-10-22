

function setup() {
  createCanvas(innerWidth, innerHeight);
  x = 200;
  y = 50;
  breedte = 100;
  hoogte = 50;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(2);
  fill(255, 0, 0);
  tekenRechthoek(x, y, breedte, hoogte);
}

function tekenRechthoek(x, y, breedte, hoogte) {
  rect(x, y, breedte, hoogte);
}
