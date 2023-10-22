function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  let centerX = width / 2;
  let centerY = height / 2;
  let rectWidth = 500;
  let rectHeight = 100;
  let rectX = centerX - rectWidth / 2;
  let rectY = centerY - rectHeight / 2;
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(0);
  rect(rectX, rectY, rectWidth, rectHeight);
  fill(200)
  text("Tekst in het centrum van de rechthoek", centerX, centerY);
}
