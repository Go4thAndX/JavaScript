let rectangle1;
let rectangle2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectangle1 = new Rectangle();
  rectangle2 = new Rectangle();
  // Stel de framesnelheid in op 2 frames per seconde (1/6 seconde per frame)
  frameRate(2); 
}

function draw() {
  background(0);
  rectangle1.move();
  rectangle2.move();
  rectangle1.show();
  rectangle2.show();
}

class Rectangle {
  constructor(x_coord,
              y_coord,
              rect_width = 100,
              rect_height = 50
              )
  {
    x_coord = windowWidth / 2 - rect_width / 2;
    y_coord = windowHeight / 2 - rect_height / 2;
    this.x_coord = x_coord;
    this.y_coord = y_coord;
    this.rect_width = rect_width;
    this.rect_height = rect_height;
  }

  move() {
    this.x_coord = this.x_coord + random(-10, 10);
    this.y_coord = this.y_coord + random(-10, 10);

    // if (this.x_coord <= 0 || this.x_coord >= (windowWidth - this.x_coord) || this.y_coord <= 0 || this.y_coord >= (windowHeight - this.y_coord)) {
    //   x_coord = windowWidth / 2 - rect_width / 2;
    //   y_coord = windowHeight / 2 - rect_height / 2;
    //   }
    }

  show() {
    stroke(255);
    strokeWeight(2);
    noFill();
    rect(this.x_coord, this.y_coord, this.rect_width, this.rect_height);
  }
}
