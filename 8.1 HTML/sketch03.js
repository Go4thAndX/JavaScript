let bgcolor;
let button;

function setup() {
  canvas = createCanvas(200, 200);
  canvas.style('padding', '10px')
  bgcolor = {
    r: random(255),
    g: random(255),
    b: random(255)
  };
  background(bgcolor.r, bgcolor.g, bgcolor.b);
  button = createButton("Button: wijzig rechthoek kleur");
  button.mousePressed(changeColor);
}

function changeColor() {
  bgcolor = (random(255))
  bgcolor = {
    r: random(255),
    g: random(255),
    b: random(255)
  };
  background(bgcolor.r, bgcolor.g, bgcolor.b);
}

function draw() {
  background(100);
  fill(bgcolor.r, bgcolor.g, bgcolor.b);
  rect(100, 100, 50, 50);
}
