let canvas;
let p1;
let p2;
let h1;
let h2;
let rect_x = 100;  
let rect_y = 100;
let x = 300;
let y = 200 + 110;


function setup() {
  canvas = createCanvas(200, 200);
  canvas.position(300, 110);
  p1 = createP("Dit is een nog een paragraaf.");
  h1 = createElement("h1", "Dit is een nieuwe kop.");
  h1.position(x, y);
  h2 = createElement("h2", "Dit is een nieuwe subkop.")
  h2.position(600, 100);
  p2 = createElement(p2, "Klik op de muis om wijzigingen te<br> bewerkstelligen.");
  p2.position(600, 200)
  p2.style('text-align', 'center');
  p2.style("border", "solid");
  p2.style("border-width", "2px");
  p2.style("width", "300px");
  p2.style("background-color", "yellow");
  p2.style("color", "red");
  p2.style("font-size", "20px");
  p2.style("font-family", "Cambria");
  p2.style("font-style", "italic");
  p2.style("font-weight", "bold");
  p2.style("text-decoration", "underline");
  p2.style("padding", "20px");
}


let textChange = false;
function mousePressed() {
  
  if (textChange) {
    h1.html("Dit is een nieuwe tekst van de kop,<br> die verschijnt met een muisKlik."); 
  } else {
    h1.html("Dit is weer de oude tekst van de kop,<br>die verschijnt met nog een muisKlik.");
  }
  textChange = !textChange;
  
  createP("Dit is een nieuwe paragraaf,<br> die verschijnt met een muisKlik.");
  
  // let position = createP.position();
  // createP.html("Dit is een nieuwe paragraaf,<br> die verschijnt met een muisKlik,<br>op de X-positie:" + position.x + ", Y-positie: "  + position.y + ".");
  
}

function draw() {
  background(200);
  fill(255, 0, 0);
  rect(rect_x, rect_y, 50, 50);
  rect_x += random (-1, 1);
  rect_y += random (-1, 1);
  h1.position(x, y);
  x += random (-1, 1);
  y += random (-1, 1);
}
