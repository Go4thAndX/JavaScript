class Bubble {
  constructor(x_coord, y_coord, radius) {
    this.x_coord = x_coord;
    this.y_coord = y_coord;
    this.radius = radius;
  }

  move() {
    this.x_coord = this.x_coord + random(-5, 5);
    this.y_coord = this.y_coord + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    noFill();
    ellipse(this.x_coord, this.y_coord, this.radius);
  }
}
