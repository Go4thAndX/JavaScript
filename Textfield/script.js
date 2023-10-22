let textBoxes = [];
let amountOftextBoxes = 10;
let factor = 100;
// let minDistance = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < amountOftextBoxes; i++) {
    textBoxes[i] = createVector(
      random(-width * factor, width * factor),
      random(-height * factor, height * factor),
      random(10, 400)
    );
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let textBox of textBoxes) {
    let x = textBox.x / textBox.z;
    let y = textBox.y / textBox.z;
    fill(255, 0, 0);
    textFont('Cambria', 100);
    textAlign(CENTER, CENTER);
    text("coffeeshop Aarden", x, y)
    textBox.z -= 2
    if (textBox.z < 10) {
      textBox.x = random(-width * factor, width * factor),
      textBox.y = random(-height * factor, height * factor),
      textBox.z = 400;
    }
  } 
}
