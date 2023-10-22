let bgcolor = 200;
let input;

function setup() {
  canvas = createCanvas(200, 200);
  canvas.style('padding', '10px')
  input = createInput("Wijzig de tekst !")
  createP("Dit is een input box, waarvan je de canvas tekst kunt wijzigen")
}

function draw() {
  background(bgcolor);
  fill(0, 0, 0);
  text(input.value(), 10, 20)
}
