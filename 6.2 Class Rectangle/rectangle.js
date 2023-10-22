class Rectangle {
  constructor(x_coord, y_coord, shape_width, shape_height) {
    this.shape_width = 50;
    this.shape_height = 25;
    this.x_coord = canv_width / 2 - this.shape_width / 2;
    this.y_coord = canv_height / 2 - this.shape_height / 2;
    
  }

  move() {
    this.x_coord = this.x_coord + random(-10, 10);
    this.y_coord = this.y_coord + random(-10, 10);

    if (this.x_coord <= 0 || this.x_coord >= (canv_width - this.x_coord) || this.y_coord <= 0 || this.y_coord >= (canv_height - this.y_coord)) {
      this.x_coord = canv_width / 2 - this.shape_width / 2;
      this.y_coord = canv_height / 2 - this.shape_height / 2;
      print("Deze shape is buiten het canvas gekomen!")
    }
  }

  show() {
    stroke(255);
    strokeWeight(2);
    noFill();
    rect(this.x_coord, this.y_coord, this.shape_width, this.shape_height);
  }
}
