let canv_width = 400;
let canv_height = 300;
let rectangles = [];
amount = 2;

function setup() {
  createCanvas(canv_width, canv_height);

  for (let i = 0; i < amount; i++) {
    let x = random(0, canv_width / 2);
    let y = random(0, canv_height / 2);
    rectangles[i] = new Rectangle(x, y);
  }
  // Stel de framesnelheid in op 2 frames per seconde (1/6 seconde per frame)
  frameRate(2); 
}

function draw() {
  background(0);
  
  for (let i = 0; i < amount; i++) {
    rectangles[i].move();
    rectangles[i].show();
  }
}
