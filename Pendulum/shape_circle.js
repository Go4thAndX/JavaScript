// Laat tekst zien op het scherm
let testText = "Test";
console.log(testText);
document.write("Test");

// Maak een canvas element aan
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

// Haal de context van de canvas
const ctx = canvas.getContext("2d");

// Stel de stijl van de cirkel in
ctx.fillStyle = "#FF0000";

// Teken een cirkel op de canvas
/*ctx.beginPath();
ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
ctx.fill();
*/

let x = 0;
let y = 0;

setInterval(() => {
  // Genereer een willekeurig getal
  const randomNumber = Math.random();

  // Verplaats de cirkel naar rechts
  x += randomNumber;

  // Verplaats de cirkel naar onder
  y += randomNumber;

  // Teken de cirkel op de nieuwe locatie
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2, true);
  ctx.fill();
}, 100);
