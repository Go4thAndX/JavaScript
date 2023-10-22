// todo: Schrijf code die gelijke accties genereert als de shape een rectangle is.
// todo: Schrijf code die een actie genereert als de muis over de shape komt.
let bubbles = [];

function setup() {
  createCanvas(600, 300);

  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 60);
    let bubble = new Bubble(x, y, r);
    bubbles.push(bubble);
  }
} 


function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].mouseRollover(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}


function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++) {

    if (bubbles[i].mouseRollover(mouseX, mouseY)) {
      bubbles[i].changeColor(255);
    } else {
      bubbles[i].changeColor(0);
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}


class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    this.brightness = bright;
  }


  mouseRollover(mX, mY) {
    let d = dist(mX, mY, this.x, this.y);

    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}