let stars = [];
let amountOfStars = 500;
let factor = 100;


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < amountOfStars; i++) {
    // De `createVector()` functie maakt een object met een `x` en `y` eigenschap.
    stars[i] = createVector(
      random(-width * factor, width * factor),
      random(-height * factor, height * factor),
      random(10, 400)
      );
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let star of stars) {
    // De `x` en `y` eigenschappen van het `star` object worden gedeeld door de `z` eigenschap.
    let x = star.x / star.z;
    let y = star.y / star.z;
    // De `map()` functie wordt gebruikt om een waarde van het ene bereik naar het andere te converteren.
    // Specifiek neemt het de waarde van de `z` eigenschap van een object genaamd `star` en zet het om
    // van een bereik van 0 tot 400 naar een bereik van 0 tot 20.
    // De resulterende waarde wordt vervolgens toegewezen aan een variabele genaamd `zScaling`.
    // 
    let zScaling = map(star.z, 0, 400, 10, 1);
    fill(255);
    noStroke()
    circle(x, y, zScaling);
    star.z -= 1;

    if (star.z < 10) {
      star.x = random(-width * factor, width * factor),
      star.y = random(-height * factor, height * factor),
      star.z = 400;
    }
  } 
}
