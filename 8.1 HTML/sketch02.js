let bgcolor;

function setup() {
  canvas = createCanvas(200, 200);
  bgcolor = {
    r: random(255),
    g: random(255),
    b: random(255)
  };
  background(bgcolor.r, bgcolor.g, bgcolor.b);
  createP("Klik met de muis om de achtergrondkleur van de canvas te veranderen.")
}

function mousePressed() {
  bgcolor = {
    r: random(255),
    g: random(255),
    b: random(255)
  };
  background(bgcolor.r, bgcolor.g, bgcolor.b);
}

function draw() {
  // background(bgcolor.r, bgcolor.g, bgcolor.b);
  fill(0, 0, 0);
  rect(100, 100, 50, 50);
}
