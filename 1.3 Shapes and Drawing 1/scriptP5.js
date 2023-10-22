windowWidth = 600;
windowHeight = 600;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    // De `background()` functie tekent een achtergrond op het canvas. De `background()` functie neemt drie argumenten: de hoeveelheid rood, groen en blauw in de achtergrond. In dit geval is de achtergrond een grijstint, omdat er maar 1 argument gekozen is, waarbij 0 zwart is.
    background(200);
    // De `fill()` functie bepaalt de kleur van de vormen die getekend worden. De `fill()` functie neemt drie argumenten: de hoeveelheid rood, groen en blauw in de vorm. In dit geval is de vorm rood.
    fill(255, 0, 0);
    // De `rectMode()` functie bepaalt hoe de coördinaten van de `rect()` functie geïnterpreteerd worden. De `rectMode()` functie neemt één argument: de modus. De modus kan `CORNER`, `CORNERS`, `CENTER` of `RADIUS` zijn. In dit geval wordt de modus op `CENTER` gezet. Dit betekent dat de coördinaten van de `rect()` functie het midden van de rechthoek aangeven.
    // De stroke() functie bepaalt de kleur van de rand van een vorm. De stroke() functie neemt drie argumenten: de hoeveelheid rood, groen en blauw in de rand. In dit geval is de rand zwart.
    stroke(0, 0, 0);
    // De strokeWeight() functie bepaalt de dikte van de rand van een vorm. De strokeWeight() functie neemt één argument: de dikte van de rand. In dit geval is de rand 5 pixels dik.
    strokeWeight(20);
    rectMode(CENTER);
    // Deze code tekent een rechthoek op een canvas. De `rect()` functie neemt vier argumenten: de x- en y-coördinaten van de linkerbovenhoek van de rechthoek en de breedte en hoogte van de rechthoek. In dit geval tekent de code een rechthoek met een breedte en hoogte van 150 pixels, beginnend op de x-coördinaat 200 en de y-coördinaat 150.
    rect(100, 100, 200, 200);

    fill(0, 255, 0);
    // De noStroke() functie zorgt ervoor dat er geen rand getekend wordt. De noStroke() functie neemt geen argumenten.
    noStroke();
    rectMode(CENTER);
    rect(300, 300, 200, 200);

    fill(0, 0, 255);
    rectMode(CENTER);
    rect(500, 500, 200, 200);


}