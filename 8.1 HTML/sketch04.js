let bgcolor = 100;
let slider;

function setup() {
  canvas = createCanvas(200, 200);
  canvas.style('padding', '10px')
  createP();
  slider = createSlider(1, 200, 100);
  createP("Gebruik de schuif om de grootte van de cirkel te wijzigen")
}

function draw() {
  background(bgcolor);
  fill(255, 255, 255);
  circle(100, 100, slider.value());
}
