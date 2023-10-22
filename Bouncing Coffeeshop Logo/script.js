// Bouncing Coffeeshop Logo
// Jan George Koomen
// 2023-10-16

let x;
let y;
let xspeed;
let yspeed;
let logo;


function preload() {
  logo = loadImage('Coffeeshop_aarden_logo_wit.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 2;
  yspeed = 2;
}


function draw() {
  background(0);
  image(logo, x, y);
  x = x + xspeed;
  y = y + yspeed;

  if (x + logo.width >= width) {
    xspeed = -xspeed;
    x = width - logo.width;
  }
  else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
  }
  
  if (y + logo.height >= height) {
    yspeed = -yspeed;
    y = height - logo.height;
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
  }
}