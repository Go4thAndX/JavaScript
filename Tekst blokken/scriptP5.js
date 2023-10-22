function setup() {
  createCanvas(600, 400);
  background(200);

  // Stel de tekstgrootte in
  textSize(16);
  textAlign(CENTER, CENTER); // Tekst centreren binnen elk tekstblok

  // Een reeks tekstblokken met meerdere regels
  let tekstBlokken = [
    "Dit is regel 1 met 1 blok.",
    "Dit is regel 2 met 2 blokken naast elkaar:",
    "Blok 1",
    "Blok 2",
    "Dit is regel 3 met 1 blok.",
  ];

  // Afmetingen van de tekstblokken
  let breedte = 100;
  let hoogte = 50;

  // Bereken de verticale positie om het geheel in het midden te centreren
  let verticaleMidden =
    height / 2 - ((tekstBlokken.length - 1) * (hoogte + 20)) / 2;

  // Loop door de tekstblokken en teken ze
  for (let i = 0; i < tekstBlokken.length; i++) {
    noFill(); // Geen vulkleur voor de rechthoeken
    // noStroke(); // Geen rand voor de rechthoeken

    // Bereken de horizontale positie om het geheel in het midden te centreren
    let horizontaleMidden = width / 2 - breedte / 2;

    // Voor de tweede regel, teken twee blokken naast elkaar
    if (i == 1) {
      let x1 = horizontaleMidden - breedte / 2 - 20;
      let x2 = horizontaleMidden + breedte / 2 + 20;
      rect(x1, verticaleMidden, breedte, hoogte);
      rect(x2, verticaleMidden, breedte, hoogte);
    } else {
      let x = horizontaleMidden;
      rect(x, verticaleMidden, breedte, hoogte);
    }

    fill(0); // Tekstkleur
    text(tekstBlokken[i], horizontaleMidden, verticaleMidden, breedte, hoogte); // Tekst binnen het blok

    // Pas de verticale positie aan voor het volgende blok
    verticaleMidden += hoogte + 20;
  }
}

function draw() {
  // Hier kun je eventueel animaties of verdere aanpassingen toevoegen
}
