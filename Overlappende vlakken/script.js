function setup() {

    // Selecteer het overlappende vlak
    let highlight = select(".highlight");

    // Voeg een muisinvoer event toe om de breedte aan te passen bij het hoeveren van de muis over het gekleurde vlak
    highlight.mouseOver(function () {
    highlight.style("width", "10cm");
    });

    // Herstel de breedte bij het hoeveren van de  muis buiten het gekleurde vlak
    highlight.mouseOut(function () {
    highlight.style("width", "5cm");
    });

}
