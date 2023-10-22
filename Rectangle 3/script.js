let rechthoek;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rechthoek = new Rechthoek(300, 50, 300, 150);
}

function draw() {
  background(0);
  stroke(0, 0, 255);
  strokeWeight(5);
  fill(0, 255, 0);
  rechthoek.teken();
}

class Rechthoek {
  constructor(x, y, breedte, hoogte) {
    this.x = x;
    this.y = y;
    this.breedte = breedte;
    this.hoogte = hoogte;
  }

  teken() {
    rect(this.x, this.y, this.breedte, this.hoogte);
  }
}
