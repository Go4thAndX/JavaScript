// Dit is een eenvoudige structuur om een cirkel op het canvas te tekenen wanneer je op een knop klikt en als je op de andere knop klikt verwijder je de cirkel weer.

// Variabelen declareren:
// In dit gedeelte declareer je variabelen die je later in je programma zult gebruiken.
let canvas;
let circleX, circleY;
let buttonDrawCircle;
let buttonRemoveCircle;
let canvasX, canvasY;

// De setup functie:
// In de setup functie configureer je het canvas en initialiseer je eventuele variabelen of objecten die je nodig hebt. Hier worden de knoppen gemaakt, de positie bepaald waar de knoppen op het scherm komen en wordt een functie gekoppeld aan het activeren van de knop (met de muis op de knop staan en dan op de muis klikken).
function setup() {
  canvas = createCanvas(200, 200);
  // Dit is de absolute positie van het canvas op het scherm.
  canvasX = 10
  canvasY = 120
  canvas.position(canvasX, canvasY)
  background(100);
  // Door de breedte en hoogte van het canvas beiden te delen door 2 komt het centrum van de cirkel in het centrum van het canvas.
  circleX = width / 2;
  circleY = height / 2;
  // De positie van de knop wordt bepaald aan de hand van de positie en de de breedte van het canvas.
  buttonDrawCircle = createButton("Teken cirkel");
  buttonDrawCircle.position(canvasX + width + 10, canvasY)
  buttonDrawCircle.mousePressed(drawCircle);
  buttonRemoveCircle = createButton("Wis cirkel");
  buttonRemoveCircle.position(canvasX + width + 10, canvasY + height - 20)
  buttonRemoveCircle.mousePressed(clearCircle);
}

// De draw functie (of een andere functie):
// In de draw functie kun je code plaatsen die continu wordt uitgevoerd. Dit is waar je normaal gesproken animatie of beweging zou implementeren. In dit geval wil je echter wachten tot er op de knop wordt geklikt voordat je een cirkel tekent, dus je kunt een lege draw functie hebben of zelfs helemaal geen draw functie als deze niet nodig is.
function draw() {
  // Je kunt nog extra code toevoegen voor animatie hier (optioneel).
}

// Andere functies:
// Je kunt aanvullende functies toevoegen om de logica voor het tekenen van de cirkel te scheiden van de setup functie. Hier is een voorbeeld van een functie die wordt aangeroepen wanneer op de knop wordt geklikt:
function drawCircle() {
  // Dit is de relatieve positie op het scherm maar de absolute positie van de cirkel op het canvas.
  circle(circleX, circleY, 100);
}

function clearCircle() {
  // Wis het canvas
  background(100);
}





