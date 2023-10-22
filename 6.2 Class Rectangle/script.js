let canv_width = 400;
let canv_height = 300;
let rectangle1;
let rectangle2;

function setup() {
  createCanvas(canv_width, canv_height);
  rectangle1 = new Rectangle();
  rectangle2 = new Rectangle();
  // Stel de framesnelheid in op 2 frames per seconde (1/6 seconde per frame)
  frameRate(2); 
}

function draw() {
  background(0);
  rectangle1.move();
  rectangle1.show();
  rectangle2.move();
  rectangle2.show();
}

