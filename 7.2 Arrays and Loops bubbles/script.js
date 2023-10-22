let bubbles = [];

function setup() {
  createCanvas(600, 300);
  // for (let i = 0; i < 10; i++) {
  //   let x_coord = random(width);
  //   let y_coord = random(height);
  //   let radius = random(10, 40);
  //   bubbles[i] = new Bubble(x_coord, y_coord, radius);
  
  // Stel de framesnelheid in op 2 frames per seconde (1/6 seconde per frame)
  frameRate(2);
} 

function mousePressed() {
  let radius = random(10, 50);
  let bubble = new Bubble(mouseX, mouseY, radius);
  bubbles.push(bubble);
}

function draw() {
  background(0);

  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }
}
